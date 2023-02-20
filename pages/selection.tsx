import { NextPage } from "next";
import Header from "../components/Header";
import Back from "../components/Back";
import Head from "next/head";
import container from "../styles/Container.css";
import Link from "next/link";
import { Button } from "@mui/material";
import MenuCard from "../components/MenuCard";
import { myid } from "../data/id";
import {discass_point, important, important_list} from "../data/SelectData";
const Selection: NextPage= () => {
  return (
    <>
      <Head>
        <title>選考について</title>
        <meta name="description" content="面接以外の選考について記載しています。" />
      </Head>
      <Header/>
      <Back id={myid}/>
      <div className={container.box}>
        <h1>選考について</h1>
        <div>
          ここでは面接以外の選考について説明します。<br/>
          面接の場合は
          <Link href="/interview">
            <Button variant="text" sx={{fontSize:20,padding:0}}>こちら</Button>
          </Link>
          へ！
        </div>
        <div className="mt-5">
          <h2 id="explanation">企業説明会</h2>
          <p>
            選考を受けるうえで企業説明会に出席することは必須です。
            個人的には一番楽しい時間でした。企業によって事業内容や
            方針等が違い勉強になりました。
          </p>
          <h3 className="mt-5">重点的に聞いていた箇所</h3>
          <MenuCard
            list={important_list}
          />
          <p className="mt-5">
            他にも福利厚生であったりその他の待遇であったりを重視している人もいると思います。
            重視したい部分を決めておくだけで充実度がかなり違うと思います。
          </p>
          <h3 className="mt-5">説明会において重要なこと</h3>
          <MenuCard
            list={important}
          />
          
        </div>
        <div className="mt-5">
          <h2 id="test">Webテスト</h2>
          <p className=" text-start">
            ここではあまり語れることはないと思います。なぜなら、
            自分はwebテストは苦手でしたし、最終的にwebテストを通った会社は
            少なかったからです。たまにまぐれで受かることもありましたが（笑）
            ここは簡単に説明します。webテストにはSPIや玉手箱などがあります。
            勉強するとすればどこから問題集をアップロードするか毎年書店に対策本
            があるのでそれを購入して対策するしかないと思っています。
          </p>
        </div>
        <div className="mt-5">
          <h2 id="discuss">グループディスカッション</h2>
          <p>
            説明会後や選考フローにグループディスカッションがあるところがちらほらとありました。
            私はあまり遭遇しませんでしたがコンサルタントを目指している人は良くグルディスをやっていた
            とききました。私なりにこうした方がいいかもというポイントをまとめてみました。
          </p>
          <MenuCard
            list={discass_point}
          />
        </div>
      </div>
    </>
    
  );
}

export default Selection;