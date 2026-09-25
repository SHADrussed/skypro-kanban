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
  return (
    <>
      <HeaderUserSetName>{user.login}</HeaderUserSetName>
      <HeaderUserSetEmail>{user.name}</HeaderUserSetEmail>

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
