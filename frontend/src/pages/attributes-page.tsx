import { Provider } from "../components/ui/provider";
import React from "react";
import { Input } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const AttributesPage: React.FC = () => {
  const navigate = useNavigate();

  const toResultsPage = () => {
    navigate("/results-page");
  };
  return (
    <Provider>
      <div className="flex h-screen items-start justify-center">
        <Card.Root className="w-full h-full flex items-start justify-center">
          <Card.Body className="flex text-center w-full !text-8xl text-blue-500 gap-10">
            Attributes Page !
            <Input placeholder="Chinese Food" />
            <Button size="lg" onClick={toResultsPage}>
              Click to Results Page
            </Button>
          </Card.Body>
        </Card.Root>
      </div>
    </Provider>
  );
};

export default AttributesPage;
