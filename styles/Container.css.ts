import { style } from "@vanilla-extract/css";

const container={
  box:style({
    width:"50%",
    margin:"30px auto",
    textAlign:"center",
    fontSize:20,
    '@media':{
      'screen and (max-width:450px)':{
        width:"100%",
        fontSize:15
      }
    }
  })
}
export default container;