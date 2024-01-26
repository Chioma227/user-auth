import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Auth from "../../../firebase.config";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import { Navigate } from "react-router-dom";
import { SuccessModal, ErrorModal } from "../molecules/modal/Modal";


import Email from "../../../assets/icons/mail.svg"
import eyeOn from "../../../assets/icons/eyeOn.png"
import eyeOff from "../../../assets/icons/eyeOff.png"
import logInSvg from "../../../assets/icons/welcome.svg"


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLggedIn] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)


  const handleSignIn = (e) => {
    // prevent default browser submit action
    e.preventDefault()
    setLoading(true)

    const auth = Auth;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setIsModalOpen(true)
          setIsLggedIn(true)
        }
        setLoading(false)
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const visibilityOnClickHandler = (e) => {
    setPasswordVisibility((passwordVisibility) => {
      return !passwordVisibility;
    });
  };


  return (
    <>
      {isLoggedIn ? <Navigate to="/welcome" /> : <Container variant="flexed" className="relative h-screen pt-[7%] w-[100%] px-[6%]">
        {isModalOpen && <SuccessModal>
          <div>Success</div>
        </SuccessModal>}
        <div className="flex items-center justify-center lg:w-[600px] md:w-[450px] w-[250px]">
          <img src={logInSvg} alt="welcome" className="w-full lg:h-[600px] object-contain md:ml-0 ml-[95px]" />
        </div>

        <section className="md:w-[50%] w-[100%] ">
          <form onSubmit={handleSignIn}>
            <div className="relative mb-[15px]">
              <input
                className="text-grey outline-none w-[100%] indent-[15px] bg-grey bg-opacity-25 placeholder:text-grey py-[10px] rounded-lg"
                type="text"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={Email} alt="mail-icon" className="absolute top-[12px] right-[10px]" />
            </div>

            <div className="relative mb-[15px]">
              <input
                className="text-grey outline-none w-[100%] indent-[15px] bg-grey bg-opacity-25 placeholder:text-grey py-[10px] rounded-lg"
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
              Don't have an account yet?
              <Link to="/sign-up">
                <span className="text-redSecondary underline"> Sign Up</span>
              </Link>
            </p>
          </div>
        </section>
      </Container>
      }
    </>
  );
};

export default SignIn;
