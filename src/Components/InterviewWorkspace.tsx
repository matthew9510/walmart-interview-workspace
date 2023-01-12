import React from "react";

interface intervewDataElement {
  Name: string,
  Type: string,
  Required: string
}
interface IProps {
  interviewerName?: string;
  interviewData: intervewDataElement[];
}

const InterviewWorkspace: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="h-full flex justify-center justify-self-center item-center border-[#FCB61A] border-[15px]">
      {/* <h1 className="self-center text-[24px] text-[#0071dc] font-bold">{props.interviewerName}'s Workspace!</h1> */}
      <table>
        <tr>
          {Object.keys(props.interviewData[0]).map((keyName: string) => {
            console.log(keyName)
            return <th>{keyName}</th>;
          })}
        </tr>
        {props.interviewData.map((elements) => {
          return (
            <tr>
              {Object.values(elements).map((value: any) => {
                return <td>{value}</td>;
              })}
            </tr>
          );
        })}
        
      </table>
    </div>
  );
};

InterviewWorkspace.defaultProps = {
  interviewerName: "Matthew",
};

export default InterviewWorkspace;
