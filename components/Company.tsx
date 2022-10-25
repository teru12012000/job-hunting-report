import { NextPage } from "next";
import company from "./styles/Company.css";
type ques={
  question:string;
  ans:string;
}
const Company: NextPage = () => {
  const comp_ques:ques[]=[
    {
      question:"会社名",
      ans:"エスディーテック株式会社"
    },
    {
      question:"所属",
      ans:"デザインエンジニアリング部"
    },
    {
      question:"勤務地",
      ans:"東京都港区もしくは自宅"
    }
  ]
  return (
    <div className={company.content}>
      <h2>概要</h2>
      <div className={company.box}>
        {comp_ques.map((item,index)=>(
          <ul key={index}>
            <li className={company.li}>{item.question}：{item.ans}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Company;