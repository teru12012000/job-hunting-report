import { style } from "@vanilla-extract/css";

const home={
  intro:style({
    margin:"10px auto",
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
      'screen and (max-width:400px)':{
        fontSize:"15px",
        padding:"15px",
      }
    },
    ':hover':{
     backgroundColor:"aqua",
     transition:"1s"
    }
  }),

  li:style({
    listStyle:"none",
    margin:"50px"
  })
}

export default home