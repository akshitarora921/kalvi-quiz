import { Box, Button, ColorModeScript, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import theme from "./theme";

const QAs = [
  {
    question: "The longest cell in human body is ___",
    options: ["Red blood cell", "Nerve cell", "Muscle cell", "Fat cell"],
    answer: "Nerve cell",
  },
  {
    question: "Which of the following is only present in plant cell?",
    options: ["Cell membrane", "Cell wall", "ribosomes", "Lysosomes"],
    answer: "Cell wall",
  },
  {
    question: "A prokaryotic cell has ___",
    options: [
      "Nucleus, cell membrane, cytoplasm",
      "Nucleus, mitochondria, cell membrane",
      "Nucleoid, cell membrane, ribosome",
      "Nucleoid, cell wall, mitochondria",
    ],
    answer: "Nucleoid, cell membrane, ribosome",
  },
];
function App() {
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  return (
    <div className='app'>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />
      <Box>
        {isSubmitted && <ScoreCard score={score} totalQuestions={QAs.length} />}
        {QAs.map((QA) => (
          <Quiz
            QA={QA}
            addScore={() => setScore(score + 1)}
            isSubmitted={isSubmitted}
          />
        ))}

        <Flex align="start" mx={{ base: '4', md: '20%' }} justify='flex-start'>

          <Button
            onClick={() => setIsSubmitted(true)}

            my='4'
            colorScheme='blue'
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </div>
  );
}

export default App;
