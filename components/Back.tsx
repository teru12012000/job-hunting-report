;import Link from "next/link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import back from "./styles/Back.css";
import type {id} from "../data/id";
import { IconButton } from "@mui/material";
type Props={
  id:id[];
}

const Back= (props:Props) => {
  return (
    <div className={back.content}>
      <div className={back.link}>
        <Link 
          href="/"
          className={back.a}
        >
          <IconButton aria-label="delete">
            <HomeRoundedIcon sx={{color:"black",fontSize:40}}/>
          </IconButton>
        </Link>
      </div>
      <h2 className={back.h2}>menu</h2>
      <ul  className={back.ul}>
        {props.id.map((item,index)=>(
          <li key={index} className={back.li}>
            <Link 
              href={item.id}
              className={back.a1}
            >
              {item.title}
            </Link>
          </li>
        ))}
       </ul>
    </div>
  );
}

export default Back;