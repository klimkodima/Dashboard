import React from "react";
import { UIGuest } from "../../../types";

interface Props {
  guests: UIGuest[];
  isLoading: boolean;
  error: Error | string;
}

const Guests: any = (props) => {
  const {guests, isLoading, error } = props;
  if (error) {
    console.log("error: ", error);
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>{"Loading.."}</div>;
  }

  return <div>{guests}</div>;
};

export default Guests;
