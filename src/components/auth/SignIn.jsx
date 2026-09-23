import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Wrapper } from "../styles/common";
import { useState } from "react";

import { loginUser } from "../../api/api";

// Пересорбрать с singup в styled

export default function SignIn({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    setError("");
    event.preventDefault();

    try {
      const data = await loginUser({
        login,
        password,
      });
      console.log(data);

      onLogin(data.user);
      navigate("/");
    } catch (error) {
      setError("Неверный логин или пароль");
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
                value={login}
                onChange={(event) => setLogin(event.target.value)}
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
