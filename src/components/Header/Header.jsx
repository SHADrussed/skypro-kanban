import { useContext, useState } from "react";
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
            <HeaderNav>
              <HeaderButton id="btnMainNew" as={Link} to="/new-card">
                Создать новую задачу
              </HeaderButton>
              <HeaderUser
                as="button"
                type="button"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                {user.name}
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
