import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/post/:id" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}