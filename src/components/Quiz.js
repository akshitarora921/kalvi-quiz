import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";


function Quiz({ QA, addScore, isSubmitted }) {
    const [selected, setSelected] = React.useState("");

    useEffect(() => {
        if (selected === QA.answer) {
            addScore()//need to find good logic
        }
    }, [selected])
    return (
        <Box mx={{ base: '2%', md: '20%' }} mt="3" border="1px solid grey" borderRadius='lg' p="4">

            <Heading size='lg'>{QA.question} </Heading>

            <Stack spacing='2' mt='2'>
                {QA.options?.map((option, index) => (
                    <Box
                        borderRadius='md'
                        bg={
                            isSubmitted
                                ? option === QA.answer && "green.300"
                                : selected === option && "#eee"
                        }
                        color={selected === option && "black"}
                        onClick={() => !isSubmitted && setSelected(option)}
                        w={{ base: '90%', md: '60%' }}
                        transition='all linear.2s'
                        _hover={!isSubmitted && { bg: "#eee", color: "black    " }}
                    >
                        {" "}
                        <Text pl='2'>{index + 1 + ". " + option}</Text>
                    </Box>
                ))}
            </Stack>


        </Box>
    );
}

export default Quiz;
