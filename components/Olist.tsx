import {FC} from "react";
import numberlist from "./styles/Ollist.css";
type Props={
  list:string[];
}
const Olist:FC<Props> = ({list}) => {
  return (
    <>
      <ol className="border rounded border-dark text-start">
        {list.map((item:string,index:number)=>(
          <li key={index} className={numberlist.list}>{item}</li>  
        ))}
      </ol>
    </>
  );
}

export default Olist;