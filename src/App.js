import React, { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";

const API_URL = 'http://www.omdbapi.com?apikey=4a3b711b&s';

const movie1 = {
    Title: "Avengers: Infinity War",
    Year: "2018",
    Rated: "PG-13",
    Released: "27 Apr 2018",
    Runtime: "149 min",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Director: "Anthony Russo, Joe Russo",
    Writer: "Christopher Markus, Stephen McFeely",
    Actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    Plot: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    Language: "English, Xhosa, German, Norwegian",
    Country: "USA",

    "Poster": "N/A"
};

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}=${title}`);
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        searchMovies('avengers');
    }, []);

    return (
        <div className="App">
            <h1>Movie App</h1>

            <div className="search">
                <input
                    value="Superman"
                    placeholder="Search for a movie..."
                    onChange={() => { }}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster} alt={movie1.Title} />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default App;