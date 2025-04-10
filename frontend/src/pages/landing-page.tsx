import React from "react";
import { Link } from "react-router-dom";
import ChineseRestaurants from "./ChineseRestaurants";
import { Stack } from "@chakra-ui/react";

const LandingPage: React.FC = () => {
  return (
    <>
      <Stack>
        <div className="text-9xl">WELCOME TO JOURNEY JOT</div>
        <Link to="/">Go back to Homepage</Link>
        <ChineseRestaurants />
      </Stack>
    </>
  );
};

export default LandingPage;
