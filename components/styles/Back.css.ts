import {style} from "@vanilla-extract/css"

const back={
  content:style({
    width:"20%",
    textAlign:"center",
    marginTop:"10px",
  }),
  p:style({
    margin:"0",
  }),
  a:style({
    color:"blue",
    fontWeight:"bold",
    ':hover':{
      color:"aqua",
      transition:"0.6s",
    }
  })
}

export default back