import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import Container from "../atoms/Container";
import Auth from "../../../firebase.config";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { ErrorModal, SuccessModal } from "../molecules/modal/Modal";

// icons/imgs

import user from "../../../assets/icons/user.svg"
import Email from "../../../assets/icons/mail.svg"
import phone from "../../../assets/icons/phone.svg"
import eyeOn from "../../../assets/icons/eyeOn.png"
import eyeOff from "../../../assets/icons/eyeOff.png"
import getStarted from "../../../assets/icons/getStarted.svg"


const SignUp = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("")

  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoggedIn, setIsLggedIn] = useState(false)

  const [isSuccess, setIsSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")




  const handleSignIn = (e) => {
    e.preventDefault()
    setLoading(true);

    //sign in user
    const auth = Auth;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name;

        if (user) {
          console.log(user);
          setIsSuccess(true)
          setIsLggedIn(true)
        }
        setLoading(false);
        console.log(user);
      })
      .catch((error) => {
        setIsError(true)
        setLoading(false);

        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('Email is already in use. Please use a different email.');
        } else {
          // Handle other error types if needed
          setErrorMessage('An error occurred. Please try again.');
        }

        console.log(error.message);
      });

  };


  const visibilityOnClickHandler = (e) => {
    setPasswordVisibility((passwordVisibility) => {
      return !passwordVisibility;
    });
  };


  const inputSchema = [
    {
      id: 1,
      type: "name",
    },
    {
      id: 2,
      type: "email",
    },
    {
      id: 3,
      type: "password",
    },
    {
      id: 4,
      type: "confirmpassword",
    }
  ]


  return (
    <>
      {isLoggedIn ? <Navigate to="/welcome" /> : <Container variant="flexed" className="md:justify-around relative pt-[7%] w-screen px-[6%]">
        {/* <ErrorModal>hello world</ErrorModal> */}
        {isError &&
          <ErrorModal onClick={() => setIsError(!isError)}>{errorMessage}</ErrorModal>
        }
        <section className="flex items-center justify-center">
          <img className="lg:w-[600px] md:w-[450px] w-[400px] lg:h-[600px] object-contain md:ml-0 ml-[60px]" src={getStarted} alt="getStarted" />
        </section>
        <section className="md:w-[50%] w-[100%] ">
          <form onSubmit={handleSignIn}>
            <div className="relative mb-[15px]">
              <input
                className="text-grey w-[100%] indent-[15px] bg-grey bg-opacity-25 placeholder:text-grey py-[10px] rounded-lg"
                type="text"
                value={name}
                required
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
              <img src={user} alt="user-icon" className="absolute top-[9px] right-[10px]" />
            </div>
            <div className="relative mb-[15px]">
              <input
                className="text-grey w-[100%] indent-[15px] bg-grey bg-opacity-25 placeholder:text-grey py-[10px] rounded-lg"
                type="email"
                required
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={Email} alt="mail-icon" className="absolute top-[12px] right-[10px]" />
            </div>
            <div className="relative mb-[15px]">
              <input
                className="text-grey w-[100%] indent-[15px] bg-grey bg-opacity-25 placeholder:text-grey py-[10px] rounded-lg"
                type="text"
                value={confirmPassword}
                required
                placeholder="Phone number"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img src={phone} alt="user" className="absolute top-[9px] right-[10px]" />
            </div>
            <div className="relative mb-[15px]">
              <input
                className="text-grey w-[100%] indent-[15px] bg-grey bg-opacity-25 placeholder:text-grey py-[10px] rounded-lg"
                type={passwordVisibility ? "text" : "password"}
                value={password}
                required
                placeholder={passwordVisibility ? "password" : "********"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={passwordVisibility ? eyeOn : eyeOff} alt="phone-icon"
                className="absolute top-[12px] right-[10px] w-[20px] h-[16px] cursor-pointer"
                onClick={visibilityOnClickHandler}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              onClick={handleSignIn}
              isLoading={loading}
              className="text-center flex items-center justify-center"
            >
              Next &gt;
            </Button>
          </form>

          <div className="md:mt-[30px] mt-[10px] flex items-center justify-center">
            <p className=" font-medium text-gray-400">
              Already a member?
              <Link to="/sign-in">
                <span className="text-redSecondary underline"> Log in</span>
              </Link>
            </p>
          </div>
        </section>
      </Container>}
    </>
  );
};

export default SignUp;
