import { NextPage } from "next";
import Head from "next/head";
import Back from "../components/Back";
import Header from "../components/Header";
import Timelinetable from "../components/Timelinetable";
import { mytimeline1, mytimeline2, mytimeline3, mytimeline4, timeline } from "../data/Timeline";
type menu={
  list:timeline[];
  comment:string;
}
const Chronology:NextPage = () => {
  const listmenu:menu[]=[
    {
      list:mytimeline1,
      comment:"この時は就活に関してはほぼやっていないに近い感じでしたね。行きたい業界は決まっていたので良かったですがもし決まってたら大変なことになっていたことでしょう。"
    },{
      list:mytimeline2,
      comment:"部活を続けたいためこの時期から動き始めました。1人だと不安だったので色々な人を頼りました。初内定はうれしかったです。"
    },{
      list:mytimeline3,
      comment:"内定はちらほらともらいましたが軸が定まってきてやりたいことではないなと思いました。軸に合った企業に落ちまくったり最終選考になかなか進めなくなってしまったりと苦戦した時期でした。"
    },{
      list:mytimeline4,
      comment:"第一志望群が絞られついに就活が終盤となる時期でした。なんやかんや納得して終えることができたので良かったです。"
    },
  ]
  return (
    <>
      <Head>
        <title>私の就活の流れ</title>
        <meta name="description" content="私が就活をしてきたざっくりとした流れです。" />
      </Head>
      <Header/>
      <Back id={undefined}/>
      <div className="container text-center mt-5">
        <h1>就活の流れ</h1>
        <p className="mt-3">
          私が就活をしてきたざっくりとした流れです。
          就活が終了してからかなりの時間がたっているため
          分かりにくい部分もありますがご了承ください。
        </p>
        {listmenu.map((item:menu,index:number)=>(
          <div 
            className="mt-5"
            key={index}
          >
            <Timelinetable
              list={item.list}
              comment={item.comment}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Chronology;