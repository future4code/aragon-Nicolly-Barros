import { useEffect } from "react";
import Header from "../components/Header";
import { toGoLogin } from "../routes/coordinator";

export default function PostDetails() {

    useEffect(() => {
        const token = window.localStorage.getItem("token-labeddit");

        if (!token) {
            toGoLogin(navigate);
        }
    },[])

    
    return(
        <>
            <Header />
            <h2>Detalhes do post</h2>
        </>
    )
}