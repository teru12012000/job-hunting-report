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
    border:"3px solid gray",
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
    marginTop:"0",
    fontWeight:"bold",
  }),
  ol:style({
    textAlign:"left",
    margin:"30px",
    border:"2px solid gray",
    fontWeight:"bold"
  }),
  li1:style({
    listStyle:"none",
    fontWeight:"bold"
  }),
  li2:style({
    listStyle:"none",
    fontWeight:"normal"
  }),
  h3:style({
    border:"2px solid gray",
    margin:"20px",
    marginBottom:"0",
    background:"yellow",
    color:"blue",
    cursor:"pointer",
    ':hover':{
      background:"aqua",
      color:"white",
      transition:"0.6s",
    }
  })

}

export default int_sty