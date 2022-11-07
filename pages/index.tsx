import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import home from '../styles/Home.css'
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
type intro={
  link:string;
  name:string;
  target:string;
}
const Home: NextPage = () => {
  const myintro:intro[]=[
    {
      link:"https://portfolio-lime-ten-31.vercel.app/",
      name:"自己紹介サイト(外部リンク)",
      target:"_blank"
    },
    {
      link:"/company",
      name:"入社予定の会社",
      target:"",
    }
  ]
  const menu:intro[]=[
    {
      link:"/intern",
      name:"インターンシップ",
      target:""
    },
    {
      link:"/selection",
      name:"選考へ！",
      target:""
    },
    {
      link:"/interview",
      name:"面接",
      target:""
    },
    {
      link:"/others",
      name:"その他",
      target:""
    },
  ]
  return (
    <>
      <Head>
        <title>TERUSIの就活レポート</title>
        <meta name="description" content="私が体験した就活のレポートです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className={home.intro}>
        <p className={home.p}>※あくまでも私の体験レポートなので他の人とは違った部分も多々あるので参考程度に！</p>
        <h2 className={home.h2}>私について</h2>
        <div className={home.linkbox}>
          {myintro.map((item,index)=>(
            <ul key={index} className={home.ul}>
              <li className={home.li}>
                <Link href={item.link} key={index}>
                  <a className={home.link} target={item.target}>{item.name}</a>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className={home.intro}>
        <h2 className={home.h2}>タスク</h2>
        <div className={home.linkbox}>
        {menu.map((item,index)=>(
          <ul key={index} className={home.ul}>
            <li className={home.li}>
              <Link href={item.link} key={index}>
                <a className={home.link} target={item.target}>{item.name}</a>
              </Link>
            </li>
          </ul>
        ))}
        </div>
        <div className={home.intro}>
          <h2 className={home.h2}>連絡先</h2>
          <div className={home.linkbox}>
          <ul className={home.ul}>
              <li className={home.li}>
                <Link href='https://twitter.com/s1i2o0n1'>
                  <a>
                    <TwitterIcon 
                      className={home.icon}
                      sx={{fontSize:40}}
                    />
                    <p className={home.pass}>ランニング、日常垢</p>
                  </a>
                </Link>
              </li>
              <li className={home.li}>
                <Link href='https://twitter.com/TERUSI1201'>
                  <a>
                    <TwitterIcon 
                      className={home.icon}
                      sx={{fontSize:40}}
                    />
                    <p className={home.pass}>技術用垢</p>
                  </a>
                </Link>
              </li>
            </ul>
            <p>
              上記ヘッダーのアカウントは技術用です。私は2つのアカウントを持っています。
              連絡の際はどちらのアカウントでも構いません。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
