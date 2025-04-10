import React from 'react';
import "./Vacancies.css";

const vacancyList = [
  {
    title: "Semiconductors research",
    description: `The ideation phase is all about crafting a conceptual formula for your desired results. Sometimes clients come ready with a formula to sample, other times they’ll have us craft the formula. Either way, we’ll work with you to conceptualize your product formula and prep it for sampling.`
  },
  {
    title: "Semiconductors research",
    description: `The ideation phase is all about crafting a conceptual formula for your desired results. Sometimes clients come ready with a formula to sample, other times they’ll have us craft the formula. Either way, we’ll work with you to conceptualize your product formula and prep it for sampling.`
  },
  {
    title: "Semiconductors research",
    description: `The ideation phase is all about crafting a conceptual formula for your desired results. Sometimes clients come ready with a formula to sample, other times they’ll have us craft the formula. Either way, we’ll work with you to conceptualize your product formula and prep it for sampling.`
  },
  {
    title: "Semiconductors research",
    description: `The ideation phase is all about crafting a conceptual formula for your desired results. Sometimes clients come ready with a formula to sample, other times they’ll have us craft the formula. Either way, we’ll work with you to conceptualize your product formula and prep it for sampling.`
  }
];

export const Vacancies = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h1>OUR VACANCIES</h1>
      <div className="vacancies">
        {vacancyList.map((vacancy, index) => (
          <div key={index} className="vacancy">
            <h2>{vacancy.title}</h2>
            {/* <h3>Vacancies : 2</h3> */}
            <p>{vacancy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
