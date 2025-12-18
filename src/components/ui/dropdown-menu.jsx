import React, { useState } from 'react';

export const DropdownMenu = ({ children }) => {
  return <div className="relative inline-block text-left">{children}</div>;
};

export const DropdownMenuTrigger = ({ children, asChild }) => {
  return children;
};

export const DropdownMenuContent = ({ children, align = 'start', className }) => {
  // Simple style to mimic the dropdown behavior
  return (
    <div className={`absolute ${align === 'end' ? 'right-0' : 'left-0'} mt-2 w-56 origin-top-right rounded-md bg-[#1a1a3d] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${className}`}>
      <div className="py-1">{children}</div>
    </div>
  );
};

export const DropdownMenuItem = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center px-4 py-2 text-sm text-gray-200 hover:bg-violet-600 hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};