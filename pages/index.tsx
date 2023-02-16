import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import home from '../styles/Home.css'
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import { intro, menu, myintro } from '../data/home'
import { SNSlink } from '../data/linkdata';
import Linklist from '../components/Linklist';
type propsChildren={
  linkmenu:intro[];
  title:string;
  display:boolean;
  icon:boolean;
  display2:boolean;
}
const Home: NextPage = () => {
  const linklistmenu:propsChildren[]=[
    {
      linkmenu:myintro,
      title:"私について",
      display:true,
      icon:false,
      display2:false
    },{
      linkmenu:menu,
      title:"タスク",
      display:false,
      icon:false,
      display2:false,
    },{
      linkmenu:SNSlink,
      title:"連絡先",
      display:false,
      icon:true,
      display2:false
    }
  ]
  return (
    <>
      <Head>
        <title>TERUSIの就活レポート</title>
        <meta name="description" content="私が体験した就活のレポートです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {linklistmenu.map((item:propsChildren,index:number)=>(
        <div key={index}>
          <Linklist
            linkmenu={item.linkmenu}
            title={item.title}
            display={item.display}
            icon={item.icon}
            display2={item.display2}
          />
        </div>
      ))}      
      
    </>
  )
}

export default Home
