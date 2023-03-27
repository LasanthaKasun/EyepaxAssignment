import { useEffect, useState } from "react";
import Button from "../component/Button/Button";
import MainContainer from "../component/MainContainer/MainContainer";
import TextField from "../component/TextField/TextField";
import { toast } from "react-toastify";
import { PASSWORD, USERNAME } from "../config";
import "./styles.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../actions/LoginAction";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.loginData);

  useEffect(() => {
    if (isLogin) {
      navigation("/todo");
    }
  }, []);

  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const onHandleField = (key, evt) => {
    setLoginData({
      ...loginData,
      [key]: evt.target.value,
    });
  };

  const onLoginFunc = () => {
    if (loginData.userName === USERNAME && loginData.password === PASSWORD) {
      dispatch(userLogin());
      navigation("/todo");
    } else {
      toast.error("Please enter valid username & password");
    }
  };

  return (
    <MainContainer>
      <div className="login-wrapper">
        <h1>Login</h1>
        <div className="login-inner">
          <TextField
            placeholder="Username"
            type="text"
            value={loginData.userName}
            handleChange={(e) => onHandleField("userName", e)}
          />
          <TextField
            placeholder="Password"
            type="password"
            value={loginData.password}
            handleChange={(e) => onHandleField("password", e)}
          />
        </div>
        <div className="login-btn">
          <Button label="Login" handleClick={() => onLoginFunc()} />
        </div>
      </div>
    </MainContainer>
  );
};

export default Login;
