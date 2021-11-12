import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
export const useAxios = () => {
  let navigate = useNavigate();
  const { setToken, setLogin } = useAuth();
  const signUp = async (e, email, password) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://test-1.neithalrajpuroh.repl.co/auth/signup/new",
        { email, password }
      );
      let tokenReceived = response.data.token;

      setLogin(true);

      setToken(response.data.token);
      if (response.status === 200) {
        localStorage?.setItem("login", JSON.stringify({ tokenReceived }));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const login = async (e, email, password) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://test-1.neithalrajpuroh.repl.co/auth/login",
        { email, password }
      );
      let tokenReceived = response.data.token;
      setLogin(true);

      setToken(response.data.token);
      if (response.status === 200) {
        localStorage?.setItem("login", JSON.stringify({ tokenReceived }));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { signUp, login };
};
