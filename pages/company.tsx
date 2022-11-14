import { NextPage } from "next";
import company from "../styles/Company.css"
import Link from "next/link"
import Back from "../components/Back"
import Head from "next/head"
import Header from "../components/Header"
import { companyid } from "../data/id";
import { comp_ques, my_reason } from "../data/companyOverview";
const Company : NextPage= () => {
  return (
    
    <div>
      <Head>
        <title>入社予定の会社</title>
        <meta name="description" content="私が入社予定の企業についてです。" />
      </Head>
      <Header/>
      <Back id={companyid}/>
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