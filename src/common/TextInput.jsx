import React from 'react';

const TextInput = ({ label, name, register, errors, type = "text", placeholder }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm">{label}</label>
      <input
        type={type}
        autoComplete='off'
        className={`w-full px-4 py-1 border rounded-xl mt-1 ${
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
