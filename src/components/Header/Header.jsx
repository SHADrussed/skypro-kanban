import { useState } from "react";
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

export default function Header({ logo, logoDark, user }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderBlock>
            <HeaderLogo>
              <a href="" target="_self">
                <img src={logo} alt="logo" />
              </a>
            </HeaderLogo>
            <HeaderLogo $dark>
              <a href="" target="_self">
                <img src={logoDark} alt="logo" />
              </a>
            </HeaderLogo>
            <HeaderNav>
              <HeaderButton id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </HeaderButton>
              <HeaderUser
                onClick={(e) => {
                  e.preventDefault();
                  setIsUserMenuOpen(!isUserMenuOpen);
                }}
                href="#user-set-target"
              >
                {user.name}
              </HeaderUser>
              <HeaderUserPopSet $isOpen={isUserMenuOpen} id="user-set-target">
                <PopUser user={user} />
              </HeaderUserPopSet>
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </StyledHeader>
    </>
  );
}
