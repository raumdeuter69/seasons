import React,{FC, ReactNode} from "react";

interface SpinnerText {
    text : string
    children?: React.ReactNode | React.ReactNode[];
}

const defaultProps : SpinnerText ={
  text: "Loading"
}
const Spinner :FC<SpinnerText> = ({text}) => {

    return (
      <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui indeterminate text loader">{text}</div>
      </div>
      <p></p>
    </div>
    )
} 
Spinner.defaultProps=defaultProps;

export default Spinner;