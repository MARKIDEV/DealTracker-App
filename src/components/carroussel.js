import React from "react";
import "./carroussel.css";

const Carroussel = () => {
  return (
    <div>
      <h2 className="carousel-title">~About our fields~</h2>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-80"
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            <p>Air shipment</p>
          </div>
          <div class="carousel-item ">
           
            <img
              class="d-block w-80"
              src="https://images.unsplash.com/photo-1449586919022-f3dfddc48a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            />
             <p>shipment by sea</p>
          </div>
          <div class="carousel-item ">
            <img
              class="d-block w-80"
              src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            />
            <p>shipment by road</p>
          </div>
          <div class="carousel-item  ">
            
            <img
              class="d-block w-80"
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            <p>Free quote</p>
          </div>
          <div class="carousel-item ">
            <img
              class="d-block w-80"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
            <p> Be a Dealer! <br />Save Money and Time ! </p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default Carroussel;
