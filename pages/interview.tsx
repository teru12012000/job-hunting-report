import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Back from "../components/Back";
import int_sty from "../styles/interview.css";
import React,{ useState } from "react";

type ollist={
  menu:string;
}
type ullist={
  menu:string;
  detail:string;
}
export type id={
  id:string;
  title:string;
}
const myid:id[]=[
  {
    id:"/interview/#shaft",
    title:"就活の軸",
  },
  {
    id:"/interview/#reason",
    title:"志望理由",

  },
  {
    id:"/interview/#why",
    title:"なぜそう業界を選んだのか",
  },
  {
    id:"/interview/#study",
    title:"学生時代学んだこと・研究について",
  },
  {
    id:"/interview/#activity",
    title:"ガクチカ",
  },
  {
    id:"/interview/#pr",
    title:"自己PR",
  },
  {
    id:"/interview/#longshort",
    title:"長所・短所",
  },
  {
    id:"/interview/#question",
    title:"逆質問",
  },

]


const Interview : NextPage= () => {
  
  const [dis1,setDis1]= useState('none');
  const [dis2,setDis2]= useState('none');
  const [dis3,setDis3]= useState('none');
  const list:ollist[]=[
    {
      menu:"結論(「私のがんばったことはアルバイトです。」など)"
    },
    {
      menu:"そこでの目標"
    },
    {
      menu:"目標に対してぶつかった壁や困難"
    },
    {
      menu:"それをどう解決したのか"
    },
    {
      menu:"そこで学んだこと"
    }
  ]
  const long_short:ullist[]=[
    {
      menu:"長所",
      detail:"1度目標を立てるとひたむきに意志を曲げずに努力する"
    },
    {
      menu:"短所",
      detail:"周りが見えなくなってしまう。"
    },
    

  ]
  const question:ollist[]=[
    {
      menu:"他の企業に負けない部分",
    },
    {
      menu:"今後の会社の課題",
    },
    {
      menu:"どのような人たちが集まっているのか",
    },
    {
      menu:"活躍している人の特徴",
    },
    {
      menu:"○○職で働くために必要な能力",
    },
    {
      menu:"学生から社会人になってから辛かった経験(役員や社長に対しての面接におすすめ)",
    },
    {
      menu:"ご縁があった場合自分に期待したいこと",
    }
  ]
  
  const handleh3=(dis:string,num:number)=>{
    if(dis==="none"){
      if(num===1){
        setDis1("block")
      }
      else if(num===2){
        setDis2("block")
      }else{
        setDis3("block")
      }
    }else{
      if(num===1){
        setDis1("none")
      }
      else if(num===2){
        setDis2("none")
      }else{
        setDis3("none")
      }
    }
  }



  return (
    <div>
      <Head>
        <title>面接</title>
        <meta name="description" content="面接についてです。" />
      </Head>
      <Header/>
      <Back id={myid}/>
      <div className={int_sty.content}>
        <p>
          就活のメインイベントといえば面接ですよね。
          面接を経験していない人にとっては不安かもしれないですね。
          しかも1回だけでなく2回3回と続いていきます。面接のポイントを
          自分なりにまとめてみました。
        </p>
        <div className={int_sty.box}>
          <h2 id="shaft">就活の軸</h2>
          <p>
            就活の軸は一番重要です。
            しかし定めるには難しいかもしれません。
            私の就活の軸を例に出しておきます。
          </p>
          <div className={int_sty.point}>
            エンジニアのスペシャリストに成長でき、
            お客様のニーズに合わせてシステムを開発し
            提供できる会社。
          </div>
          <p>
            ポイントは将来どのような仕事をしてどのようになっていきたいのかを
            考えていくことだと思っています。軸が決まっていれば面接は楽になりますし
            応募する企業もより絞れて楽になってきます。自分の考えを言語化できるようにしておきましょう！
          </p>
        </div>
        <div className={int_sty.box}>
          <h2 id="reason">志望理由</h2>
          <p>
            志望理由は就活の軸が定まっていれば簡単です。
            以下の例文は私が入社予定の企業の志望理由です。
          </p>
          <h3 className={int_sty.h3} onClick={()=>handleh3(dis2,2)}>例文</h3>
          <div 
            className={int_sty.point}
            style={{
              display:dis2,
            }}
          >
          1つは御社がユーザにとって使いやすいものである利用時品質を大事にしている会社だということです.
          もう1つは組み込み系でデザイナーと一緒に開発を行うということです. 
          人が使いやすいと思えるようなシステムを考えて開発するということは良いエンジニアになる上でとても大事になることだと思いました.
          さらに,web制作会社でいくつかデザイナーと一緒に開発するという会社は見てきましたが,組み込み系でデザイナーと一緒に開発をするという会社は見てきませんでした.
          実際に,デザイナーと一緒に開発をすると違った発想をしているため学ぶことが多いということを成果物作成を通じて感じました. 
          私はデザイナーの発想の力を借り学べる環境であり,人を中心に考える御社の開発に携わり人が使いやすいといえるシステムを
          構築し,エンジニアのスペシャリストに成長したいと考え御社を志願します.
          </div>
          <p>※例文をクリック!</p>
          <p>
           実際の面接では要点をまとめて短くいっていますが、軸をもとになぜその軸にあっているのか？
           その企業のどこに魅力を感じたのか？自分はそこで何がしたいのか？をきちんと言えていると思います。
          </p>
        </div>
        <div className={int_sty.box}>
          <h2 id="why">なぜその業界を選んだのか？</h2>
          <p>
            これもよく聞かれます。明確な理由がないと
            厳しいかもしれません。私がIT企業を選んだ理由は以下の通りです。
          </p>
          <div className={int_sty.point}>
            父が会社の社内システムを構築している人で、
            影響を受け私は父を超えるエンジニアになりたいと思った。
          </div>
          <p >
            あくまでも具体例です。人それぞれ理由はあると思うので
            言語化できるようにしておきましょう。これに似た質問で
            なぜ今在学している大学を選んだのかも聞かれます。
            その際は「○○の分野をやっている研究室で研究をしたかったため」
            と答えるのがいいと思います。その分野に興味を持ったきっかけの
            質問が深堀でとんでくる可能性が高いので答えられるようにしておきましょう。
          </p>
        </div>
        <div className={int_sty.box}>
          <h2 id="study">学生時代に学んだこと・研究について</h2>
          <p>
            学部学科で学んだことを簡単に言っていけばいいと思います。
            1年次ではこのようなことをし2年次では・・・という感じです。
            研究室に所属していない場合にはこれからどのような研究をしていきたいかを言えばいいと思います。
            あまり専門的な用語は使わないようにした方がいいかもしれません。
            簡潔に短く伝える必要があると思います。
            何を言っているのかわからないと感じる面接官もいるので要点だけを言いましょう。
            その分野に興味がある面接官なら恐らく食いついてくるでしょう。
          </p>
        </div>
        <div className={int_sty.box}>
          <h2 id="activity">ガクチカ(学業以外で何を頑張ったのか)</h2>
          <p>
            ガクチカはアルバイト、サークル、部活、ボランティアなど
            勉強以外で何を頑張ったかをアピールする場です。いう手順としては次の通りです。
          </p>
          <ol className={int_sty.ol}>
          {list.map((item,index)=>(
            <li key={index}>{item.menu}</li>  
          ))}
          </ol>
          <p>では私のガクチカの例を見てみましょう。</p>
          <h3 className={int_sty.h3} onClick={()=>handleh3(dis1,1)}>例文</h3>
          <div 
            className={int_sty.point}
            style={{
              display:dis1,
            }}
          >
            学生時代に頑張った事は部活動です。
            私は陸上競技部に所属しています。
            私は箱根駅伝予選会に出場することを目標に掲げてきました。
            しかし、勉強とのの両立に悩まされ1,2年生では出場することができませんでした。
            そこで時間を効率よく使うことを意識することで練習の量が増え3年生で箱根駅伝予選会に出場することができました。
            このことから24時間のなかでの時間の使い方の大切さを学びました。
          </div>
          <p>※例文をクリック!</p>
          <p>
            重要なのはそこでぶつかった壁に対してどう解決し何を学んだかが大事になります。
            がんばった内容も大事ですが特にそこを重視して考えていきましょう。
          </p>
        </div>
        <div className={int_sty.box}>
          <h2 id="pr">自己PR</h2>
          <p>
            自己PRは自分の長所を具体例を用いてアピールしましょう。
            ガクチカと内容がダブって大丈夫です。
          </p>
          <h3 className={int_sty.h3} onClick={()=>handleh3(dis3,3)}>例文</h3>
          <div 
            className={int_sty.point}
            style={{
              display:dis3,
            }}
          >
            私の長所は、徹底して努力することです。
            1度目標を立てると、絶対に意志を曲げずに必ず目標を達成するためにひたむきに努力します。
            特に陸上競技ではこの長所が発揮されたと思っています。
            私は箱根駅伝予選会の出場を目標に立ててきましたが、なかなか思うように走れなかったり大学での勉強との両立が困難になってしまったりと悩まされてきました。
            しかし、1回1回の練習の振り返りをして次の練習に活かす工夫をしたり授業がない時間帯や何もすることがなく空いている時間を利用して練習したりし、目標達成に向けて努力し続けてきました。
            その結果、箱根駅伝予選会に出場することができました。
          </div>
          <p>※例文をクリック!</p>
        </div>
        <div className={int_sty.box}>
          <h2 id="longshort">長所・短所</h2>
          <p>
            長所短所は「長所なんだけど短所でもある」ものをいうといいと思います。
          </p>
          <ul className={int_sty.ol}>
            {long_short.map((item,index)=>(
              <li key={index} className={int_sty.li1}>
                {item.menu}
                <ul>
                  <li className={int_sty.li2}>{item.detail}</li>
                </ul>
              </li>
            ))}
          </ul>
          <p>
            他にも優しいんだけど優柔不断であるといった例もあります。
            長所の部分は自己PRと同じように言い短所についてはどのようにして
            修正する工夫をしているのかを言うといいでしょう。
          </p>
        </div>
        <div className={int_sty.box}>
          <h2 id="question">逆質問</h2>
          <p>
            必ず最後には逆質問があります。
            質問がないというのは論外です。
            興味がないと捉えられてしまいます。
            ホームページを見ればわかるようなことも質問するのはよろしくないです。
            私が言っていた質問を載せておきます。
          </p>
          <ol className={int_sty.ol}>
          {question.map((item,index)=>(
            <li key={index}>{item.menu}</li>  
          ))}
          </ol>
          <p>
            役員や社長に対しての面接におすすめについては過去のことを嬉しそうに話してくれます。
            あまりそのような質問する人はいないらしいです。
            当然ですが面接は1回だけではないので2回目3回目の面接で同じ質問をしないようにしましょう。
          </p>
          
          
        </div>
        <p>
          面接は緊張しますが慣れです。
          企業の人と会話をする感覚でできます。
          内容については文章で覚えるのは良くないです。
          要点を箇条書きでまとめておくといいと思います。
          面接前に友人同士やエージェントと練習しておくといいでしょう。
          軸が定まってない、
          将来のこうしていきたいということが全く決まっていない、
          質問に対しての答えになっていないという人は合格は難しいでしょう。
          自分の将来と向き合いつつ対策していってください。

        </p>
      </div>
    </div>
  );
}

export default Interview;