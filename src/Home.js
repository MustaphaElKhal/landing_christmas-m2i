import React, { Component } from "react";
import "./Home.css";
import boule from "./assets/boule.png";
import boulenofil from "./assets/boule-no-fil.png";
import fil from "./assets/fil.png";
import logotech from "./assets/Logo2itechacademy.png";
import logom2i from "./assets/Logom2i.png";
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image3 from "./assets/3.png";
import image4 from "./assets/4.png";
import image5 from "./assets/5.png";
import image6 from "./assets/6.png";
import image7 from "./assets/7.png";
import image8 from "./assets/8.png";
import image9 from "./assets/9.png";
import image10 from "./assets/10.png";
import image11 from "./assets/11.png";
import image12 from "./assets/12.png";
import image13 from "./assets/13.png";
import image14 from "./assets/14.png";
import image15 from "./assets/15.png";
import image16 from "./assets/16.png";
import image17 from "./assets/17.png";
import image18 from "./assets/18.png";
import image19 from "./assets/19.png";
import image20 from "./assets/20.png";
import image21 from "./assets/21.png";
import image22 from "./assets/22.png";
import BoxDay from "./BoxDay";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dayDate: this.getDate(),
        startDayDate: this.getStartDayDate(),
        endDayDate: this.getEndDayDate(),
        images: [
            {image:image1,date:1606780800},
            {image:image2,date:1606867200},
            {image:image3,date:1606953600}, 
            {image:image4,date:1607040000},
            {image:image5,date:1607126400},
            {image:image6,date:1607212800},
            {image:image7,date:1607299200},
            {image:image8,date:1607385600},
            {image:image9,date:1607472000},
            {image:image10,date:1607558400},
            {image:image11,date:1607644800},
            {image:image12,date:1607731200},
            {image:image13,date:1607817600},
            {image:image14,date:1607904000},
            {image:image15,date:1607990400},
            {image:image16,date:1608076800},
            {image:image17,date:1608163200},
            {image:image18,date:1608249600},
            {image:image19,date:1608336000},
            {image:image20,date:1608422400},
            {image:image21,date:1608508800},
            {image:image22,date:1608595200}
        ]
    };
  }

  getDate = () => {
      return (Date.now() / 1000) | 0;
  }

  getStartDayDate = () => {
    let nowDate = (Date.now() /1000);
    let date = new Date(nowDate *1000);
    let firstHour = date.setHours(0, 0, 0, 0)+3600000
    return new Date(firstHour).getTime() /1000;
  }

  getEndDayDate = () => {
    let nowDate = (Date.now() /1000);
    let date = new Date(nowDate *1000);
    let lastHour = date.setHours(23, 59, 59, 0)+3600000
    return new Date(lastHour).getTime() /1000;
  }

  pastDate = (day) => {
    if (this.state.startDayDate > day ) {
        return true
    } else {
        return false
    }
  }

  currentDate = (day) => {
    if (day >= this.state.startDayDate && day <= this.state.endDayDate ) {
        return true
    } else {
        return false
    }
  }

  render() {
    return (
      <div className="container mt-2 mb-5 rounded">
        <div className="topHP">
          <div className="merryChristmas">Joyeux Noel
          <img className="ball" src={boule}></img>
            <img className="ballnofil" src={boulenofil}></img>
            <img className="fil" src={fil}></img>
            <img className="logo1" src={logotech}></img>
            <img className="logo2" src={logom2i}></img>
            <ul className="ulList rounded">
                <li><i className="fas fa-bell"></i> Découvrez la question du jour</li>
                <li><i className="fas fa-snowflake"></i> Formez-vous et amusez-vous</li>
                <li><i className="fas fa-gift"></i> Des cadeaux tous les jours</li>
                <li><i class="fas fa-trophy"></i> Vite vous êtes peut-être le gagnant du jour</li>
            </ul>
          </div>

        </div>
        <div className="center pl-5 pr-5">
          <ul className="ulBoxDay">
          {this.state.images.map((image, index) => (
            <BoxDay key={index} image={image} day={index+1} dayPast={this.pastDate(image.date)} currentDay={this.currentDate(image.date)}/>
           ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
