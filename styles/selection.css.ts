import {style} from "@vanilla-extract/css";

const select={
  content:style({
    textAlign:"center",
    width:"100%"
  }),
  block:style({
    width:"400px",
    margin:"20px auto",
    '@media':{
      'screen and (max-width:400px)':{
        width:"90%",
      }
    }
  }),
  ul:style({
    padding:"0",
    textAlign:"left",
    border:"2px solid gray"
  }),
  li1:style({
    listStyle:"none",
    fontWeight:"bold",
    margin:"20px"
  }),
  li2:style({
    listStyle:"none",
    fontWeight:"normal"
  })
}

export default select