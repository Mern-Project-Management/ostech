import React from 'react';

export function Button({ className, variant = 'default', children, isSelected, ...props }) {
  const baseStyle = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    default: 'bg-white text-black hover:bg-gray-100 focus:ring-[#1290ca]',
    outline: 'border border-gray-300 text-gray-700 hover:bg-[#1990ca] focus:ring-[#1290ca]',
  };

  const selectedStyle = isSelected ? 'ring-2 ring-[#1290ca]' : '';

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className} ${selectedStyle}`}
      {...props}
    >
      {children}
    </button>
  );
}
