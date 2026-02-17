
import React from 'react';

export const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2 text-xl font-bold text-gray-900" aria-label="FutureSkill Home">
      <svg
        className="h-7 w-7 text-indigo-700"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.14L18.9 7.5L12 10.86L5.1 7.5L12 4.14ZM4 8.67L11 12.01V19.33L4 15.99V8.67ZM13 12.01L20 8.67V15.99L13 19.33V12.01Z" />
      </svg>
      <span>FutureSkill</span>
    </a>
  );
};
