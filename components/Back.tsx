;import Link from "next/link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import back from "./styles/Back.css";
import type { id } from "../pages/intern";
type Props={
  id:id[];
}

const Back= (props:Props) => {
  return (
    <div className={back.content}>
      <Link href="/">
        <a className={back.a}>
          <HomeRoundedIcon className={back.icon}/>
          <p className={back.p}>Home</p>
        </a>
      </Link>
      <h2 className={back.h2}>menu</h2>
      <ul  className={back.ul}>
        {props.id.map((item,index)=>(
          <li key={index} className={back.li}>
            <Link href={item.id}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
       </ul>
    </div>
  );
}

export default Back;