import { NextPage } from "next";
import head from "./styles/Header.css";
const Header: NextPage= () => {
  return (
    <header className={head.content}>
      <h1>就活レポート</h1>
    </header>
  );
}

export default Header;