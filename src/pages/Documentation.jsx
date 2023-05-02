import React from "react";
import './docs.css';
import Header from "../components/Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
    const navigate = useNavigate();
    const navHome = () => {
        navigate('/home')
    }
  return (
    <>
    <Header title='Documentation'/>
    <div className="docs-main">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
      distinctio quos accusamus quasi quod aliquam et consequatur. Provident
      fuga ullam natus, illo placeat libero dolorem omnis assumenda quasi veniam
      laboriosam! 
      <br></br>
      <br />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
      dolore non repellat, repellendus assumenda, voluptatibus culpa harum illo
      voluptates et sapiente. Quo sequi earum ab adipisci error possimus
      temporibus non!
      <br />
    <Button className="docs-but" onClick={navHome}>Home</Button>
    </div>
    </>
  );
};

export default Documentation;
