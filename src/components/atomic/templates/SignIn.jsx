import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Auth from "../../../firebase.config";
import { Link } from "react-router-dom";
import { useState } from "react";
import Image from "../atoms/Image";
import Container from "../atoms/Container";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = () => {
    const auth = Auth;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container variant="contain">
      <Container variant="flexed" className=" h-[100vh]">
      <Image variant="normal">
        <div className="txt-md-bold">
          hello
        </div>
      </Image>
      <Container variant="fitted">
        <input
          className=" border-emerald-500 border-2"
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" border-emerald-500 border-2"
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Container>
      <button onClick={handleSignIn}>signIn</button>

      <div>
        <p>Don't have an account yet, <Link to="/sign-up"> signup</Link></p>
      </div>
      </Container>
    </Container>
  );
};

export default SignIn;
