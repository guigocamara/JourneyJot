import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="text-9xl">WELCOME TO JOURNEY JOT</div>
      <Link to="/">Go back to Homepage</Link>
    </>
  );
};

export default LandingPage;
