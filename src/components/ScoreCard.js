import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
const message = [
  "You can do better.",
  "You're mostly there! Let us help you love Science even more!",
  "You're mostly there! Let us help you love Science even more!",
  "Wow! You're a Science wiz! Happy to have you here! 🙌",
];
function ScoreCard({ score, totalQuestions }) {
  return (
    <Box mx='auto' width='fit-content' p='8'>
      <Heading textAlign='center'>
        {" "}
        You have Scored {score}/{totalQuestions}
      </Heading>
      <Text align='center'> {message[score]}</Text>
    </Box>
  );
}

export default ScoreCard;
