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
  const [emailInfo, setEmailInfo] = useState("")

  const [password, setPassword] = useState("");
  const [passwordInfo, setPasswordInfo] = useState("")
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const [Phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);

    //validating email
    const emailRegEx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;

    if (emailRegEx.test(e.target.value)) {
      setEmailInfo("");
    } else {
      setEmailInfo("email should follow the pattern email@domain.extension");
    }
  };

  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);

    //validating password
    const passwordRegEx = /^.{6,}$/gi;

    if (passwordRegEx.test(e.target.value)) {
      setPasswordInfo("");
    } else {
      setPasswordInfo("Password should be atleast 6 characters long");
    }
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
    // <main>
    <Container variant="flexed">
      <section>
        <img width={400} height={400} src={getStarted} alt="getStarted" />
        <h2 className="uppercase text-[80px] font-extrabold">get started</h2>
      </section>

      <section>
         {/* <InputField
          input={{
            placeholder: "Email Address",
            onChange: emailOnChangeHandler,
          }}
          rightIcon={{ src: "mail" }}
          isError={emailError}
          isInfo={Boolean(emailInfo)}
          info={emailInfo}
          variant="auth-input-field"
        /> */}
        {/* <InputField
          input={{
            placeholder: "enter phone number",
            type: "number",
            onChange: (e) => setPhone(e.target.value),
          }}
          rightIcon={{ src: "phone" }}
          isError={emailError}
          isInfo={Boolean(emailInfo)}
          info={emailInfo}
          variant="auth-input-field"
        /> */}
        {/* <InputField
          input={{
            placeholder: "Enter Password",
            type: passwordVisibility ? "text" : "password",
            onChange: passwordOnChangeHandler,
          }}
          rightIcon={{
            // src: passwordVisibility ? "Hide" : "Show",
            onClick: visibilityOnClickHandler,
            // className: "cursor-pointer",
          }}
          isError={emailError}
          isInfo={Boolean(emailInfo)}
          info={emailInfo}
          variant="auth-input-field"
        />  */}
        {/* <input
          className=" border-emerald-500 border-2"
          type="text"
          value={name}
          required
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        /> */}
        <input
          className=" border-emerald-500 border-2"
          type="email"
          required
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" border-emerald-500 border-2"
          type="text"
          value={password}
          required
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          className=" border-emerald-500 border-2"
          type="text"
          value={confirmPassword}
          required
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}
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
      </section>
    </Container>
    // </main>
  );
};

export default SignUp;
