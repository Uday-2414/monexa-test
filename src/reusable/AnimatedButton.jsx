import React from 'react';
import { Link } from 'react-router-dom';

// Reusable animated button. By default renders a <button>; when `to` is provided
// it renders a React Router <Link> with the same styles. Accepts `text`, `onClick`,
// and `fullWidth` to make it suitable for mobile menus.
const Button = ({ text = 'Request a Demo', onClick, to, fullWidth = false }) => {
  const inner = (
    <>
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className={`relative z-10 block px-4 py-2 rounded-xl bg-gray-950 ${fullWidth ? 'w-full text-center' : ''}`}>
        <div className="relative z-10 flex items-center justify-center space-x-2">
          <span className="transition-all duration-500 group-hover:translate-x-1">{text}</span>
          <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
          </svg>
        </div>
      </span>
    </>
  );

  const baseClass = `relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-sm cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 group ${fullWidth ? 'w-full' : ''}`;

  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={baseClass} onClick={onClick}>
      {inner}
    </button>
  );
};

export default Button;
