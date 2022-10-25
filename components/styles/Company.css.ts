import {style} from "@vanilla-extract/css";

const company={
  content:style({
    textAlign:"center",
  }),
  box:style({
    border:"2px solid gray",
    width:"400px",
    margin:"auto",
    fontSize:"20px",
    '@media':{
      'screen and (max-width:400px)':{
        fontSize:"10px",
        width:"90%",
      }
    }
  }),
  li:style({
    listStyle:"none",
    margin:"0"
  })
}

export default company