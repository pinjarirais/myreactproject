import { useContext } from "react";
import { Globledata } from "../App";

function About() {
  const newColor = useContext(Globledata)
  return (
    <>
      <h1 style={{color:newColor.Bcolor}}>About Us</h1>
    </>
  );
}

export default About;
