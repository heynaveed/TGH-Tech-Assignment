import { Box, Button, Flex, Select, Text, background } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { GetQuotesAPI, PostQuotesAPI } from "../Components/Fetch";

export default function Home() {
    const toast = useToast()
    const [Tag, setTag] = useState("");
    const [Quote, setQuote] = useState("");
    const HandelClicked = () => {
        Quote.tags = "";
        PostQuotesAPI(Quote)
            .then((res) => {
                toast({
                    title: 'Success',
                    description: res.data,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: "top"
                })
            })
            .catch((err) => {
                toast({
                    title: 'Error',
                    description: "Something Went Wrong Please Try Later",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: "top"
                })
            })
    }

    const GetQuotes = () => {
        GetQuotesAPI(Tag).then((res) => {
            console.log(res.data, "sress")
            setQuote(res.data)
            console.log(Quote)
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetQuotes()
    }, [])

    return (
        <div className="Body">
            <Flex color={"#9F7AEA"} justifyContent={"space-between"} w={"90%"} m={"auto"} padding={"1rem"} fontWeight={"500"} fontSize={"20px"}>
                <Text>HOME</Text>
                <a href="/bookmarks"><Text>BOOKMARK</Text></a>
            </Flex>
            <Box border={"1px solid #9F7AEA"} w={{ base: "80%", md: "50%", lg: "40%" }} m={"auto"} mt={{ base: "20px", md: "50px", lg: "100px" }} borderRadius={"20px"} color={'white'} bg={"#9F7AEA"}>
                <Text fontSize={{ base: "20px", md: "25px", lg: "26px" }} fontWeight={{ base: "500", md: "500", lg: "600" }} w={{ base: "90%", md: "80%", lg: "80%" }} textAlign={"left"} m={"auto"} mt={"30px"}>{Quote.content || "Loading"}</Text>
                <Flex justifyContent={"center"} mb={"20px"} mt={"10px"}> <Text fontSize={{ base: "15px", md: "17px", lg: "18px" }} fontWeight={{ base: "500", md: "600", lg: "700" }}>-{Quote.author || "Loading"} </Text><Text mt={"7px"} ml={"60px"} onClick={HandelClicked} cursor={"pointer"}><BsFillBookmarkPlusFill /></Text></Flex>
            </Box>
            <Box>
                <Select
                    border={"1px solid #9F7AEA"}
                    color={"#9F7AEA"}
                    placeholder='Select Tags'
                    value={Tag}
                    background={"black"}
                    onChange={(e) => setTag(e.target.value)}
                    w={{ base: "40%", md: "30%", lg: "20%" }}
                    m={"auto"}
                    mt={"30px"}
                    style={{
                        option: () => background = "black"
                    }}
                >
                    <option value='Wisdom'>Wisdom</option>
                    <option value='Happiness'>Happiness</option>
                    <option value='Success'>Success</option>
                    <option value='Friendship'>FriendShip</option>
                    <option value='Love'>Love</option>
                    <option value='famous-quotes'>Famous Quote</option>
                </Select>
                <br />
                <Button colorScheme='purple' onClick={GetQuotes}>Next Quote</Button>
            </Box>
        </div>
    )
}