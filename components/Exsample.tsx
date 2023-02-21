import int_sty from "../styles/interview.css";
import {useState,FC} from "react";
import {text} from "../data/text";
type Props={
  text:text;
}
const Exsample: FC<Props> = ({text}) => {
  const [dis,setDis]= useState<boolean>(false);
  const handleh3=()=>{
    setDis(!dis);
  }
  return (
    <>
        <h3 className={int_sty.h3} onClick={()=>handleh3()}>例文</h3>
          <div 
            className={int_sty.point}
          >
            {dis?(<p className="w-75 m-auto">{text.text}</p>):null}
          </div>
          <p>※例文をクリック!</p>
    </>
  );
}

export default Exsample;