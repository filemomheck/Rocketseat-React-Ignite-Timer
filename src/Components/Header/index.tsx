import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import logotype from "../../assets/logotype-ignite.svg";
import { NavLink } from "react-router-dom";

// "title" de <NavLink> é uma recomendacao para acessibilidade.

export function Header() {
  return (
    <HeaderContainer>
      <img src={logotype} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />{" "}
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
