import { ollist } from "../pages/interview";
import int_sty from "../styles/interview.css";
type Props={
  list:ollist[];
}
const Olist = (props:Props) => {
  return (
    <>
    <ol className={int_sty.ol}>
          {props.list.map((item,index)=>(
            <li key={index}>{item.menu}</li>  
          ))}
          </ol>
    </>
  );
}

export default Olist;