import React from "react";
// import {Wrapper} from '../Components/styles'

interface IProps {
  interviewerName?: string;
}

const InterviewWorkspace: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="h-full flex justify-center  justify-self-center item-center border-[#FCB61A] border-[15px]">
      <h1 className="self-center text-[24px] text-[#0071dc] font-bold">{props.interviewerName}'s Workspace!</h1>
    </div>
  );
};

InterviewWorkspace.defaultProps = {
    interviewerName: "Matthew",
};

export default InterviewWorkspace;