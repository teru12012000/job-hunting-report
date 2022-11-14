import { style } from '@vanilla-extract/css';

const head={
  content:style({
    textAlign:"center",
    backgroundColor:"black",
    color:"white",
    padding:"5px",
    '@media':{
      'screen and (min-width:540px)':{
        display:"flex",
        justifyContent:"space-between",
      }
    }
  }),
  link:style({
    display:"inline-block",
    textAlign:"center",
    marginTop:"20px",
    marginLeft:"10px",
  }),
  link2:style({
    ':hover':{
      color:"aqua",
      transition:"0.6s",
    }
  })
 
}

export default head