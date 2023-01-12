import React from "react";
import walmartLogo from "../../public/walmart-logo.png";
import {Wrapper} from '../Components/styles'


interface IProps {
  name: string;
}

const HelloWalmart: React.FC<IProps> = (props: IProps) => {
  return (
    <Wrapper>
      {/* <img src={walmartLogo} alt="Walmart Logo" /> */}
      <h1>Hello {props.name} and potential other interviewers, thank you for your time and consideration!</h1>
    </Wrapper>
  );
};

HelloWalmart.defaultProps = {
  name: "Pei",
};

export default HelloWalmart;