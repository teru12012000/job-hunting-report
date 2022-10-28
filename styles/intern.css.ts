import {style} from "@vanilla-extract/css";

const internship={
  content:style({
    textAlign:"center"
  }),
  textbox:style({
    width:"400px",
    margin:"50px auto",
    '@media':{
      'screen and (max-width:400px)':{
        width:"90%",
      }
    }
  }),
  ul:style({
    padding:"0"
  }),
  h3:style({
    margin:"20px",
  }),
  li1:style({
    padding:"0",
    listStyle:"none",
    textAlign:"left",
    fontWeight:"bold",
    marginBottom:"30px",

  }),
  box:style({
    border:"2px solid gray",
    marginBottom:"10px",
  }),
  li2:style({
    padding:"0",
    listStyle:"none",
    textAlign:"left",
    fontWeight:"normal",
  }),

}

export default internship