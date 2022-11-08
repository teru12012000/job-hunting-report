import { ollist } from "../pages/interview";
import {FC} from "react";
import int_sty from "../styles/interview.css";
type Props={
  list:ollist[];
}
const Olist:FC<Props> = ({list}) => {
  return (
    <>
    <ol className={int_sty.ol}>
          {list.map((item,index)=>(
            <li key={index}>{item.menu}</li>  
          ))}
          </ol>
    </>
  );
}

export default Olist;