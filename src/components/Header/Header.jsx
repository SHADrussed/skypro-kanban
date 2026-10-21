import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  HeaderUserPopSet,
} from "./Header.styled";
import { Container } from "../styles/common";
import PopUser from "../popups/PopUser/PopUser";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header({ logo, logoDark }) {
  const { user } = useContext(AuthContext);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navRef = useRef(null);
  const userButtonRef = useRef(null);

  useEffect(() => {
    if (!isUserMenuOpen) return;
    function dismiss(event) {
      if (event.type === "keydown" && event.key === "Escape") {
        setIsUserMenuOpen(false);
        userButtonRef.current?.focus();
      } else if (event.type === "pointerdown" && !navRef.current?.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", dismiss);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", dismiss);
    };
  }, [isUserMenuOpen]);

  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderBlock>
            <HeaderLogo>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </HeaderLogo>
            <HeaderLogo $dark>
              <Link to="/">
                <img src={logoDark} alt="logo" />
              </Link>
            </HeaderLogo>
            <HeaderNav ref={navRef}>
              <HeaderButton id="btnMainNew" as={Link} to="/new-card" onClick={() => setIsUserMenuOpen(false)}>
                Создать новую задачу
              </HeaderButton>
              <HeaderUser
                as="button"
                type="button"
                ref={userButtonRef}
                aria-expanded={isUserMenuOpen}
                aria-controls="user-set-target"
                aria-label="Профиль пользователя"
                onClick={() => setIsUserMenuOpen((open) => !open)}
              >
                <span>{user.name || user.login}</span>
              </HeaderUser>
              <HeaderUserPopSet $isOpen={isUserMenuOpen} id="user-set-target">
                <PopUser />
              </HeaderUserPopSet>
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </StyledHeader>
    </>
  );
}
