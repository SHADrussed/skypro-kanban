import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../styles/common";

export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
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
                name="name"
                id="formname"
                placeholder="Имя"
              />
              <input
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
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
