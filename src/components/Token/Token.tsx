import "./styles.css";
import { FC } from "react";
import { Token as GenericToken } from "../../types";

type ComponentProps = GenericToken;

const Token: FC<ComponentProps> = ({ text, type }) => {
  return <span className={`Token Token--${type}`}>{text}</span>;
};

export default Token;
