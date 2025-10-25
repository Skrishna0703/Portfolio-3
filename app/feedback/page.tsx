'use client';

import { motion } from "framer-motion";
import { useNavigation } from "@/lib/navigation";
import { FeedbackForm } from "@/components/sub/feedback-form";

export default function FeedbackPage() {
  const { goToHome } = useNavigation();

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-[#030014] overflow-hidden">
      <div className="container max-w-3xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={goToHome}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            Your Feedback Matters
          </h1>
          
          <p className="text-gray-400 text-center mb-12">
            I appreciate your feedback to help improve and enhance the portfolio experience.
          </p>

          <div className="bg-[#0300145e] border border-[#2A0E61] rounded-lg p-6 backdrop-blur-md">
            <FeedbackForm />
          </div>
        </motion.div>
      </div>
    </main>
  );
}