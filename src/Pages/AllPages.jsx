import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Bookmark from "./Bookmark";

export default function AllPages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bookmarks" element={<Bookmark/>}/>
        </Routes>
    )
}