import { NextPage } from "next";
import head from "./styles/Header.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import { SNSlink } from "../data/linkdata";
const Header: NextPage= () => {
  return (
    <header className={head.content}>
      <h1>就活レポート</h1>
      <div>
      {SNSlink.map((item,index)=>(
        <div key={index} className={head.link}>
          <Link 
            href={item.link}
            className={head.link2}
          >
            <div>
              <TwitterIcon/><br/>
              {item.name}
            </div>
          </Link>
        </div>
      ))}
      </div>
    </header>
  );
}

export default Header;