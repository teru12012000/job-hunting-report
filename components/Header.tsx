import { NextPage } from "next";
import head from "./styles/Header.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
const Header: NextPage= () => {
  return (
    <header className={head.content}>
      <h1 className={head.h1}>就活レポート</h1>
      <Link href="https://twitter.com/TERUSI1201">
        <a target="_blank" className={head.a}><TwitterIcon className={head.icon}/></a>
      </Link>
    </header>
  );
}

export default Header;