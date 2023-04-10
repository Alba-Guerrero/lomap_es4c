import React, { useState } from "react";

import "./review.css";
import StarRating from "./stars";

function Review(){
    
  return (
    <>
      <div  >
        <h1>Añade una valoración</h1>
        <div>
        <form id= "formReview">
          <label>Comentario:</label>
          <textarea id="comentario" name="comentario" ></textarea>

          <label>Agregar foto:</label>
          <input type="file" name="foto" id="foto" ></input>

          <label>Puntuación:</label>
          <StarRating  />
          <input type="submit" value="Enviar"></input>
        </form>
        </div>
        <h2>Valoraciones de otros usuarios:</h2>

        <div className="comment">
          <div className="comment-header">
            <h3 className="comment-name">Ejemplo(Nombre usuario)</h3>
           
          </div>
          <div className="comment-body">
            <p className="comment-text">Aqui irian fotos</p>
            <p className="comment-text">Ejemplo comentario</p>
            <div className="comment-rating">
              <p className="comment-rating-text">Valoración:</p>
              <div className="rating">
                <span className="selected">★</span>
                <span className="selected">★</span>
                <span className="selected">★</span>
                <span className="unselected-star">★</span>
                <span className="unselected-star">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;