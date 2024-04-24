import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function MyForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const baseUrl = "http://localhost:3001";
  
    const sendEmail = async () => {
      let dataSend = {
        email: email,
        subject: subject,
        message: message,
      };
  
      const res = await fetch(`${baseUrl}/api/sendmail/mail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // HANDLING ERRORS
        .then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
            navigate("/condidataccepter");
          }
        });
    };
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={4} px={8}>
          <Stack align={"center"}>
            <Heading fontSize={"8xl"}>Send email to the account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Don't forget to subscribe ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Receiver's Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Subject</FormLabel>
                <Input
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Enter the subject here..."
                />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Message</FormLabel>
                <Textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message here..."
                />
              </FormControl>
              <Stack spacing={40}>
              <Button
                   size="sm"
            fontSize="sm" // Définir la taille de la police pour réduire la hauteur du bouton
                px={2} // Réduire le padding horizontal
              py={2} // Réduire le padding vertical
               bg={"blue.400"}
             color={"white"}
                 _hover={{
               bg: "blue.500",
                  }}
                  onClick={() => sendEmail()}
                     >
               Send Email
                 </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  };
  