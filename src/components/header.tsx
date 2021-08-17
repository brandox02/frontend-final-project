import { IconLink, Logo } from "./iconLink";
import { shopping_card, favorite_null } from "./icons";

interface HeaderProps {
  menuState: Boolean;
  setMenu: any;
}

export default function Header(props: HeaderProps) {
  return (
    <header id="header">
      <div className="header-body">
        <div className="hamburger-box" onClick={(e) => props.setMenu(true)}>
          <span className="hamburger" />
        </div>
        <Logo />
        <div>
          <IconLink link={"/list/favorite"}>{favorite_null}</IconLink>
          <IconLink link={"/list/shopping"}>{shopping_card}</IconLink>
        </div>
      </div>
    </header>
  );
}
