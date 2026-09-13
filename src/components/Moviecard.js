import React from "react";

const Moviecard = (props) => {
  return (
    <div>
      <div className="card my-5" style={{ width: "280px", height: "500px" }}>
        <img
          src={props.movie.Poster}
          className="img-fluid rounded-start"
          alt={props.movie.Title}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "contain",
          }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {props.movie.Title} ({props.movie.Year})
          </h5>

          <p className="card-text">Type: {props.movie.Type}</p>

          <button
            className="btn btn-outline-success"
            onClick={() => {
              window.open(
                `https://www.imdb.com/title/${props.movie.imdbID}/`,"_blank",
              );
            }}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
