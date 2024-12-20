import React, { useState } from "react";
import { useForm } from "react-hook-form";

import TextInput from "@/common/TextInput";
import ToastNotifications from "@/common/ToastNotifications";

const UserProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({});
  const onSubmit = (data) => {
    toast.success("Data submitted successfully");
    console.log("data", data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Avatar Column */}
          <div className="flex flex-col justify-start items-center  ">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="https://i.pravatar.cc/150?u=5"
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2 className="font-bold mt-5 text-center">
              {formData?.name ? formData?.name : "Guest"}
            </h2>
          </div>

          {/* Form Columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <TextInput
                label="Your Name"
                name="name"
                register={register}
                errors={errors}
                placeholder="Enter Your Name"
              />
              <TextInput
                label="User Name"
                name="userName"
                register={register}
                errors={errors}
                placeholder="Enter Your UserName"
              />
              <TextInput
                label="Email"
                name="email"
                register={register}
                errors={errors}
                type="email"
                placeholder="Enter Your Email"
              />
              <TextInput
                label="Password"
                name="password"
                register={register}
                errors={errors}
                type="password"
                placeholder="********"
              />
              <TextInput
                label="Date of Birth"
                name="dob"
                register={register}
                errors={errors}
                type="date"
              />
              <TextInput
                label="Present Address"
                name="presentAddress"
                register={register}
                errors={errors}
                placeholder="Enter Present Address"
              />
              <TextInput
                label="Permanent Address"
                name="permanentAddress"
                register={register}
                errors={errors}
                placeholder="Enter Permanent Address "
              />
              <TextInput
                label="City"
                name="city"
                register={register}
                errors={errors}
                placeholder="Enter City"
              />
              <TextInput
                label="Postal Code"
                name="postalCode"
                register={register}
                errors={errors}
                placeholder="Enter Postal Code"
                type="number"
              />
              <TextInput
                label="Country"
                name="country"
                register={register}
                errors={errors}
                placeholder="Enter Country"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="
              flex items-center gap-2 px-20 py-2 mt-2 text-xl font-medium text-white bg-black rounded-md 
              relative z-30 overflow-hidden 
              transition-all duration-700 
              after:absolute after:-z-20 after:h-1 after:w-1 after:bg-green-800 after:left-5 
              after:bottom-0 after:translate-y-full after:rounded-md 
              after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 
              after:transition-all after:duration-700
              [text-shadow:3px_5px_2px_#4f046a] hover:[text-shadow:2px_2px_2px_#333]
              hover:bg-green-800
              lg:w-max md:w-max w-full justify-center
            "
          >
            Save
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="drop-shadow-[3px_5px_2px_#4f046a] hover:drop-shadow-[2px_2px_2px_#333] transition duration-700"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.698 4.034L21 12L4.698 19.966a.5.5 0 0 1-.546-.124a.56.56 0 0 1-.12-.568L6.5 12L4.032 4.726a.56.56 0 0 1 .12-.568a.5.5 0 0 1 .546-.124M6.5 12H21"
              />
            </svg>
          </button>
        </div>
      </form>
      <ToastNotifications />
    </>
  );
};

export default UserProfileForm;
