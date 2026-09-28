import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { ErrorMessage, Wrapper } from "../styles/common";
import { GlobalStyles } from "../styles/GlobalStyles";
import {
  AuthBlock,
  AuthButton,
  AuthContainer,
  AuthForm,
  AuthFormGroup,
  AuthInput,
  AuthLink,
  AuthModal,
  AuthTitle,
} from "./Auth.styled";
import { loginUser } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignIn() {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    setError("");
    event.preventDefault();

    if (!loginValue.trim() || !password.trim()) {
      setError("Поля имеют неккоректные данные");
      return;
    }

    try {
      const data = await loginUser({
        login: loginValue.trim(),
        password: password.trim(),
      });

      login(data.user);
      navigate("/");
    } catch (error) {
      if (error.response?.status === 400) {
        setError("Неверный логин или пароль");
      } else if (error.request) {
        setError("Нет соединения с сервером");
      } else {
        setError("Не удалось выполнить вход");
      }
    }
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AuthContainer>
          <AuthModal>
            <AuthBlock>
              <AuthTitle>Вход</AuthTitle>

              <AuthForm id="formLogIn" onSubmit={handleSubmit}>
                <AuthInput
                  type="text"
                  name="login"
                  placeholder="Логин"
                  value={loginValue}
                  onChange={(event) => setLoginValue(event.target.value)}
                />

                <AuthInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <AuthButton type="submit">Войти</AuthButton>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <AuthFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <AuthLink to="/register">Регистрируйтесь здесь</AuthLink>
                </AuthFormGroup>
              </AuthForm>
            </AuthBlock>
          </AuthModal>
        </AuthContainer>
      </Wrapper>
    </>
  );
}
