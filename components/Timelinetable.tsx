
import { FC } from "react";
import { timeline } from "../data/Timeline";
import Timeline from '@mui/lab/Timeline';
import { TimelineContent, TimelineItem, timelineItemClasses } from "@mui/lab";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { Typography } from "@mui/material";
type Props={
  list:timeline[];
  comment:string;
}
const Timelinetable:FC<Props> = ({list,comment}) => {
  return (
    <>
      <section 
        className="border rounded border-dark "
        style={{overflow:"auto"}}
      >
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            width:"500px",
            margin:"auto"
          }}
        >
          {list.map((item:timeline,index:number)=>(
            <TimelineItem key={index} >
              <TimelineContent sx={{px:"10px",textAlign:"end"}}>
                {item.time}
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent>
                <Typography color="primary">
                  {item.thing}
                </Typography>
                <Typography className="mt-3">
                  {item.detail}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </section>
      <p className="mt-3">{comment}</p>
    </>
  );
}

export default Timelinetable;