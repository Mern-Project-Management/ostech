import React from 'react'

export function Button({ className, variant = 'default', children, ...props }) {
  const baseStyle = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    default: 'bg-[#1290ca] text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  }

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}