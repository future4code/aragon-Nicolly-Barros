import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { paginaHome } from "../routes/coordinator";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("Você precisa se logar para acessar essa página!");
      paginaHome(navigate);
    }
  }, []);
};
