'use client';

import { usePathname, useRouter } from 'next/navigation';

export type NavLink = {
  title: string;
  link: string;
};

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const handleNavigation = (link: string) => {
    if (link.startsWith('#')) {
      if (isHomePage) {
        // On home page, scroll to section
        const element = document.querySelector(link);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // On other pages, go to home then scroll
        router.push(`/${link}`);
      }
    } else {
      // Regular page navigation
      router.push(link);
    }
  };

  const goToHome = () => {
    router.push('/');
  };

  const goToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.querySelector(`#${sectionId}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return {
    handleNavigation,
    goToHome,
    goToSection,
    isHomePage
  };
};