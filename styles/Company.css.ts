import {style} from "@vanilla-extract/css";

const company={
  content:style({
    textAlign:"center",
  }),
  box:style({
    border:"2px solid gray",
    width:"400px",
    margin:"30px auto",
    fontSize:"20px",
    '@media':{
      'screen and (max-width:400px)':{
        fontSize:"10px",
        width:"90%",
      }
    }
  }),
  ulbox:style({
    margin:"20px",
  }),
  li:style({
    listStyle:"none",
    margin:"20px",
    marginLeft:"0",
    textAlign:"left",
    padding:"0"

  }),
  linkbox:style({
    height:"70px"
  }),
  ul:style({
    padding:"0",
  }),
  link:style({
    marginTop:"10px",
    backgroundColor:"blue",
    color:"yellow",
    padding:"15px",
    borderRadius:"50%",
    fontWeight:"bold",
    ':hover':{
      backgroundColor:"aqua",
      color:"red",
      transition:"0.6s"
    }
  }),
  p:style({
    fontSize:"15px",
  }),
  li2:style({
    marginBottom:"10px",
    textAlign:"left",
  }),
}

export default company