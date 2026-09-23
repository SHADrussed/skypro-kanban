import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../styles/common";
import { registerUser } from "../../api/api";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const data = await registerUser({});
    console.log(data);

    navigate("/login");
  }

  return (
    <Wrapper>
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form
              className="modal__form-login"
              id="formSignUp"
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
                type="text"
                name="name"
                placeholder="Имя"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button className="modal__btn-enter _hover01" id="btnEnter">
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>Уже есть аккаунт?</p>
                <Link to="/login">Войдите здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
