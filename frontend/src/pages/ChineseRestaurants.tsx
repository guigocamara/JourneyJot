import React, { useState } from "react";
import api from "../api/restaurants";
import { Button, Code, Stack } from "@chakra-ui/react";

const ChineseRestaurants: React.FC = () => {
  const [formattedData, setFormattedData] = useState<string>("");

  const fetchChineseRestaurants = async () => {
    try {
      const response = await api.get("/top_chinese_restaurants");
      const prettyJson = JSON.stringify(response.data, null, 2);
      setFormattedData(prettyJson);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setFormattedData("Error fetching data.");
    }
  };

  return (
    <Stack spaceY={4}>
      <Stack spaceY={4}>
        <Button
          bg="mediumaquamarine"
          color="white"
          _hover={{ bg: "mediumseagreen" }}
          onClick={fetchChineseRestaurants}
        >
          GET /top_chinese_restaurants
        </Button>
        <Button
          bg="tomato"
          color="white"
          _hover={{ bg: "red.600" }}
          onClick={() => setFormattedData("")}
        >
          Clear
        </Button>
      </Stack>

      {formattedData && (
        <Code width="100%" whiteSpace="pre-wrap" p={4} borderRadius="md">
          <pre>{formattedData}</pre>
        </Code>
      )}
    </Stack>
  );
};

export default ChineseRestaurants;
