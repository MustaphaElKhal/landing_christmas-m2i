import React, { Component } from "react";
import "./Home.css";
import boule from "./assets/boule.png";
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
        images: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22]
    };
  }
  render() {
    return (
      <div className="container mt-2 mb-5 rounded">
        <div className="topHP">
          <div className="merryChristmas">Joyeux Noel
            <ul className="ulList rounded">
                <li>Découvrez la question du jour</li>
                <li>Formez-vous et amusez-vous</li>
                <li>Des cadeaux tous les jours</li>
                <li>Vite vous êtes peut-être le gagnant du jour</li>
            </ul>
          </div>

        </div>
        <div className="center pl-5 pr-5">
          <ul className="ulBoxDay">
          {this.state.images.map((image, index) => (
            <BoxDay key={index} image={image} day={index+1} />
           ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
