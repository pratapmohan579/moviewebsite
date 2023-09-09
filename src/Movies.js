import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movie = () => {
    const {Movie} = useGlobalContext();
    return(
     < section className="movie-page">
          <div className="grid grid-4-col">
     {Movie.map((curMovie) =>  {

     return <NavLink to="movie/${}"></NavLink>;   
     })}
     </div>
         </section>
     );  
};

export default  Movie;


//tt1856101 -- imdb id

//Blade Runner 2049
