import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../styles/common";

export default function SignIn({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    onLogin();
    navigate("/");
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
                placeholder="Эл. почта"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />

              <input
                className="modal__input"
                type="password"
                name="password"
                placeholder="Пароль"
              />

              <button className="modal__btn-enter _hover01" type="submit">
                Войти
              </button>

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
