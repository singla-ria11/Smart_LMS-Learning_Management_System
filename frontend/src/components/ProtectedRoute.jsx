import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
  return (
    user ? <Outlet/> :  navigate('/login')
  )
}

export default ProtectedRoute;