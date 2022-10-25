import { style } from '@vanilla-extract/css';

const head={
  content:style({
    backgroundColor:"black",
    color:"white",
    padding:"3px",
    fontSize:"15px",
    '@media':{
      'screen and (max-width:400px)':{
        fontSize:"8px"
      }
    }
  }),
}

export default head