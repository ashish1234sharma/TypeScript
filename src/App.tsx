import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";
import Heading from "./Components/Children";
import ComponentProp from "./Components/componentProp";
import OptionalProp from "./Components/optionalProp";
import Button from "./Components/EventProps/Button";
import Input from "./Components/EventProps/onchangepops";
import Container from "./Components/StyleProps/Container";
import LoggedIn from "./Components/useStateHook.tsx/Loggedin";
import Private from "./Components/componentProp/private";
import Profile from "./Components/componentProp/profile";

function App() {
  const NameList=[
    {
      f_name:'Bruce',
      l_name:'wayne'
    },
    {
      f_name:'captain',
      l_name:'america'
    },
    {
      f_name:'The',
      l_name:'Hulk'
    }
  ]
  const handleClick=()=>{
    alert(' i am event prop')
  }


  return( <div className="App">
    <Greet  rupees={100} name={"Ashish"} isloggedIn={true}/>
    <PersonList  NameList={NameList} />
    <Status status ={'success'}  />
    <Heading>learning children props</Heading>
    <ComponentProp>
      <Heading>I am component prop</Heading>
    </ComponentProp>
    <OptionalProp message={'I am optional prop'} messageCount={10}  />
    <Button handleClick={handleClick} />
    <Input />
    <Container styles={{border:'2px solid red' , width:100,height:100}} />
    <LoggedIn />
    <Private isLoggedIn={true} Component={Profile} />
  </div>
  )
}

export default App;
