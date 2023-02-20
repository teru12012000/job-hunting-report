import { style } from "@vanilla-extract/css";

const cardstyle={
  cardbox:style({
    paddingTop:"10px",
    paddingBottom:"10px",
    backgroundColor:"gray",
    borderRadius:"5%",
    textAlign:"center",
    '@media':{
      'screen and (min-width:1000px)':{
        display:"flex",
        justifyContent:"center",
        
      }
    }
  }),
  cardform:style({
    margin:"10px auto",
    height:100,
    width:150,
    position:"relative",
    '@media':{
      'screen and (min-width:1300px)':{
        marginRight:"10px",
      }
    }
  })
}

export default cardstyle;