import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Back from "../components/Back";
import int_sty from "../styles/interview.css";
import React,{ useState } from "react";
import Example from "../components/Exsample";
import Olist from "../components/Olist";
import { list,introduction,question} from "../data/numlist";
import { basic, careful, long_short, noidlist, point1 } from "../data/ullist";
import { interviewid } from "../data/id";
import { interview_list } from "../data/text";
import container from "../styles/Container.css";
import numberlist from "../components/styles/Ollist.css";
const Interview : NextPage= () => {
  return (
    <div>
      <Head>
        <title>面接</title>
        <meta name="description" content="面接についてです。" />
      </Head>
      <Header/>
      <Back id={interviewid}/>
      <div className={container.box}>
        <p>
          就活のメインイベントといえば面接ですよね。
          面接を経験していない人にとっては不安かもしれないですね。
          しかも1回だけでなく2回3回と続いていきます。面接のポイントを
          自分なりにまとめてみました。
        </p>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="before">質問事項に入る前に</h2>
          <p className="mt-4">
            面接の質問事項に入る前にいくつかの私が考える注意事項を書いておきます。
          </p>
          <ol className="text-start border rounded border-dark mt-3">
            {careful.map((item:noidlist,index:number)=>(
              <div key={index} className="mb-3">
                <li>
                  {item.menu}
                </li>
                <ul 
                  className="mt-3"
                >
                  <li style={{listStyle:"none"}}>
                    {item.detail}
                  </li>
                </ul>
              </div>
            ))}
          </ol>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="intro">自己紹介</h2>
          <p>
            真っ先にぶっ飛んでくる質問は「自己紹介をお願いします。」
            だと思います。主に下記のことを言えばいいと思います。
          </p>
          <Olist list={introduction}/>
          <Example text={interview_list[0]}/>
          <p>
            あまり、長々と話さないことがポイントです。面接官によっては「1分程度で」や「1分以内で」、「自己PRも含めて」
            と言ってくることもあるので臨機応変に対応しましょう。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="shaft">就活の軸</h2>
          <p>
            <span className={int_sty.textpoint}>就活の軸は一番重要</span>です。
            しかし定めるには難しいかもしれません。<br/>
            ポイントは次の通りです。
          </p>
          <ul className="border border-dark">
            {basic.map((item:string,index:number)=>(
              <li key={index} className={int_sty.list}>
                <h4>{item}</h4>
              </li>
            ))}
          </ul>
          <p className="text-start">
            まずは自分がどの職に就き何をしたくどのようになっていきたいのかです。
            一言でいえば「夢」といえるかもしれません。
            例えば私の場合であれば「将来はエンジニアのスペシャリストになりたい」
            でした。そしてもう1つはどう社会貢献するかですが社会貢献にやり方にも色々あります。
            「自分たちで課題を見つけ出して解決していく」や「お客様の要望に合わせた解決策を見出す」など
            企業によって様々です。ざっくりとした例にはなっていますが、このような軸を決め言語化することが大事になります。
            軸が決まれば、選考を受ける企業の数も絞られるでしょう。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="reason">志望理由</h2>
          <p>
            志望理由は<span className={int_sty.textpoint}>就活の軸が定まっていれば簡単</span>です。<br/>
          </p>
          <Example text={interview_list[1]}/>
          <p>
            あくまでも一例にすぎませんが、「その企業は何を強みにしていてそのがどのように自分の就活の軸と合っているのか？そして、その企業で自分は
            どのように働いていきたいのか」ということをきちんと言語化しましょう。ちなみに、会社の強み等は説明会で聞いておくのがベストです。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="why">なぜその業界を選んだのか？</h2>
          <p>
            業界を選んだ理由はしっかり答えられるようにしましょう。
            明確な理由がないと厳しいかもしれません。
          </p>
          <ul className="border rounded border-dark text-start">
            {point1.map((item:string,index:number)=>(
              <li key={index} className={numberlist.list}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            いろいろなきっかけがあると思います。それをもっと具体的に話せるとよいでしょう。
            また、深堀されることも多々あるので答えられるようにしておきましょう。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="why_univerce">なぜその大学に入学したのか</h2>
          <p>
            これもよく聞かれました(特に人事面接で)。あまり考えたこともない人が多いと思いますが、
            とりあえず研究内容やゼミについてを理由にすればいいと思います。
          </p>
          <Example text={interview_list[4]}/>
          <p>
            なぜその研究に興味を持ったのかも聞かれることが多いので答えられるようにしておくとよいでしょう。
            ですが、私自身は推薦で入学したためこのような明確な理由がありました。中には第1志望落ちでとりあえずのその大学
            といった人もいると思います。私は当時のことを正直に話せばよいと思っています。「実力不足で当時第一志望としていた大学には受かることはできませんでしたが、
            受かった大学の中で○○の分野にほんの少しですが興味があったのでそこに入学しました。」で良いと思っています。なぜ、そのような選択をしたのかを話せればよいかと思います。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="study">大学時代に学んだこと・研究について</h2>
          <p>
            学部学科で学んだことを簡単に言っていけばいいと思います。
            <span className={int_sty.textpoint}>1年次ではこのようなことをし2年次では・・・</span>という感じです。
            <span className={int_sty.textpoint}>研究室に所属していない場合にはこれからどのような研究をしていきたいかを言えばいいと思います。</span>
            あまり専門的な用語は使わないようにした方がいいかもしれません。
            <span className={int_sty.textpoint}>簡潔に短く伝える</span>必要があると思います。
            何を言っているのかわからないと感じる面接官もいるので要点だけを言いましょう。
            その分野に興味がある面接官なら恐らく食いついてくるでしょう。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="activity">ガクチカ(学業以外で何を頑張ったのか)</h2>
          <p>
            ガクチカはアルバイト、サークル、部活、ボランティアなど
            勉強以外で何を頑張ったかをアピールする場です。いう手順としては次の通りです。
          </p>
          <Olist list={list}/>
          <p>では私のガクチカの例を見てみましょう。</p>
          <Example text={interview_list[2]}/>
          <p>
            重要なのは<span className={int_sty.textpoint}>そこでぶつかった壁に対してどう解決し何を学んだか</span>が大事になります。
            がんばった内容も大事ですが特にそこを重視して考えていきましょう。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="pr">自己PR</h2>
          <p>
            自己PRは自分の長所を具体例を用いてアピールしましょう。
            ガクチカと内容がダブって大丈夫です。
          </p>
          <Example text={interview_list[3]}/>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="longshort">長所・短所</h2>
          <p>
            長所短所は<span className={int_sty.textpoint}>「長所なんだけど短所でもある」</span>ものをいうといいと思います。
          </p>
          <ul className="border rounded border-dark text-start">
            {long_short.map((item,index)=>(
              <li key={index} className={int_sty.list}>
                {item.menu}
                <ul>
                  <li style={{listStyle:"none"}}>{item.detail}</li>
                </ul>
              </li>
            ))}
          </ul>
          <p>
            他にも優しいんだけど優柔不断であるといった例もあります。
            <span className={int_sty.textpoint}>長所の部分は自己PRと同じように言い短所についてはどのようにして
            修正する工夫をしているのか</span>を言うといいでしょう。
          </p>
        </div>
        <div className="mt-5 border-bottom border-dark">
          <h2 id="question">逆質問</h2>
          <p>
            必ず最後には逆質問があります。
            質問がないというのは論外です。
            興味がないと捉えられてしまいます。
            ホームページを見ればわかるようなことも質問するのはよろしくないです。
            私が言っていた質問を載せておきます。
          </p>
          <Olist list={question}/>
          <p>
            役員や社長に対しての面接におすすめについては過去のことを嬉しそうに話してくれます。
            あまりそのような質問する人はいないらしいです。
            当然ですが面接は1回だけではないので2回目3回目の面接で同じ質問をしないようにしましょう。
          </p>
          
          
        </div>
        <p>
          面接は緊張しますが慣れです。
          内容については文章で覚えるのは良くないです。
          <span className={int_sty.textpoint}>要点を箇条書きでまとめておく</span>といいと思います。
          また、面接前に友人同士やエージェントと練習しておくといいでしょう。
          <span className={int_sty.textpoint}>軸が定まってない、
          将来のこうしていきたいということが全く決まっていない、
          質問に対しての答えになっていない</span>という人は合格は難しいでしょう。
          自分の将来と向き合いつつ対策していってください。

        </p>
      </div>
    </div>
  );
}

export default Interview;