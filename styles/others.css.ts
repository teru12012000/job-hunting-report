import { style } from "@vanilla-extract/css"; 

const Others={
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
    borderBottom:"2px solid gray",
    '@media':{
      'screen and (max-width:700px)':{
        width:"90%",
      }
    }
  }),
  link:style({
    backgroundColor:"blue",
    fontSize:"20px",
    padding:"10px",
    borderRadius:"50%",
    fontWeight:"bold",
    color:"yellow",
    '@media':{
      'screen and (max-width:414px)':{
        fontSize:"15px",
        padding:"10px",
      },
      'screen and (max-width:300px)':{
        fontSize:"10px",
      }
    },
    ':hover':{
     backgroundColor:"aqua",
     color:"red",
     transition:"0.6s"
    }
  }),
}

export default Others