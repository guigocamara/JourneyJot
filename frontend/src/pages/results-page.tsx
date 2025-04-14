import { Provider } from "../components/ui/provider";
import React from "react";
import { Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import { CheckboxCard, CheckboxGroup, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();

  const toHomePage = () => {
    navigate("/");
  };
  return (
    <Provider>
      <div className="flex h-screen items-start justify-center">
        <Card.Root className="w-full h-full flex items-start justify-center">
          <Card.Body className="flex text-center w-full !text-8xl text-blue-500 gap-10">
            Here are the closest Chinese Food near The Met!
            <Stack align="center">
              <CheckboxGroup>
                <Flex gap="2" direction="column">
                  <CheckboxCard.Root
                    key={"Tang by Mr. Sun"}
                    value={"Tang by Mr. Sun"}
                  >
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control>
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>Tang by Mr. Sun</CheckboxCard.Label>
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>

                  <CheckboxCard.Root
                    key={"Peng’s Noodle Folk"}
                    value={"Peng’s Noodle Folk"}
                  >
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control>
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>
                          Peng’s Noodle Folk
                        </CheckboxCard.Label>
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>

                  <CheckboxCard.Root
                    key={"Trim Dim Shanghai"}
                    value={"Trim Dim Shanghai"}
                  >
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control>
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>
                          Trim Dim Shanghai
                        </CheckboxCard.Label>
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>
                </Flex>
              </CheckboxGroup>
              <Button size="lg" onClick={toHomePage}>
                Return to Home Page
              </Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </div>
    </Provider>
  );
};

export default ResultsPage;
