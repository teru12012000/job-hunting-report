import { Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { intro } from "../data/home";
import home from "../styles/Home.css";
import TwitterIcon from '@mui/icons-material/Twitter';
type Props={
  linkmenu:intro[];
  title:string;
  display:boolean;
  icon:boolean;
  display2:boolean;
}
const Linklist:FC<Props> = ({linkmenu,title,display,icon,display2}) => {
  return (
    <div className={home.intro}>
        {display?(<p className={home.p}>※あくまでも私の体験レポートなので他の人とは違った部分も多々あるので参考程度に！</p>):null}
        <h2 className={home.h2}>{title}</h2>
        <div className={home.linkbox}>
        <ul className={home.ul}>
          {linkmenu.map((item,index)=>(
            <li className={home.li} key={index}>
              <Link 
                href={item.link} 
                key={index} 
                className={home.link} 
                target={item.target}
              >
                {icon?(
                  <Button 
                    variant="contained" 
                    startIcon={
                      <TwitterIcon 
                        className={home.icon}
                        sx={{fontSize:30}}
                      />
                    }
                  >
                    {item.name}
                  </Button>
                ):(
                  <Button variant="contained">
                    {item.name}
                  </Button>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {display2?(<p>連絡の際はどちらのアカウントでも構いません。</p>):null}
      </div>
    </div>
      
  );
}

export default Linklist;