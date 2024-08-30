import { useAuth } from "../../hook/useAuth.jsx";
import Header from "../Header";
import Cookies from "js-cookie";

const AuthLayout = ({ children }) => {
  const { logout } = useAuth();
  if (!Cookies.get("_token") && !Cookies.get("_refreshtoken")) {
    logout();
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthLayout;
