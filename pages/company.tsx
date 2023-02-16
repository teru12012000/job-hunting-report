import { NextPage } from "next";
import company from "../styles/Company.css"
import Link from "next/link"
import Back from "../components/Back"
import Head from "next/head"
import Header from "../components/Header"
import { companyid } from "../data/id";
import { comp_ques, my_reason, ques } from "../data/companyOverview";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import CompanyTable from "../components/CompanyTable";
type tabledeta={
  list:ques[];
  title:string;
  link:boolean;
}
const Company : NextPage= () => {
  const tablelist:tabledeta[]=[
    {
      list:comp_ques,
      title:"概要",
      link:true,
    },{
      list:my_reason,
      title:"なぜその会社？",
      link:false,
    }
  ]
  return (
    
    <div>
      <Head>
        <title>入社予定の会社</title>
        <meta name="description" content="私が入社予定の企業についてです。" />
      </Head>
      <Header/>
      <Back id={companyid}/>
      <div className="container text-center">
        {tablelist.map((item:tabledeta,index:number)=>(
          <div key={index} className="mt-5">
            <CompanyTable
              list={item.list}
              title={item.title}
              link={item.link}
            />
          </div>
        ))}
      

      </div>
    </div>
  );
}

export default Company;