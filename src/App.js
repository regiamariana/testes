import React from 'react';
import './App.scss';
import './App2.scss';

import img1 from "../src/assets/IMG_1.JPG"
import img2 from "../src/assets/IMG_2.JPG"
import img3 from "../src/assets/IMG_3.JPG"

function App() {
  return (
    <div className="App">



      <section>
        <div className="container">
          <p>oijnhjnbjn</p>
          <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1" />
          
            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />
            <input type="radio" name="slides" id="slide-4" />
            <input type="radio" name="slides" id="slide-5" />
            <input type="radio" name="slides" id="slide-6" />

            <ul class="carousel__slides">
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={img1} alt="a" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Tim Marshall</span>
                  </figcaption>
                </figure>
              </li>

              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={img2} alt="a" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Christian Joudrey</span>
                  </figcaption>
                </figure>
              </li>

              <li class="carousel__slide">
                <figure>
                  <div>
                    <img src={img3} alt="a" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Steve Carter</span>
                  </figcaption>
                </figure>
              </li>
            </ul>

            <ul class="carousel__thumbnails">
              <li>
                <label for="slide-1"><img src={img1} alt="a" /></label>
              </li>
              <li>
                <label for="slide-2"><img src={img2} alt="a" /></label>
              </li>
              <li>
                <label for="slide-3"><img src={img3} alt="a" /></label>
              </li>
            </ul>

          </div>
        </div>
      </section>

      <header>
        
        <input type='checkbox' id='toggle' style={{ display: "none" }} />
        <label class='toggle-btn toggle-btn__cross' for='toggle'>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </label>
        <nav>
          <div className="ulAnterior">
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">galeria</a></li>
              <li><a href="#">sobre</a></li>
            </ul>
      <div className="textoNav">
        <div className="textoNav2">
        <h2>converse com a gente :)</h2>
        <h3>insta: @projetofotografiasenai</h3>
        <h3>facebook: /projetofotosenai</h3>
        </div>
      </div>
          </div>
        </nav>
      </header>


    </div>
  );
}

export default App;
