import { Link } from "react-router-dom";
import {
  ExitButton,
  HeaderUserSetEmail,
  HeaderUserSetName,
  HeaderUserSetTheme,
} from "./PopUser.styled";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

export default function PopUser() {
  const { user } = useContext(AuthContext);
  const name = user.name?.trim();
  const login = user.login?.trim();
  const showLogin = login && login.toLowerCase() !== name?.toLowerCase();
  return (
    <>
      <HeaderUserSetName>{name || login}</HeaderUserSetName>
      {showLogin && name && <HeaderUserSetEmail>{login}</HeaderUserSetEmail>}

      <HeaderUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </HeaderUserSetTheme>

      <ExitButton as={Link} to="/exit">
        Выйти
      </ExitButton>
    </>
  );
}
