import {
  ExitButton,
  HeaderUserSetEmail,
  HeaderUserSetName,
  HeaderUserSetTheme,
} from "./PopUser.styled";

export default function PopUser({ user }) {
  return (
    <>
      <HeaderUserSetName>{user.name}</HeaderUserSetName>
      <HeaderUserSetEmail>{user.email}</HeaderUserSetEmail>

      <HeaderUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </HeaderUserSetTheme>

      <ExitButton>
        <a href="#popExit">Выйти</a>
      </ExitButton>
    </>
  );
}
