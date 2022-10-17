import React from "react";
import Person from "./Name";
import "./project.css";

type GreetProps = {
  rupees: number;
  name: string;
  isloggedIn: boolean;
};

const Greet = (props: GreetProps) => {

    const personName={
        f_name:"Ashish",
        l_name:'Sharma'
    }
  return (
    <div className="container">
      {props.isloggedIn ? (
        <h5>
        
          {props.name} have {props.rupees} unread messages
        </h5>
      ) : (
        <h5>please log in</h5>
      )}

      <Person name={personName} />
    </div>
  );
};

export default Greet;
