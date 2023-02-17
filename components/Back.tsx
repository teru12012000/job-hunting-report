;import Link from "next/link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import back from "./styles/Back.css";
import type {id} from "../data/id";
import { Button, IconButton } from "@mui/material";
import container from "../styles/Container.css";
type Props={
  id:id[];
}

const Back= (props:Props) => {
  return (
    <>
      <div className="m-3">
        <Link 
          href="/"
          className={back.a}
        >
          <IconButton aria-label="delete">
            <HomeRoundedIcon sx={{color:"black",fontSize:40}}/>
          </IconButton>
        </Link>
      </div>
      <div className={container.box}>
        <h2 className={back.h2}>menu</h2>
        <ul className="border rounded w-75 m-auto p-0 border-dark">
          {props.id.map((item,index)=>(
            <li key={index} className={back.li}>
              <Link 
                href={item.id}
                style={{textDecoration:"none"}}
              >
                <Button variant="text">
                  {item.title}
                </Button>
                
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Back;