import React from 'react';

const TextInput = ({ label, name, register, errors, type = "text", placeholder }) => {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        autoComplete='off'
        className={`w-full px-4 py-2 border rounded-md mt-1 ${
          errors[name] ? 'border-red-500' : ''
        }`}
        {...register(name, { required: `${label} is required` })}
        placeholder={placeholder}
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

export default TextInput;
