import { Picture } from "../Picture"
import { StyledNav, StyledTitleNav, StyledWraper } from "./Navbar.styles"

import imgAvatar from "../../assets/img-avatar.jpg"
import imgSquares from "../../assets/img-squares.png"

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledTitleNav>
        Módulo de Consulta y Registro de Usuarios al Sistema
      </StyledTitleNav>
      <StyledWraper>
        <Picture
          src={imgSquares}
          alt="squares"
          title="squares"
          size="small"
          variant="normal"
        />
        <Picture
          src={imgAvatar}
          alt="John Doe"
          title="John Doe"
          size="avatar"
          variant="avatar"
        />
      </StyledWraper>
    </StyledNav>
  )
}