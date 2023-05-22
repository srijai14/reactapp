import React from "react";
import './Template.css';
import { CiFaceSmile } from "react-icons/ci";
import { FiThumbsUp } from "react-icons/fi";
import { GiLightBulb } from "react-icons/gi";
import Card from "../Card/Card";
const Template =() =>{
     return(
       <>
          <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                <div className="items">
                    <div className="celebration"> 
                        <a href="default.asp"><span><CiFaceSmile /></span>Celebration</a> 
                    </div>
                    <div className="challanges">  
                        <a href="default.asp"><span><FiThumbsUp /></span>Challanges</a>  
                    </div>
                    <div className="feature">  
                        <a href="default.asp"><span><GiLightBulb /></span>Feature Work</a>
                    </div>
                </div> 
                </div>
                <div className="col-sm-10">
                    <div className="item">
                        <button className="button">Jan</button>
                        <button className="button">Feb</button>
                        <button className="button">March</button>
                        <button className="button">April</button>
                        <button className="button">May</button>
                        <button className="button1">June</button>
                        <button className="button">July</button>
                    </div>
                    <Card />
                </div>
            </div>
          </div>
       </> 
     )
}

export default Template;