import { Provider } from "../components/ui/provider";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const toLandmarksPage = () => {
    navigate("/landmarks-page");
  };

  return (
    <Provider>
      <div className="flex-col h-screen items-start justify-center">
        <Card.Root className="flex items-start justify-center">
          <Card.Body className="flex text-center w-full !text-8xl text-blue-500 gap-10">
            What City Do You Want to Visit?
            <Input placeholder="New York City" />
          </Card.Body>
        </Card.Root>
        {/* Increase button size */}
        <Button
          size="lg"
          sx={{ fontSize: "20px", padding: "20px 40px" }}
          onClick={toLandmarksPage}
        >
          Next Page
        </Button>
      </div>
    </Provider>
  );
};

export default LandingPage;
