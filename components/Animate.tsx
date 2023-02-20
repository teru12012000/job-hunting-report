import { Card, Modal } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState,ReactNode } from "react";
type Props={
  selectId:string|null;
  editModalIsOpen:boolean;
  setSelectId:Dispatch<SetStateAction<string|null>>;
  setEditModalIsOpen:Dispatch<SetStateAction<boolean>>;
  children:ReactNode;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRudius:"10%",
  boxShadow: 24,
  p: 4,
};
const Animate:FC<Props> = ({
  selectId,
  editModalIsOpen,
  setSelectId,
  setEditModalIsOpen,
  children,
}) => {
  const closemodal=()=>{
    setEditModalIsOpen(false);
    setSelectId(null);
  }
  return (
    <>
      <AnimatePresence>
        {selectId && (
            <motion.div layoutId={selectId}>
              <Modal
                open={editModalIsOpen}
                onClose={closemodal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card sx={style}>
                  {children}
                </Card>
              </Modal>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Animate;