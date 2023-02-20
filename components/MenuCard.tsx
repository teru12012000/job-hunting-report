import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { list } from "../data/SelectData";
import Animate from "./Animate";
import cardstyle from "./styles/Card.css";
type Props={
  list:list[]
}
const MenuCard:FC<Props> = ({list}) => {
  const [selectId,setSelectId]=useState<string|null>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const openmodal=(id:string)=>{
    setSelectId(id);
    setEditModalIsOpen(true);
  }
  return (
    <div>
      <div
        className={cardstyle.cardbox}
      >
        {list.map((item:list,index:number)=>(
          <motion.div
            style={{marginTop:"10px"}}
            key={index}
            layoutId={String(item.id)}
            onClick={()=>openmodal(String(item.id))}
          >
            <Card  
              className={cardstyle.cardform}
            >
              <Typography 
                style={{
                  position:"absolute",
                  top:"50%",
                  left:"50%",
                  transform:"translateY(-50%) translateX(-50%)"
                }}
              >
                {item.menu}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </div>
      <p className="mt-1">Tap to open a card</p>
      <Animate
        selectId={selectId}
        editModalIsOpen={editModalIsOpen}
        setSelectId={setSelectId}
        setEditModalIsOpen={setEditModalIsOpen}
      >
        {list.map((item:list,index:number)=>(item.id===Number(selectId)?(
          <div key={index}>
            <Typography gutterBottom variant="h5" component="div" >
              {item.menu}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {item.detail}
            </Typography>
          </div>
        ):null))}
      </Animate>
    </div>
  );
}

export default MenuCard;