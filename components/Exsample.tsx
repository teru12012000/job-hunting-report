import int_sty from "../styles/interview.css";
import {useState} from "react";
import {text} from "../pages/interview";
import {FC} from "react";
type Props={
  text:text;
}
const Exsample: FC<Props> = ({text}) => {
  const [dis,setDis]= useState([
    'none',
    'none',
    'none',
    'none',
    'none',
  ]);
  const handleh3=(disp:string,num:number)=>{
    if(disp==='none'){
      setDis(
        dis.map((item,index)=>(
          index===num? 'block':item
        ))
      )
    }else{
      setDis(
        dis.map((item,index)=>(
          index===num? 'none':item
        ))
      )
    }
  }
  return (
    <>
        <h3 className={int_sty.h3} onClick={()=>handleh3(dis[text.index],text.index)}>例文</h3>
          <div 
            className={int_sty.point}
            style={{
              display:dis[text.index],
            }}
          >
          {text.text}
          </div>
          <p>※例文をクリック!</p>
    </>
  );
}

export default Exsample;