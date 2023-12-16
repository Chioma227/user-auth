import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import Auth from "../../../firebase.config";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";
import getStarted from "../../../assets/imgs/getstared.png"
import Container from "../atoms/Container";

const SignUp = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("")

  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const [loading, setLoading] = useState(false);



  const handleSignIn = () => {
    setLoading(true);

    //sign in user
    const auth = Auth;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name;
        setLoading(false);
        console.log(user);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };


  const visibilityOnClickHandler = (e) => {
    setPasswordVisibility((passwordVisibility) => {
      return !passwordVisibility;
    });
  };


  useEffect(() => {
    const sendEmailVerification = async () => {
      const user = Auth.currentUser;
      if (user) {
        <Navigate to="/verify-email" replace />
        try {
          await user.sendEmailVerification();
          console.log('Verification email sent!');
        } catch (error) {
          console.error('Error sending verification email:', error.message);
        }
      } else {
        console.error('User not authenticated or not found.');
      }
    };
    sendEmailVerification();

  }, []);

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
    <Container variant="flexed" className="justify-around pt-[7%] w-[100%]">
      <section className="relative w-[50%] ">
        <img className="w-[500px] h-[500px]" src={getStarted} alt="getStarted" />
        <h2 className="uppercase text-[70px] font-extrabold absolute top-[15rem] right-[23%]">get started</h2>
        {/* <div>
          <h1 className='text-center text-black font-bold mt-[-60%]'>By creating a fre account</h1>
        </div> */}
      </section>
      <section className="w-[50%] border border-red-300 px-[20px]">
        <form onSubmit={handleSignIn}>
          <div>
            <input
              className=" border-emerald-500 border-2"
              type="text"
              value={name}
              required
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className=" border-emerald-500 border-2"
              type="email"
              required
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className=" border-emerald-500 border-2"
              type="text"
              value={password}
              required
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className=" border-emerald-500 border-2"
              type="text"
              value={confirmPassword}
              required
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            onClick={handleSignIn}
            isLoading={loading}
          >
            sign-up
          </Button>
        </form>

        <div className="mt-[30px]">
          <p>Already have an account? <Link to="/sign-in"> sign in</Link></p>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
