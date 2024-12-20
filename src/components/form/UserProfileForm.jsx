import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Userimage from "../../assets/user.png";
import TextInput from "@/common/TextInput";
import ToastNotifications from "@/common/ToastNotifications";
import { FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateField } from "../../redux/Slices/UserSlice";
const UserProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [base64Image, setBase64Image] = useState(null);
  const dispatch=useDispatch()
  const onSubmit = (data) => {
    // console.log(data, base64Image)
    const updateddata={
      ...data,
      image:base64Image
      
    }
    // console.log(updateddata,"updateddata")
    dispatch(updateField(updateddata))
    toast.success("Profile updated successfully")
    // console.log("data",updateddata)
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-6 gap-6 mt-6">
          <div className="flex flex-col justify-start items-center  ">
            <div className="relative w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={base64Image ? base64Image : Userimage}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                <label
                  htmlFor="fileInput"
                  className="p-2 bg-black rounded-full cursor-pointer flex items-center justify-center"
                >
                  <FaPencil color="#FFFFFF" />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setBase64Image(reader.result); 
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            </div>

            {/* <h2 className="font-bold mt-5 text-center">{formData?.name ? formData?.name : "Guest"}</h2> */}
          </div>

          {/* Form Columns */}
          <div className="md:col-span-5 space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput
                label="Your Name"
                name="name"
                register={register}
                errors={errors}
                placeholder="please enter name"
              />
              <TextInput
                label="User Name"
                name="userName"
                register={register}
                errors={errors}
                placeholder="please enter user name "
              />
              <TextInput
                label="Email"
                name="email"
                register={register}
                errors={errors}
                type="email"
                placeholder="please enter email"
              />
              <TextInput
                label="Password"
                name="password"
                register={register}
                errors={errors}
                type="password"
                placeholder="please enter password"
              />
              <TextInput
                label="Date of Birth"
                name="dob"
                register={register}
                errors={errors}
                type="date"
                // placeholder="25 January 1990"
              />
              <TextInput
                label="Present Address"
                name="presentAddress"
                register={register}
                errors={errors}
                placeholder="please enter present address"
              />
              <TextInput
                label="Permanent Address"
                name="permanentAddress"
                register={register}
                errors={errors}
                placeholder="please enter permanent address"
              />
              <TextInput
                label="City"
                name="city"
                register={register}
                errors={errors}
                placeholder="Please enter city"
              />
              <TextInput
                label="Postal Code"
                name="postalCode"
                register={register}
                errors={errors}
                type="number"
                placeholder="Please enter Postal Code"
                // type="Please enter Postal Code"
              />
              <TextInput
                label="Country"
                name="country"
                register={register}
                errors={errors}
                placeholder="Please enter country"
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
              lg:w-max md:w-max w-full justify-center
              hover:bg-gray-900
            "
          >
            Save
            {/* <svg
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
            </svg> */}
          </button>
        </div>
      </form>
      <ToastNotifications />
    </>
  );
};

export default UserProfileForm;
