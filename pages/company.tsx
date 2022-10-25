import { NextPage } from "next";
import Header from "../components/Header";
import Head from "next/head";
import Company from "../components/Company";
const company : NextPage= () => {
  return (
    
    <div>
      <Head>
        <title>入社予定の会社</title>
      </Head>
      <Header/>
      <Company/>
    </div>
  );
}

export default company;