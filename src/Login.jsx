import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX, BsFacebook } from "react-icons/bs";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const provider = new GoogleAuthProvider();
  let navigate = useNavigate();
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [Err, setErr] = useState("");
  let [showEye, setShoweEye] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailErr("Email is Required");
    }
    if (!password) {
      setErr("SOmething is Wrong");
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Login Successful", {
            position: "top-right",
            autoClose: 2100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/home");
          }, 2100);
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(error.code);
          if (error.code.includes("auth/invalid-credential")) {
            setErr("Something is wrong");
          }
        });
    }
  };

  let handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.code);
      });
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
      <div className="w-[40%] px-[65px]">
        <img className="mt-[50px] " src="./images/logo.png" alt="logo" />
        <div>
          <h1 className="font-nunito text-[27px] font-medium mt-[45px] text-[#223645]">
            Hello Everyone , We are Chitchat
          </h1>
          <p className="text-[17px] text-[#647589] mt-[5px] mb-[40px]">
            Welcome to chitchat please login to your account.
          </p>
        </div>
        <div>
          <p className="text-[17px] font-monts font-medium mb-[12px] text-[#223645]">
            Email Address
          </p>
          <input
            onChange={handleEmail}
            className="w-[100%] px-[12px] py-[12px] border border-1 solid border-[#e5e5e5] rounded-[5px] outline-none"
            type="email"
          />
        </div>
        <div className="relative">
          <p className="text-[17px] font-monts font-medium mb-[12px] text-[#223645] mt-[30px]">
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
          {Err && <p>{Err}</p>}
        </div>
        <Link
          to={"ForgetPassword"}
          className="flex justify-left mt-[25px] text-[#223645] font-monts text-[14px] font-medium"
        >
          Forgot Password?
        </Link>
        <div className="flex justify-center mt-[35px] gap-6">
          <Link
            to="/"
            onClick={handleSubmit}
            className="bg-[#1c9dea] px-[64px] py-[13px] text-[#fff] rounded-[8px] font-semibold text-[18px] focus:outline-none focus:ring focus:ring-[#0689d5]"
          >
            Login
          </Link>
          <Link
            to="/Signup"
            className="bg-[#223645] px-[64px] py-[13px] text-[#fff] rounded-[8px] font-semibold text-[18px] focus:outline-none focus:ring focus:ring-[#152c3d]"
          >
            SignUp
          </Link>
        </div>

        <p className="text-center text-[#223645] text-[13px] mt-[38px] font-monts font-semibold">
          OR Connect with
        </p>
        <div className="flex justify-center items-center gap-8 mt-[17px]">
          <Link onClick={handleGoogle}>
            <FcGoogle className="text-[36px]" />
          </Link>
          <Link>
            {" "}
            <BsTwitterX className="text-[28px]" />
          </Link>
          <Link>
            <BsFacebook className="text-[31px] text-[#2c67ce]" />
          </Link>
        </div>
      </div>
      <div className="w-[60%] bg-[#eff7fe] relative">
        <img
          className="absolute top-[275px] left-[360px]"
          src="images/first.png"
          alt=""
        />
        <img
          className="absolute top-[485px] left-[435px]"
          src="images/man.png"
          alt=""
        />
        <img
          className="absolute bottom-[335px] right-[340px]"
          src="images/woman.png"
          alt=""
        />
        <img
          className="absolute top-[545px] left-[305px]"
          src="images/4.png"
          alt="#"
        />
        <img
          className="absolute bottom-[715px] right-[330px]"
          src="images/4.png"
          alt="#"
        />
        <img
          className="absolute bottom-[700px] right-[440px]"
          src="images/5.png"
          alt="#"
        />
      </div>
    </div>
  );
};

export default Login;
