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
    const updateddata={
      ...data,
      image:base64Image
      
    }
    dispatch(updateField(updateddata))
    toast.success("Profile updated successfully")
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
           
          </button>
        </div>
      </form>
      <ToastNotifications />
    </>
  );
};

export default UserProfileForm;
