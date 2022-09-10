import React, {useState} from "react";
import gameReviews from '../../assets/images/gameReviews.png';
import vacationStation from '../../assets/images/vacation-station.png';

const Portfolio = () => {
    const [recentWork] = useState([
        {
            image: gameReviews,
            title: "PC Game Reviews",
            link: "https://codechef27.github.io/pc-game-reviews/",
            git: "https://github.com/Codechef27/pc-game-reviews",
            alt: "game reviews",
        },
        {
            image: vacationStation,
            title: "Vacation Station",
            link: "https:/vacationstation.herokuapp.com/",
            git: "https://github.com/maddyrae9/vacation-station",
            alt: "Vacation Grocery Delivery",
        },
    ]);
    return (
        <section id="Portfolio" className="port container-fluid">
            <h2 className="portTitle">
                Recent Projects
                <div className="portTitle-border mx-auto my-2"></div>
                </h2>
                <div className="container">
                    <div className="row mx-auto">
                        {recentWork.map((photo, index) => {
                            return (
                                <div key={index} className="col-sm-12 col-md-6 col-lg-4 card my-1">
                                    <img className="cardImg" src={photo.image} alt={photo.alt} />
                                    <div className="card-body">
                                        <p className="card-title">{photo.title}</p>
                                        <div className="card-border mx-auto my-1"></div>
                                        <a href={photo.link}>
                                            <button className="card-btn">Website</button>
                                        </a>
                                        <a href={photo.git}>
                                            <button className="card-btn">Code</button>
                                            </a>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;