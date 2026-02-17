
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-4xl text-center py-6 mt-8 border-t border-gray-200 text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Future Skill Mapper. All rights reserved.</p>
    </footer>
  );
};
