import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
import { registerUser } from "../../services/api";

export default function SignUp() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!login.trim() || !name.trim() || !password.trim()) {
      setError("Заполните все поля");
      return;
    }

    try {
      await registerUser({ login, name, password });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setError("Сервер ответил ошибкой");
      } else if (error.request) {
        setError("Нет соединения с сервером");
      } else {
        setError("Не удалось зарегистрироваться. Проверьте введённые данные");
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
              <AuthTitle>Регистрация</AuthTitle>

              <AuthForm id="formSignUp" onSubmit={handleSubmit}>
                <AuthInput
                  type="text"
                  name="login"
                  placeholder="Логин"
                  value={login}
                  onChange={(event) => setLogin(event.target.value)}
                />
                <AuthInput
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <AuthInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <AuthButton type="submit">Зарегистрироваться</AuthButton>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <AuthFormGroup>
                  <p>Уже есть аккаунт?</p>
                  <AuthLink to="/login">Войдите здесь</AuthLink>
                </AuthFormGroup>
              </AuthForm>
            </AuthBlock>
          </AuthModal>
        </AuthContainer>
      </Wrapper>
    </>
  );
}
