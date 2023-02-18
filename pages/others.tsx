import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Back from "../components/Back";
import Others from "../styles/others.css";
import Link from "next/link";
import { othresid } from "../data/id";
const others:NextPage= () => {
  return (
    <div>
      <Head>
        <title>その他</title>
        <meta name="description" content="就活におけるその他のことを記載してます。" />
      </Head>
      <Header/>
      <Back id={othresid} />
      <div className={Others.content}>
        <div className={Others.box}>
          <h2 id="start">就活を始めた時期</h2>
          <p>
            本格的に始めたのは大学3年の11月です。
            一般解禁は翌年3月ですが部活動と両立したいこともあり早めに始めました。
            GW前には終わりませんでしたが余裕をもって就活をしていきました。
            中には一気にESを何枚も書いている人もいたので大変そうだなと思いつつ見てました。
            じっくり長期スパンでやることをお勧めします。
          </p>
        </div>
        <div className={Others.box}>
          <h2 id="agent">就活エージェント</h2>
          <p>
            私は1人で就活は厳しいと思ってました。
            そこで就活エージェントを利用しました。
            就活の悩み、企業に推薦してくれる、履歴書を1枚出せばES等を書いてくれる
            選考辞退の場合連絡を取ってくれる等のメリットがあります。
            とても心強い存在でした。エージェント会社は色々あるので探してみてください。
            基本お金はいりません。
          </p>
        </div>
        <div className={Others.box}>
          <h2 id="other">その他でやっていたこと</h2>
          <p>
            私はIT企業開発職を希望していたため何かものづくりをしようと考えました。
            webサイトやアプリを作成してそれをESに添付してもらってました。
            大学であまり授業をしなかったのでほとんど独学です。
            面接で作ったサイトを見せ、それについての質問も飛んできました。
            自分が働きたい分野の勉強、資格取得等をやっておくと少し有利かもしれません。
          </p>
          <Link 
            href="https://teru12012000.github.io/project/dirs/src/numeron.html"
            target="_blank" 
            className={Others.link}
          >
            NUMERON(外部リンク)
          </Link>
          <p>
          上記リンクは実際に私が作ったものです。
          ここだけの話ですが、選考で見せてディスッてきた企業もありました(笑)
          ですがこれをきっかけに色々勉強するようになりました。
        </p>
        </div>
        <div className={Others.box}>
          <h2 id="last">最後に</h2>
          <p>
            私は就職活動を通して5社の内定をいただきました。
            就活を始めるにあたり、とりあえずどっか応募するというのはよろしくないです。
            ある程度どのような企業でどのような仕事をしたいのかを調べて絞っておくといいでしょう。
            調べてもわからないときにインターンシップに参加するのがいいのではないかなとおもっています。
            また、落ちてしまった場合は落ち込む必要はありません。
            「この企業に行きたい」「ここで働いてほしい」これが成立して初めて内定になります。
            就活は恋愛みたいなものですね。せっかくなのでミスマッチなく長く勤務できる職場を見つけましょう。
            そして早めに始めましょう。やりたいこととの両立が可能です。残りの学生生活を楽しむとともに納得のいく企業に就職ができることを祈っています。
            がんばってください！！！また、質問等について、答えられる範囲で答えますので上記ヘッダータグのTwitterのDMから連絡ください！
          </p>
        </div>
      </div>
    </div>
  );
}

export default others;