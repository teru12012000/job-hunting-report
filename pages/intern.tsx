import { NextPage } from "next";
import Head from "next/head";
import Back from "../components/Back";
import Header from "../components/Header";
import { internid } from "../data/id";
import { mywork } from "../data/work";
import internship from "../styles/intern.css";
const intern :NextPage= () => {  
  return (
    <div>
      <Head>
        <title>インターンシップ</title>
        <meta name="description" content="インターンシップについてです。" />
      </Head>
      <Header/>
      <Back id={internid}/>
      <div className={internship.content}>
        <h2 id="about">私のインターンについて</h2>
        <div className={internship.textbox}>
        <p>
          私はインターンは4社行きました。実際
          インターンシップは特に面接やESがない企業を
          応募し良ければ選考に行こうかな程度に思っていました。
          当時、IT企業だったらどこも同じようなことをするのだろう
          と思っていましたが全く違いました。
        </p>
        </div>
        <div className={internship.textbox}>
          <h2 id="company">インターンで行った企業(企業名は書きません)</h2>
          {mywork.map((item,index)=>(
            <div className={internship.box} key={index}>
              <h3 className={internship.h3}>{item.title}</h3>
              <ul  className={internship.ul}>
                <li className={internship.li1}>
                  詳細
                  <ul>
                    <li className={internship.li2}>{item.detail}</li>
                  </ul>
                </li>
                <li className={internship.li1}>
                  インターン内容
                  <ul>
                    <li className={internship.li2}>{item.working}</li>
                  </ul>
                </li>
                <li className={internship.li1}>
                  感想
                  <ul>
                    <li className={internship.li2}>{item.thoughts}</li>
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className={internship.textbox}>
          <h2 id="goal">インターンの目的</h2>
          <p>
            私のインターンの目的は主に業界研究でした。
            ITでもプログラミングを書かない企業も
            あることを知らなかったのは恥ずかしい話ですが、
            自分が何をしたいのかはざっくりとですが絞れた気がします。
            目的は人それぞれだと思います。行きたい企業が決まっててそこの
            インターンシップに行きたい等々の目的もあると思います。業界が
            定まってない人はよりインターンシップに行く必要があると思います。
            注意としては目的なくインターンシップに応募するのはやめましょう。
            ただの、時間の無駄遣いになってしまいます。
          </p>
        </div>
        <div className={internship.textbox}>
          <h2 id="long">長期インターンについて</h2>
          <p>
            時間があるのであれば長期インターンに行くといいと思います。
            私は行ってませんが機械学習系統の長期インターンに行ってた
            友達がいましたがそこでやりたいことが明確になりその勢いで
            内定を獲得し就活を私よりも早く終わらせていました。とても賢い
            と思いました！！！！
          </p>
        </div>
      </div>
    </div>
  );
}

export default intern;