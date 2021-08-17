import Link from "next/link";
import { logo } from "./icons";

export const IconLink = (props: { link: string; children }) => {
  return (
    <div className="icon-link">
      <Link href={props.link}>{props.children}</Link>
    </div>
  );
};

export const Logo = () => {
  return (
    <Link href="/">
      <span className="logo">{logo} Amadis Store</span>
    </Link>
  );
};
