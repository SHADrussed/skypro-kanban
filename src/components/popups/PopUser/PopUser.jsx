import { Link } from "react-router-dom";
import {
  ExitButton,
  HeaderUserSetEmail,
  HeaderUserSetName,
  HeaderUserSetTheme,
} from "./PopUser.styled";

export default function PopUser({ user }) {
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
