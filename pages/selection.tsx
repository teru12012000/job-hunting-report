import { NextPage } from "next";
import select from "../styles/selection.css";
import Header from "../components/Header";
import Back from "../components/Back";
import Head from "next/head";

type list={
  menu:string;
  detail:string;
} 
export type id={
  id:string;
  title:string;
}
const myid:id[]=[
  {
    id:"/selection/#explanation",
    title:"企業説明会",
  },
  {
    id:"/selection/#test",
    title:"webテスト",

  },
  {
    id:"/selection/#discuss",
    title:"グループディスカッション",
  },
]
const selection: NextPage= () => {
  const important_list:list[]=[
    {
      menu:"企業理念",
      detail:"何を目指しているか、どのように社会貢献していくのかをみていました。目指すキャリアにあっているか否かはここで決まると思っていいと思います。"
    },
    {
      menu:"業務内容",
      detail:"どのような事業に取り組んでいるのか等をみていました。同じ業界でも事業内容が全く違う企業はたくさんあります。自分がやりたいことなのか否かを考えながら聞いてました。"
    },
    {
       menu:"社風",
      detail:"私自身がらしさを出せる環境なのかをみてました。社風が合わないとらしさは出せず伸び伸びと仕事はできないと思っています。"
    }
    
  ]
  const discass_point:list[]=[
    {
      menu:"必ず何かは発言をする",
      detail:"基本的に自分の意見を伝えることは大事です。自分の回答に不安を持っている人もいるとは思いますが、企業の人は自分が何を考えているかを読み取ることができないのでとりあえず発言はしましょう。"
    },
    {
      menu:"人の意見は必ず聞いてめもしておく",
      detail:"変わった考えをする人もいますし真逆の意見を言ってくるかもしれません。メモしておけば気になった部分の深堀ができ、より良いディスカッションになるかと思います。"
    },
    {
      menu:"業界に関するニュース等を見ておくといいかも",
      detail:"話題は何が出てくるか分かりません。何もわからず発言できないは最悪なパターンなので多少ニュース等を調べておくのがいいかもしれません。"
    },
    {
      menu:"自分の経験をもとにはなせるといい",
      detail:"話題にもよりますがバイトやサークル、日頃の生活の経験をもとにまとめていくと割かし話しやすくなると思います。"
    },
  ]
  return (
    <html lang="ja">
      <Head>
        <title>選考について</title>
      </Head>
      <Header/>
      <Back id={myid}/>
      <div className={select.content}>
        <div className={select.block}>
          <h2 id="explanation">企業説明会</h2>
          <p>
            選考を受けるうえで企業説明会に出席することは必須です。
            個人的には一番楽しい時間でした。企業によって事業内容や
            方針等が違い勉強になりました。
          </p>
          <h3>重点的に聞いていた箇所</h3>
          <ul className={select.ul}>
            {important_list.map((item,index)=>(
              <li key={index} className={select.li1}>
                {item.menu}
                <ul>
                  <li className={select.li2}>
                    {item.detail}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <p>
          他にも福利厚生であったりその他の待遇であったりを重視している人もいると思います。
          説明会ではホームページでは書いてないようなことも言ってくることがあります。聞き逃しが
          無いようメモをしっかりと取っておきましょう。志望理由などはこのメモが活きてくるでしょう。
        </p>
        </div>
        <div className={select.block}>
          <h2 id="test">Webテスト</h2>
          <p>
            選考に進んでよく遭遇するのがwebテストです。
            私は頭が固いので得意ではなかったですが運良く
            受かったこともありました。落ちた回数の方が多いです。
            これは回数をこなすしかないのかなって個人的な感想ですが
            そう思います。書店に問題集が売られているので勉強するのも
            1つの手かもしれません。応募が多くなると一気にいくつも
            受けることになるので余裕をもって受けるように心がけましょう。
          </p>
        </div>
        <div className={select.block}>
          <h2 id="discuss">グループディスカッション</h2>
          <p>
            説明会後や選考フローにグループディスカッションがあるところがちらほらとありました。
            私はあまり遭遇しませんでしたがコンサルタントを目指している人は良くグルディスをやっていた
            とききました。私なりにこうした方がいいかもというポイントをまとめてみました。
          </p>
          <ul className={select.ul}>
            {discass_point.map((item,index)=>(
              <li key={index} className={select.li1}>
                {item.menu}
                <ul>
                  <li className={select.li2}>
                    {item.detail}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          <p>
          せっかくグループディスカッションをするなら
          緊張はすると思いますが楽しんだ方がいいと思います。
          面接については別のページに記載しています。
        </p>
        </div>
      </div>
    </html>
    
  );
}

export default selection;