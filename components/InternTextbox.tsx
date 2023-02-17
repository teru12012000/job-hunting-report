import { FC, ReactNode } from "react";

type Props={
  id:string;
  title:string;
  children:ReactNode;
}

const InternTextbox:FC<Props> = ({id,title,children}) => {
  return (
    <div className="mt-5">
       <h2 id={id}>{title}</h2>
        <div
          className="w-75 border-bottom border-dark"
          style={{margin:"30px auto"}}
        >
          <div className="text-start">
            {children}
          </div>
        </div>
    </div>
  );
}

export default InternTextbox;