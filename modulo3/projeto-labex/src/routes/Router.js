import {BrowserRouter, Routes , Route} from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";

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