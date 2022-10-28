import { NextPage } from "next";
import Link from "next/link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import back from "./styles/Back.css"
const Back: NextPage = () => {
  return (
    <div className={back.content}>
      <Link href="/">
        <a className={back.a}>
          <HomeRoundedIcon/>
          <p className={back.p}>Home</p>
        </a>
      </Link>
    </div>
  );
}

export default Back;