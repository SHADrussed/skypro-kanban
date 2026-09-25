import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Wrapper } from "../styles/common";
import { useContext, useState } from "react";

import { loginUser } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

// Пересорбрать с singup в styled

export default function SignIn() {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    setError("");
    event.preventDefault();

    try {
      const data = await loginUser({
        login: loginValue,
        password,
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
    <Wrapper>
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>

            <form
              className="modal__form-login"
              id="formLogIn"
              onSubmit={handleSubmit}
            >
              <input
                className="modal__input"
                type="text"
                name="login"
                placeholder="Логин"
                value={loginValue}
                onChange={(event) => setLoginValue(event.target.value)}
              />

              <input
                className="modal__input"
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button className="modal__btn-enter _hover01" type="submit">
                Войти
              </button>

              {error && <ErrorMessage>{error}</ErrorMessage>}

              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
