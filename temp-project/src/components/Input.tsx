import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  error?: string;
  register: any; // react-hook-form register
  className?: string;
}

export default function Input({
  label,
  name,
  type,
  placeholder,
  required = false,
  error,
  register,
  className = '',
}: InputProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {required && <span className="text-[#D7263D] ml-1">*</span>}
      </label>
      <input
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-200 ${
          error ? 'border-[#D7263D]' : ''
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-[#D7263D]">{error}</p>
      )}
    </div>
  );
}
