import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
  name: "profile",
  initialState: {
    name: "",
    email: "",
    dateOfBirth: "",
    presentAddress: "",
    permanentAddress: "",
    postalCode: "",
    city: "",
    country: "",
    userName: "",
    password: "",
    image: "",
  },
  reducers: {
    updateField: (state, action) => {        
      state = action.payload;
    },
  },
});
export const { updateField } = UserSlice.actions;
export default UserSlice.reducer;
