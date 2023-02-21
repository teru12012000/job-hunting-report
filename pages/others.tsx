import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Back from "../components/Back";
import Others from "../styles/others.css";
import Link from "next/link";
import { othresid } from "../data/id";
import container from "../styles/Container.css";
import Olist from "../components/Olist";
import { merit, point2, todo } from "../data/numlist";
import Button from "@mui/material/Button";
const others:NextPage= () => {
  return (
    <div>
      <Head>
        <title>その他</title>
        <meta name="description" content="就活におけるその他のことを記載してます。" />
      </Head>
      <Header/>
      <Back id={othresid} />
      <div className={container.box}>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="agent">就活エージェント</h2>
          <p>
            私は1人で就活は厳しいと思ってました。そこで就活エージェントを利用しました。
          </p>
          <h3 className="mt-3">就活エージェントを利用するメリット</h3>
          <Olist list={merit}/>
          <p>
            各エージェント会社によっても合う合わないがあるので利用する場合は複数利用するのが良いかと思います。
            基本お金を払うことはありません。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="other">その他でやっていたこと</h2>
          <p>
            その他でやっていたこととしてweb開発の勉強をしていました。
            実際にものつくりをして、履歴書やESに添付していました。
            そのこともあって今の企業に受かったといっても過言ではありません。
            他の人に差を付けたいのであれば学校のこと以外で+αとして何かをやるべきだと思います。
          </p>
          <Link 
            href="https://teru12012000.github.io/project/dirs/src/numeron.html"
            target="_blank"
          >
            <Button variant="text" sx={{fontSize:20}}>
              NUMERON(外部リンク)
            </Button>
          </Link>
          <p>
            上記リンクは実際に私が作ったものです。
            ここだけの話ですが、選考で見せてあまり良い評価をしてくれない企業もありましたが（笑）
            これをきっかけに本気で勉強するようになりました。といっても何をすればいいかわからない人がいると思います。
            自分がすべきかなと思うことをいくつか挙げておきます。
          </p>
          <Olist list={todo}/>
          <p>
            他にもやるべきことはありそうですね。大学や大学院以外の勉強以外の内容で何かやっていることがあれば
            それについての話で面接は盛り上がりますし好印象だと思います。よく、業界が定まらないという人がいますが
            上記のようなことを早めから試してみるのが良いのではないでしょうか？
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="last">最後に</h2>
          <p>
            改めて就活するうえで私が思ったポイントをあげておきます。
          </p>
          <Olist list={point2}/>
          <p>
            考えれば考えるほどポイントはでてきますがやはり最後の「早め早めに行動する」が
            一番大事だと思います。早め早めに行動しておけば全体的に余裕ができます。
            自分は社会人となって何をしていきたいのか、どんな人間になりたいのか、これをしっかりと
            考えられる時間ができると思います。就活は実際しんどいですが、早めに動いていればトータルで見てみると
            そこまでしんどくはないなと感じてきます。早めに行動しない人ほど、内定がゴールになってしまい将来の自分の
            想像ができなく苦戦するということがあるので気を付けましょう。みなさんが、納得のいく就活ができるように応援しています。
            がんばってください。
          </p>
        </div>
      </div>
    </div>
  );
}

export default others;