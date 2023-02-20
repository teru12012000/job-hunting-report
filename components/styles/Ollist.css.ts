import { style } from "@vanilla-extract/css";

const numberlist={
  list:style({
    width:"60%",
    margin:"auto",
    '@media':{
      'screen and (max-width:1013px)':{
        width:"100%",
      }
    }
  }),
}

export default numberlist;