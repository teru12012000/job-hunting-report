import {style} from "@vanilla-extract/css"

const back={
  content:style({
    width:"100%",
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
  }),
  h2:style({
    textAlign:"center",
  }),
  ul:style({
    margin:"auto",
    padding:"0",
    textAlign:"center",
    width:"400px",
    border:"2px solid gray",
    '@media':{
      'screen and (max-width:400px)':{
        width:"80%",
      }
    }
  }),
  li:style({
    listStyle:"none",
    margin:"10px",
  }),
  icon:style({
    marginLeft:"10px",
  }),
  a1:style({
    color:"blue",
    backgroundColor:"yellow",
    ':hover':{
      color:"white",
      backgroundColor:"aqua",
      transition:"0.6s"
    }
  })
}

export default back