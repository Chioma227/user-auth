import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import Auth from "../../../firebase.config";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import getStarted from "../../../assets/imgs/getstared.png"

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);

    //sign in user
    const auth = Auth;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name;
        console.log(`New User: ${user.displayName}`);
        setLoading(false);
        console.log(user);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    };


    useEffect(() => {
      const sendEmailVerification = async () => {
        const user = Auth.currentUser;
        if (user) {
          <Navigate to="/verify-email" replace/>
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

    const inputSchema =[
      {
        id:1,
        type: "name",
      },
      {
        id:2,
        type: "email",
      },
      {
        id:3,
        type: "password",
      },
      {
        id:4,
        type: "confirmpassword",
      }
    ]
 

  return (
    <div>
      <div>
        <img width={400} height={400} src={getStarted} alt="getStarted" />
        <h2 className="uppercase text-[80px] font-extrabold">get started</h2>
      </div>
      <p className="bg-red">welcome onBoard</p>
    
      <input
        className=" border-emerald-500 border-2"
        type="text"
        value={name}
        required
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      /> <br />
      <input
        className=" border-emerald-500 border-2"
        type="email"
        required
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      <input
        className=" border-emerald-500 border-2"
        type="text"
        value={password}
        required
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <input
        className=" border-emerald-500 border-2"
        type="text"
        value={confirmPassword}
        required
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        variant="primary"
        onClick={handleSignIn}
        isLoading={loading}
      >
        sign-up
      </Button>

      <div className="mt-[30px]">
        <p>Already have an account? <Link to="/sign-in"> sign in</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
