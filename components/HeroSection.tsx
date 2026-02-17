
import React from 'react';
import { Button } from './Button';
import { Badge } from './Badge';

interface HeroSectionProps {
  onStartExploring: () => void;
  onBrowseSkills: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartExploring, onBrowseSkills }) => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 text-center bg-indigo-50 rounded-lg shadow-lg overflow-hidden my-8">
      {/* Background circles for visual flair */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Badge text="Preparing Kids for Tomorrow" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Map Today's Learning to <span className="gradient-text">2030 Skills</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Discover how your child's school curriculum connects to the essential skills
          they'll need in 2030. Make learning meaningful and future-ready.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button appearance="primary" onClick={onStartExploring} aria-label="Start Exploring curriculum mapping">
            Start Exploring
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Button>
          <Button appearance="outlined" onClick={onBrowseSkills} aria-label="Browse 2030 Skills list">
            Browse 2030 Skills
          </Button>
        </div>
      </div>
    </section>
  );
};
