import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  src: string;
  title: string;
  langs: string[];
  liveLink: string;
  githubLink: string;
};

export const ProjectCard = ({
  src,
  title,
  langs,
  liveLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className="w-full max-w-sm flex flex-col overflow-hidden rounded-lg 
                    shadow-md bg-black/60 border border-[#2A0E61] 
                    hover:shadow-lg hover:scale-[1.03] transition-transform duration-200">
      
      {/* Project Image */}
      <div className="w-full h-60 relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Project Content */}
      <div className="p-4 flex flex-col flex-1 bg-black/40">
        {/* Title */}
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mt-2">
          {langs.map((lang, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/40"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4">
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live project: ${title}`}
            className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-green-600 hover:bg-green-700 text-white transition"
          >
            <ExternalLink size={16} /> Live
          </Link>

          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub repo for: ${title}`}
            className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition"
          >
            <Github size={16} /> Code
          </Link>
        </div>
      </div>
    </div>
  );
};
