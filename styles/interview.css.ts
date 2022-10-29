import {style} from "@vanilla-extract/css"

const int_sty={
  content:style({
    textAlign:"center",
    width:"700px",
    margin:"auto",
    '@media':{
      'screen and (max-width:700px)':{
        width:"90%",
      }
    }
  }),
  box:style({
    width:"400px",
    margin:"30px auto",
    '@media':{
      'screen and (max-width:700px)':{
        width:"90%",
      }
    }
  }),
  point:style({
    border:"2px solid gray",
    fontSize:"20px",
    margin:"20px",
    fontWeight:"bold"
  }),
  ol:style({
    textAlign:"left",
    margin:"30px",
    border:"2px solid gray",
  }),
  li1:style({
    listStyle:"none",
    fontWeight:"bold"
  }),
  li2:style({
    listStyle:"none",
    fontWeight:"normal"
  }),

}

export default int_sty