import {style} from "@vanilla-extract/css"

const int_sty={
  h3:style({
    width:"100%",
    border:"1px solid gray",
    marginBottom:"0",
    marginTop:"30px",
    background:"yellow",
    color:"blue",
    cursor:"pointer",
    ':hover':{
      background:"aqua",
      color:"white",
      transition:"0.6s",
    },
  }),
  point:style({
    border:"1px solid gray",
    textAlign:"start",
  }),
  textpoint:style({
    color:"blue",
  }),
  list:style({
    width:"60%",
    margin:"10px auto",
    textAlign:"start",
    '@media':{
      'screen and (max-width:990px)':{
        width:"100%",
      }
    }
  }),

}

export default int_sty