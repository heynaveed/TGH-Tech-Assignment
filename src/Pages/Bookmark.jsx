import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { DeleteBookmarked, GetBookmarked } from "../Components/Fetch";
import { MdDelete } from 'react-icons/md';
import { TbFaceIdError } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux";
import { GetBookmarkedFailure, GetBookmarkedRequest, GetBookmarkedSuccess } from "../Redux/Actions";

export default function Bookmark() {
    const toast = useToast()
    const BookMarkedData = useSelector(state => state.Bookmark);
    const Loading = useSelector(state => state.isLoading)
    const Dispatch = useDispatch();

    const GetBookMarked = () => {
        Dispatch(GetBookmarkedRequest());
        GetBookmarked()
            .then((res) => {
                console.table(res.data)
                Dispatch(GetBookmarkedSuccess(res.data));
            })
            .catch((err) => {
                console.log(err)
                Dispatch(GetBookmarkedFailure());
            })
    }
    const HandelDelete = (id) => {
        DeleteBookmarked(id)
            .then((res) => {
                console.log(res.data)
                toast({
                    title: 'Success',
                    description: res.data,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: "top"
                })
            })
            .then(() => {
                GetBookMarked();
            })
    }
    useEffect(() => {
        GetBookMarked();
    }, [])
    console.log(BookMarkedData, Loading)
    return (
        <>
            <Flex color={"#9F7AEA"} justifyContent={"space-between"} w={"90%"} m={"auto"} padding={"1rem"} fontWeight={"500"} fontSize={"20px"}>
                <a href="/"><Text>HOME</Text></a>
                <Text>BOOKMARK</Text>
            </Flex>
            {
                BookMarkedData.length == 0 && <Text fontSize={"100px"} m={"auto"} w={"10%"} color={"#44337A"}><TbFaceIdError /></Text>
            }
            <Box maxH={"90vh"} overflow={"auto"}>
            {
                BookMarkedData && BookMarkedData.map((elem) => {
                    return <Box border={"1px solid #9F7AEA"} w={{ base: "80%", md: "50%", lg: "40%" }} m={"auto"} mt={{ base: "20px", md: "30px", lg: "30px" }} borderRadius={"20px"} color={'white'} bg={"#9F7AEA"}>
                        <Text fontSize={{ base: "20px", md: "25px", lg: "26px" }} fontWeight={{ base: "500", md: "500", lg: "600" }} w={{ base: "90%", md: "80%", lg: "80%" }} textAlign={"left"} m={"auto"} mt={"30px"}>{elem.content || "Loading"}</Text>
                        <Flex justifyContent={"center"} mb={"20px"} mt={"10px"}> <Text fontSize={{ base: "15px", md: "17px", lg: "18px" }} fontWeight={{ base: "500", md: "600", lg: "700" }}>-{elem.author || "Loading"} </Text><Text mt={"7px"} ml={"60px"} onClick={() => HandelDelete(elem._id)} cursor={"pointer"} color={"#44337A"}><MdDelete /></Text></Flex>
                    </Box>
                })
            }
           </Box>
        </>
    )
}