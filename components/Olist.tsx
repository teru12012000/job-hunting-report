import { ollist } from "../data/numlist";
import {FC} from "react";
import int_sty from "../styles/interview.css";
import numberlist from "./styles/Ollist.css";
type Props={
  list:ollist[];
}
const Olist:FC<Props> = ({list}) => {
  return (
    <>
      <ol className="border rounded border-dark text-start">
        {list.map((item,index)=>(
          <li key={index} className={numberlist.list}>{item.menu}</li>  
        ))}
      </ol>
    </>
  );
}

export default Olist;