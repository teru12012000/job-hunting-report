import { Paper, styled, TableCell, tableCellClasses, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import { NextPage } from "next";
import Head from "next/head";
import Back from "../components/Back";
import Header from "../components/Header";
import InternTextbox from "../components/InternTextbox";
import { internid } from "../data/id";
import { mywork, work } from "../data/work";
import container from "../styles/Container.css";
import internship from "../styles/intern.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width:"170px",
    borderRight:"1px solid white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    width:"170px",
    borderRight:"1px solid white",
  },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border:0,
  },
}));




const intern :NextPage= () => {
  const Interndeta:string[]=[
    "",
    "どんな会社？",
    "どんなことをした？",
    "感想"
  ]  
  return (
    <>
      <Head>
        <title>インターンシップ</title>
        <meta name="description" content="インターンシップについてです。" />
      </Head>
      <Header/>
      <Back id={internid}/>
      <div className={container.box}>
        <InternTextbox
          id="about"
          title="私のインターンについて"
        >
          <>
            周りに比べればインターンシップはそこまで参加していません。
            もともと、業界はIT企業1択でした。しかし、インターンに参加してみたら
            IT業界も幅広いなと思いました。インターン参加する際は、選考があるところは
            正直面倒くさいと感じていたので選考がないところに行きました。インターンは
            あまり力を入れてなかったので参考にはならないかもしれません。
            その場合は申し訳ないです。
          </>
        </InternTextbox>
        <InternTextbox
          id="company"
          title="インターンで行った企業3つほど(企業名は書きません)"
        >
          <Paper sx={{ width: "100%",overflow: 'auto'}}>
            <Table aria-label="internship" sx={{tableLayout:"fixed"}}>
              <TableHead >
                <TableRow >
                  {Interndeta.map((item:string,index:number)=>(
                    <StyledTableCell key={index} align="center">
                      {item}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {mywork.map((item:work,index:number)=>(
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {item.title}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.detail}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.working}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.thoughts}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </InternTextbox>
        <InternTextbox
          title="インターンの目的・通じての感想"
          id="goal"
        >
          <>
            トータルしてみると私のインターンの目的は
            主に業界研究でした。といっても、周囲の人がやっているのを見て
            慌てて応募したのがほとんどですが（笑）
            ただ、IT企業で働きたいということだけは決めていました。
            インターンを通してなんとなくですが自分がやりたいことが見つかったのではないかと思います。
            就活エージェントを使い始めてからはインターンには一切行かなくなりました。<br/>
            インターンについては周りよりは回数も少ないですしなんとなくでやっていたのであまり語れることはないですが、
            業界が定まっていない、何をしたらいいのかわからないという人はより多くいくべきだと思います。
            自分がしたいことがそこで見つかる可能性が高いです。少しでも興味があるのであれば参加して実際に業務を体験して
            みるのがいいと思います。<br/>
            インターンに参加すれば早期選考のチケットがもらえます。それを目的でインターンに参加する人もいます。
            ですが、早期選考目的だけで行くのは良くないです。
            面接をしたときになぜその企業を選んだのか等がなかなか答えられないのが大半だと思います。
            目的が「とりあえず内定」になってしまう印象があります。
            気持ちは分からなくないですがかなり苦労はすると思います。
          </>
        </InternTextbox>
        <InternTextbox
          id="long"
          title="長期インターンについて"
        >
          <>
            私は行っていませんが長期インターンに参加したという人もいます。
            参加してそのままの勢いで内定をいただいている人ややりたいことが
            明確になって短期間で就活を終わらせている人もいました。早めチェックして
            応募してみるのが良いかと思います。
          </>
        </InternTextbox>
      </div>
    </>
  );
}

export default intern;