import { Route, Routes } from "react-router";
import SignUp from "./components/atomic/templates/SignUp";
import Redirect from "./components/atomic/templates/Redirect";
import ShouldRenderLoginPage from "./components/atomic/templates/Redirect";
import Onboarding from "./components/atomic/templates/Onboarding";
import SignIn from "./components/atomic/templates/SignIn";
import Welcome from "./components/atomic/templates/Welcome";
// import Image from "./components/atomic/atoms/Image";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Onboarding} />
        <Route exact path="/redirect" Component={ShouldRenderLoginPage} />
        <Route exact path="/sign-up" Component={SignUp} />
        <Route exact path="/sign-in" Component={SignIn} />
        <Route exact path="/verify-email" Component={Redirect} />
        <Route exact path="/welcome" Component={Welcome}/>
      </Routes>
      {/* <ProtectedRoute path="/dashboard" element={Welcome} /> */}
    </div>
  );
}

export default App;
