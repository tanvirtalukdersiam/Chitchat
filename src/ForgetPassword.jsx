import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const ForgetPassword = () => {
  const auth = getAuth();
  let [email, setEmail] = useState("");

  let handleInput = (e) => {
    setEmail(e.target.value);
  };

  let handleForget = () => {
    sendPasswordResetEmail(auth, email)
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="bg-[#f6f7fb] h-screen">
      <div className="  flex justify-center   ">
        <div className=" bg-[#f6f7fb] w-[800px] h-[150px] flex justify-between items-center mt-3">
          <div>
            <img src="images/logo.png" alt="" />
          </div>
          <div>
            <h2 className="text-[#999999] text-[16px] font-nunito">
              Some Description
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#fff] w-[800px]  p-[30px] rounded-[8px]">
          <h2 className="text-[18px] font-semibold font-nunito">
            Password Reset
          </h2>
          <p className="text-[16px] text-[#828282] mt-3  font-nunito">
            You forgot your password for Endless Admin. If this is true, Enter
            your email below to reset your password.
          </p>
          <input
            onChange={handleInput}
            className=" rounded-[4px] mt-[16px] h-[55px] w-[384px] border-[2px] border-1 outline-none pl-[14px]"
            type="email"
            placeholder="Enter Your Email"
          />
          <div className="mt-[30px]">
            <Link
              onClick={handleForget}
              className="bg-[#1c9dea] ml-[3px] px-[64px] py-[13px] text-[#fff] rounded-[8px] font-semibold text-[18px] focus:outline-none focus:ring focus:ring-[#0689d5]"
            >
              Send
            </Link>
            <Link
              to={"/"}
              className="bg-red-600 px-[64px] ml-[28px] py-[13px] text-[#fff] rounded-[8px] font-semibold text-[18px] focus:outline-none focus:ring focus:ring-[#b91c1c]"
            >
              Cancel
            </Link>
          </div>
          <h1 className=" text-[16px] text-[#828282] mt-[22px]  font-nunito">
            Good luck! Hope it works.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
