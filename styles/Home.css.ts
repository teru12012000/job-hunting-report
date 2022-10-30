import { style } from "@vanilla-extract/css";

const home={
  intro:style({
    margin:"20px auto",
    width:"100%",
    textAlign:"center",
  }),
  h2:style({
    margin:"30px"
  }),
  link:style({
    backgroundColor:"blue",
    fontSize:"20px",
    padding:"20px",
    margin:"5px",
    borderRadius:"50%",
    fontWeight:"bold",
    color:"yellow",
    '@media':{
      'screen and (max-width:414px)':{
        fontSize:"15px",
        padding:"10px",
      },
      'screen and (max-width:300px)':{
        fontSize:"10px",
      }
    },
    ':hover':{
     backgroundColor:"aqua",
     color:"red",
     transition:"0.6s"
    }
  }),
  ul:style({
    padding:"0"
  }),
  li:style({
    listStyle:"none",
    margin:"50px"
  }),
  p:style({
    backgroundColor:"yellow",
    color:"red",
  })
}

export default home