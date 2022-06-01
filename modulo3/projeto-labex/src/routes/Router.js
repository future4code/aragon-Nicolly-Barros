import {BrowserRouter, Routes , Route} from "react-router-dom";
import AdminPage from "../pages/admin/AdminPage";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import TripDetailsPage from "../pages/tripDetails/TripDetailsPage";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage />}/>
                    <Route path={"/login"} element={<LoginPage />}/>
                    <Route path={"/admin"} element={<AdminPage />}/>
                    <Route path={"/admin/details/:idTrip"} element={<TripDetailsPage />} />
                    <Route path={"*"} element={<ErrorPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}