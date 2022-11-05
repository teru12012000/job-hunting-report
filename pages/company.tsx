import { NextPage } from "next";
import company from "../styles/Company.css"
import Link from "next/link"
import Back from "../components/Back"
import Head from "next/head"
import Header from "../components/Header"
type ques={
  question:string;
  ans:string;
}
type reason={
  reason:string;
}
export type id={
  id:string;
  title:string;
}
const myid:id[]=[
  {
    id:"/company/#overview",
    title:"概要",
  },
  {
    id:"/company/#reason",
    title:"なぜその会社に？",

  },
  
]
const Company : NextPage= () => {
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
  const my_reason:reason[]=[
    {
      reason:"常に人間を中心としたものつくりを心掛けているところに魅力を感じたため"
    },
    {
      reason:"デザイナーと一緒に開発ができる事に魅力を感じたため"
    }
  ]
  return (
    
    <div>
      <Head>
        <title>入社予定の会社</title>
        <meta name="description" content="私が入社予定の企業についてです。" />
      </Head>
      <Header/>
      <Back id={myid}/>
      <div className={company.content}>
        <h2 id="overview">概要</h2>
        <div className={company.box}>
          <div className={company.ulbox}>
            {comp_ques.map((item,index)=>(
              <ul key={index} className={company.ul}>
                <li className={company.li}>{item.question}：{item.ans}</li>
              </ul>
            ))}
          </div>
          <div className={company.linkbox}>
            <Link href="https://www.sdtech.co.jp/">
              <a  className={company.link} target="_blank">会社ホームページ(外部リンク)</a>
            </Link>
          </div>
        </div>
        <h2 id="reason">なぜその会社に？</h2>
        <div className={company.box}>
          <p className={company.p}>理由は主に2つ。</p>
          <ol>
              {my_reason.map((item,index)=>(
                <li key={index} className={company.li2}>
                  {item.reason}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Company;