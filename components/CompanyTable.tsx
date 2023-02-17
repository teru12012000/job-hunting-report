import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { ques } from "../data/companyOverview";

type Props={
  title:string;
  list:ques[];
  link:boolean;
  id:string;
}
const CompanyTable:FC<Props> = ({title,list,link,id}) => {
  return (
    <>
      <h2 id={id}>{title}</h2>
          <TableContainer component={Paper} sx={{margin:"20px auto",width:"80%"}}>
            <Table aria-label="company">
              <TableBody>
                {list.map((item:ques,index:number)=>(
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {item.question}
                    </TableCell>
                    <TableCell align="center">{item.ans}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {link?(
            <Link href="https://www.sdtech.co.jp/" target="_blank">
              <Button variant="contained">
                会社ホームページ(外部リンク)        
              </Button>
            </Link>
          ):null}
    </>
  );
}

export default CompanyTable;