
import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 ${className}`}
      role="status"
    >
      <svg
        className="-ml-1 mr-1.5 h-4 w-4 text-indigo-500"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0L9.42 8.78L0 9.7L7.29 15.02L5.05 24L12 19.3L18.95 24L16.71 15.02L24 9.7L14.58 8.78L12 0Z" />
      </svg>
      {text}
    </span>
  );
};
