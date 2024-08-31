import { useEffect } from "react";
import { useAuth } from "../../hook/useAuth.jsx";
import Header from "../Header";
import Cookies from "js-cookie";
import axios from "../../Service/index.js";

const AuthLayout = ({ children }) => {
  const { logout } = useAuth();

  useEffect(() => {
    const token = Cookies.get("_token");

    if (!token) {
      axios()
        .get("auth-status")
        .then((res) => {
          if (res.status !== 200) {
            logout();
            throw new Error("Not authenticated");
          }
          return res.data;
        })
        .then((data) => {
          if (!data.authenticated) {
            logout();
          }
        })
        .catch((error) => {
          console.error("Error checking auth status:", error);
          logout();
        });
    }
  }, [logout]);
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthLayout;
