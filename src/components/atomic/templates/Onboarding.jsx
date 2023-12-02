import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { OnBoardLoader } from "../atoms/loader/Loader";
import onBoardImg from "../../../assets/imgs/Frame 1.png";

const Onboarding = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    //set timeout for redirect
    const duration = setTimeout(() => {
      setTransition(true);
    }, 5000);

    //clear timeout
    return () => clearTimeout(duration);
  }, []);

  return (
    <div>
      {transition ? (
        <Navigate to="/redirect" />
      ) : (
        <div className=" onboarding bg-redSecondary">
          <img src={onBoardImg} alt="onBoarding" width={500} height={500} />
          <div>
            <OnBoardLoader />
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
