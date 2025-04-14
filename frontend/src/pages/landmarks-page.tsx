import { Provider } from "../components/ui/provider";
import React from "react";
import { Card } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { CheckboxCard, CheckboxGroup, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandmarksPage: React.FC = () => {
  const navigate = useNavigate();

  const toAttributesPage = () => {
    navigate("/attributes-page");
  };
  return (
    <Provider>
      <div className="flex h-screen items-start justify-center">
        <Card.Root className=" flex items-start justify-center">
          <Card.Body className="flex text-center !text-8xl text-blue-500 gap-10">
            What Do You Want to See in NYC?
            <Stack align="center">
              <CheckboxGroup>
                <Flex gap="2" direction="column">
                  <CheckboxCard.Root
                    key={"Empire State Building"}
                    value={"Empire State Building"}
                  >
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control>
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>
                          Empire State Building
                        </CheckboxCard.Label>
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>

                  <CheckboxCard.Root key={"The Met"} value={"The Met"}>
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control>
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>The Met</CheckboxCard.Label>
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>

                  <CheckboxCard.Root
                    key={"One World Trade Center"}
                    value={"One World Trade Center"}
                  >
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control>
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>
                          One World Trade Center
                        </CheckboxCard.Label>
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>
                  <CheckboxCard.Root
                    key={"American Museum of National History"}
                    value={"American Museum of National History"}
                  >
                    <CheckboxCard.HiddenInput />
                    <CheckboxCard.Control>
                      <CheckboxCard.Content>
                        <CheckboxCard.Label>
                          American Museum of National History
                        </CheckboxCard.Label>
                      </CheckboxCard.Content>
                      <CheckboxCard.Indicator />
                    </CheckboxCard.Control>
                  </CheckboxCard.Root>
                </Flex>
              </CheckboxGroup>
              <Button size="lg" onClick={toAttributesPage}>
                Next Page
              </Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </div>
    </Provider>
  );
};

export default LandmarksPage;
