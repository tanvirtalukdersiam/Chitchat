import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX, BsFacebook } from "react-icons/bs";
import { ColorRing } from "react-loader-spinner";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [loader, setLoader] = useState(false);
  let [showEye, setShoweEye] = useState(false);

  let handleName = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is Required");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid Email");
    }

    if (!name) {
      setNameerr("Name is Required");
    }
    // if (password.length < 8) {
    //   setPassworderr("Password must be 8 charecters");
    // }
    if (!password) {
      setPassworderr("Password is Required");
    }
    if (
      email &&
      name &&
      password &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          sendEmailVerification(auth.currentUser).then(() => {
            setTimeout(() => {
              navigate("/");
            }, 2000);
            console.log("successful");
          });
        })
        .catch((error) => {
          if (error.code.includes("auth/email-already-in-use")) {
            setEmailerr("Already Use Email");
          }
        })
        .then(() => {
          toast.success("Signup Successful", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <div className="flex h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* Same as */}
      <ToastContainer />
      <div className=" w-full md:w-[40%] px-[22px] sm:px-[28px] md:px-[65px]">
        <img
          className=" mt-[22px] sm:mt-[33px] md:mt-[50px] "
          src="./images/logo.png"
          alt="logo"
        />
        <div>
          <h1 className=" font-nunito text-[25px] md:text-[27px] font-medium mt-[20px] sm:mt-[30px] md:mt-[45px] text-[#223645] mb-5 sm:mb-[26px] md:mb-0">
            Hello Everyone , We are Chitchat
          </h1>
          <p className="hidden md:block  text-[17px] text-[#647589] mt-[3px] md:mt-[5px] mb-[25px] md:mb-[40px]">
            Welcome to chitchat please login to your account.
          </p>
        </div>
        <div>
          <p className="text-[17px] font-monts font-medium mb-[12px] text-[#223645]">
            Full Name
          </p>
          <input
            onChange={handleName}
            className="w-[100%] px-[12px] py-[12px] border border-1 solid border-[#e5e5e5] rounded-[5px] outline-none "
            type="name"
          />
          {nameerr && <p>{nameerr}</p>}
        </div>
        <div>
          <p className="text-[17px] font-monts font-medium mb-[12px] text-[#223645] mt-[18px] md:mt-[35px]">
            Email Address
          </p>
          <input
            onChange={handleEmail}
            className="w-[100%] px-[12px] py-[12px] border border-1 solid border-[#e5e5e5] rounded-[5px] outline-none"
            type="email"
          />
          {emailerr && <p>{emailerr}</p>}
        </div>
        <div className="relative">
          <p className="text-[17px] font-monts font-medium mb-[12px] text-[#223645] mt-[18px] md:mt-[35px]">
            Password
          </p>
          <input
            onChange={handlePassword}
            className="w-[100%] px-[12px] py-[12px] border border-1 solid border-[#e5e5e5] rounded-[5px] outline-none"
            type={showEye ? "text" : "password"}
          />
          {showEye ? (
            <FaRegEye
              onClick={() => setShoweEye(false)}
              className="absolute top-[53px] right-[15px] text-[22px]"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setShoweEye(true)}
              className="absolute top-[53px] right-[15px] text-[22px]"
            />
          )}

          {passworderr && <p>{passworderr}</p>}
        </div>
        <Link className="flex justify-left mt-[14px] md:mt-[30px] text-[#223645] font-monts text-[14px] font-medium">
          Forgot Password?
        </Link>
        <div className="flex  justify-center mt-[27px] md:mt-[35px] gap-6 sm:gap-[38px] px-[20px] md:px-0">
          <Link
            onClick={handleSubmit}
            to="/Signup"
            className="bg-[#223645] px-[52px] sm:px-[60px] md:px-[64px] py-[14px] md:py-[13px] text-[#fff] rounded-[8px] font-semibold text-[17px] md:text-[18px] focus:outline-none focus:ring focus:ring-[#152c3d]"
          >
            SignUp
          </Link>

          <Link
            to="/"
            className="bg-[#1c9dea] px-[54px] sm:px-[62px] md:px-[64px] py-[14px] md:py-[13px] text-[#fff] rounded-[8px] font-semibold text-[17px] md:text-[18px] focus:outline-none focus:ring focus:ring-[#0689d5]"
          >
            Login
          </Link>
        </div>

        {/* <p className="text-center text-[#223645] text-[13px] mt-[38px] font-monts font-semibold">
          OR Connect with
        </p>
        <div className="flex justify-center items-center gap-8 mt-[17px]">
          <FcGoogle className="text-[36px]" />
          <BsTwitterX className="text-[28px]" />
          <BsFacebook className="text-[31px] text-[#2c67ce]" />
        </div> */}
      </div>
      <div className=" hidden md:block w-[60%]  bg-[#eff7fe] relative">
        <img
          className="h-[550px] w-[650px] mt-[150px] ml-[220px]"
          src="images/signup.png"
          alt="#"
        />
      </div>
    </div>
  );
};

export default Signup;
