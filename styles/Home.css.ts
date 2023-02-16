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
    fontSize:"20px",
    fontWeight:"bold",
    '@media':{
      'screen and (max-width:414px)':{
        fontSize:"15px",
        padding:"10px",
      },
      'screen and (max-width:361px)':{
        fontSize:"10px",
        padding:"5px",
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
    color:"blue",
  }),
  linkbox:style({
    width:"400px",
    margin:"auto",
    border:"2px solid gray",
    borderRadius:"10%",
    '@media':{
      'screen and (max-width:400px)':{
        width:"90%",
      }
    }
  }),
  pass:style({
    margin:"0",
    fontSize:"20px"
  }),
  icon:style({
    
  }),
}

export default home