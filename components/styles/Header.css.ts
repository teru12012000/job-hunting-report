import { style } from '@vanilla-extract/css';

const head={
  content:style({
    backgroundColor:"black",
    color:"white",
    padding:"3px",
    fontSize:"15px",
    width:"100%",
    height:"90px",
    display:"flex",
    justifyContent:"space-between",
    '@media':{
      'screen and (max-width:400px)':{
        fontSize:"8px"
      }
    }
  }),
  h1:style({
    marginTop:"20px",
    fontSize:"30px",
  }),
  a:style({
    marginTop:"20px",
    marginRight:"10px",
  }),
  icon:style({
    ":hover":{
      color:"aqua",
      transition:"0.6s",
    }
  })
}

export default head