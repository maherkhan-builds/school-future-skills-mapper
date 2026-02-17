
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance?: 'primary' | 'outlined' | 'secondary'; // Changed from variant to appearance
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  appearance = 'primary', // Default to primary
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'px-6 py-3 rounded-md font-semibold transition duration-200 ease-in-out flex items-center justify-center space-x-2 whitespace-nowrap';
  
  let dynamicStyles = '';
  switch (appearance) {
    case 'primary':
      dynamicStyles = 'bg-indigo-700 text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75';
      break;
    case 'outlined':
      dynamicStyles = 'bg-white text-indigo-700 border border-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75';
      break;
    case 'secondary': // Used for the "Generate Future Skill Map" button, retains previous grey style
      dynamicStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75';
      break;
    default:
      dynamicStyles = 'bg-indigo-700 text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75'; // Fallback to primary
  }

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const styles = `${baseStyles} ${dynamicStyles} ${disabled ? disabledStyles : ''} ${className}`;

  return (
    <button className={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
