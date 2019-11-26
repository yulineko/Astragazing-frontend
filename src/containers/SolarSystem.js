import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <div className = "main-div">
    <div className = "solar-system">

      <Popup trigger={<button id = "sun" className="planet-button"><img src = "./0sun.svg" height = "180px"/></button>} modal>
        {close => (
          <div className="modal">
            <div className="header"> Sun </div>
            <div className="content">
              {" "}
              <p>The Sun—the heart of our solar system—is a yellow dwarf star, a hot ball of glowing gases.</p>
              <br></br>
              Diameter:	1.4 million km (870,000 miles)<br />
              Mass:	330,000 x Earth<br />
              Density:	1.41 (water=1)<br />
              Solar Wind Speed:	3 million km/hr.<br />
              Solar Cycle:	8 - 11 years<br />
              Temperature at Core:	14 milliono C (22.5 million ºF)<br />
              Rotation Period at Equator:	25 Earth days<br />
              Age:	4.5 billion years<br />
              Distance to Nearest Star:	4.3 light years<br />
              Luminosity:	390 billion billion megawatts<br />
              Temperature at surface:	5,500ºC (9,932ºF)<br />
              Temperature of Sunspots:	4,000ºC (7,232ºF)<br />
              Rotation Period at Poles:	35 Earth days<br />
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close
              </button>
            </div>
          </div>
        )}
        </Popup>










      <Popup trigger={<button id = "mercury" className="planet-button"><img src = "./1mercury.svg" height = "40px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Mercury </div>
          <div className="content">
            {" "}
            <p>In 2019, Mercury returns to the evening sky between June 3 and July 11, then back to the morning sky between Aug. 1 through Aug. 19. Look for Mercury again in the evening sky between Sept. 23 and Nov. 3. Mercury will be brightest in the evening sky between Feb. 18 and March 5.</p>
            <br></br>
            Diameter:	4,878 km (3,030 miles)<br />
            Mass:	0.33x10^24 kilograms (0.06 x Earth's)<br />
            Density:	5,427 kg/m^3<br />
            Minimum Distance from Sun:	46.0 million km (28.6 million miles)<br />
            Maximum Distance from Sun:	69.8 million km (43.4 million miles)<br />
            Minimum Distance from Earth:	77.3 million km (48.0 million miles)<br />
            Rotation Period about Axis:	58.65 days<br />
            Revolution Period about the Sun:  Sun:	0.24 years<br />
            Surface Gravity:	3.7 m/s^2 (0.38 x Earth's)<br />
            Temperature Range:	-184ºC to 427ºC (-300ºF to 800ºF)<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>



      <Popup trigger={<button id = "venus" className="planet-button"><img src = "./2venus.svg" height = "60px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Venus </div>
          <div className="content">
            {" "}
            <p>Venus is visible in either the morning or the evening sky most of the time, but about every 10 months it moves close to the Sun and becomes hard to see or even invisible for a couple of weeks. Here's a table that shows when you can see Venus in the evening (Eve), morning (Mor) or in dusk and dawn.</p>
            <br></br>
            Diameter:	12,104 km (7,522 miles)<br />
            Mass:	4.87x10^24 kilograms (0.82 x Earth's)<br />
            Density:	5,243 kg/m^3<br />
            Minimum Distance from Sun:	108 million km (67 million miles)<br />
            Maximum Distance from Sun:	109 million km (68 million miles)<br />
            Minimum Distance from Earth:	40 million km (25 million miles)<br />
            Rotation Period about Axis:	243 days (retrograde)<br />
            Revolution Period about the Sun:  0.62 years<br />
            Surface Gravity:	8.87 m/s^2 (0.90 x Earth's)<br />
            Temperature Range:	457ºC (855ºF)<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>



      <Popup trigger={<button id = "earth" className="planet-button"><img src = "./3earth.svg" height = "70px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Earth </div>
          <div className="content">
            {" "}
            <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life.</p>
            <br></br>
            Diameter:	12,753 km (7,926 miles)<br />
            Mass:	5.98x10^24 kilograms (6.5e21 tons)<br />
            Density:	5,515 kg/m^3<br />
            Minimum Distance from Sun:	146 million km (91 million miles)<br />
            Maximum Distance from Sun:	152 million km (94.5 million miles)<br />
            Rotation Period about Axis:	24 hours<br />
            Revolution Period about the Sun:  365 days 5 hrs<br />
            Surface Gravity:	9.78 m/s^2<br />
            Temperature Range:	-89ºC to 57.7ºC<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>


      <Popup trigger={<button id = "mars" className="planet-button"><img src = "./4mars.svg" height = "50px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Mars </div>
          <div className="content">
            {" "}
            <p>Mars begins the year still shining at a respectable magnitude of +0.5 in western Pisces – its brightest in 2019 – southeast of the Circlet asterism, crossing the meridian at dusk and setting in the west soon after 11 p.m. local time.</p>
            <br></br>
            Diameter:	6,785 km (4,217 miles)<br />
            Mass:	0.64x10^24 kilograms (0.11 x Earth's)<br />
            Density: 3,933 kg/m^3<br />
            Minimum Distance from Sun: 205 million km (128 million miles)<br />
            Maximum Distance from Sun:	249 million km (155 million miles)<br />
            Minimum Distance from Earth:	35 million miles<br />
            Rotation Period about Axis:	24.6 hrs (retrograde)<br />
            Revolution Period about the Sun: 1.88 years<br />
            Surface Gravity:	3.7 m/s^2 (0.37 x Earth's)<br />
            Temperature Range:	-129ºC to 0ºC ( -200ºF to 32ºF)<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>



      <Popup trigger={<button id = "jupiter" className="planet-button"><img src = "./5jupiter.svg" height = "120px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Jupiter </div>
          <div className="content">
            {" "}
            <p>Jupiter will appear brightest between April 16 to June 4. Jupiter is at opposition to the sun on May 8.</p>
            <br></br>
            Diameter:	142,800 km (88,736 miles)<br />
            Mass:	1,898 x10^24 kilograms (318 x Earth's)<br />
            Density: 1,326 kg/m^3<br />
            Minimum Distance from Sun: 741 million km (460 million miles)<br />
            Maximum Distance from Sun:	817 million km (508 million miles)<br />
            Minimum Distance from Earth:	588 million km (365 million miles)<br />
            Rotation Period about Axis:	9.8 hours<br />
            Revolution Period about the Sun: 12 years<br />
            Surface Gravity:	23.12 m/s^2 (2.64 x Earth's)<br />
            Temperature at the Top of CLouds:	-150ºC (-101ºF)<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>




      <Popup trigger={<button id = "saturn" className="planet-button"><img src = "./6saturn.svg" height = "90px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Saturn </div>
          <div className="content">
            {" "}
            <p>Brightest in 2019: Saturn will be at its brightest between June 29 to July 22. Saturn is at opposition to the sun on July 9. On the night of July 16-17, the full moon will pass closely below Saturn.</p>
            <br></br>
            Diameter:	119,871 km (74,500 miles)<br />
            Mass:	568.5x10^24 kilograms (95 x Earth's)<br />
            Density: 687 kg/m^3<br />
            Minimum Distance from Sun: 1.35 billion km(840 million miles)<br />
            Maximum Distance from Sun:	1.5 billion km(938 million miles)<br />
            Minimum Distance from Earth:	1.2 billion km (746 million miles)<br />
            Rotation Period about Axis:	10.67 hrs<br />
            Revolution Period about the Sun: 29.5 years<br />
            Surface Gravity:	8.96 m/s^2 (0.92 x Earth's)<br />
            Temperature:	-170ºC (-274ºF)<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>




      <Popup trigger={<button id = "uranus" className="planet-button"><img src = "./7uranus.svg" height = "80px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Uranus </div>
          <div className="content">
            {" "}
            <p>in 2019, Uranus will be visible in the evening sky from Jan. 1 to April 5, and in the morning sky from May 9 to Oct. 27. It returns to the evening sky from Oct. 28 to Dec. 31. Brightest in 2019: Uranus will be brightest from Aug. 21 to Dec. 31. It will arrive at opposition to the sun on Oct. 28.</p>
            <br></br>
            Diameter:	51,488 km (32,000 miles)<br />
            Mass:	86.8x10^24 kilograms (14.5 x Earth's)<br />
            Density: 1,270 kg/m^3<br />
            Minimum Distance from Sun: 2.7 billion km (1.7 billion miles)<br />
            Maximum Distance from Sun:	3 billion km (1.87 billion miles)<br />
            Minimum Distance from Earth:	2.57 billion km (1.6 billion miles)<br />
            Rotation Period about Axis:	17.24 hrs<br />
            Revolution Period about the Sun: 84 years<br />
            Surface Gravity:	8.96 m/s^2 8.69 m/s^2 (0.89 x Earth's)<br />
            Temperature:	-200ºC ( -328ºF)<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>




      <Popup trigger={<button id = "neptune" className="planet-button"><img src = "./8neptune.svg" height = "80px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Neptune </div>
          <div className="content">
            {" "}
            <p>Neptune spends all of 2019 in the constellation of Aquarius. At a peak magnitude of +7.8, this bluish-hued world is only visible with good binoculars or a telescope. It will be visible in the evening from Jan.1 through Feb. 19; and in the morning from March 23 to Sept. 9.</p>
            <br></br>
            Diameter:	49,493 km (30,760 miles)<br />
            Mass:	102.4x10^24 kilograms (17.2 x Earth's)<br />
            Density: 1,638 kg/m^3<br />
            Minimum Distance from Sun: 4.46 billion km (2.77 billion miles)<br />
            Maximum Distance from Sun:	4.54 billion km (2.82 billion miles)<br />
            Minimum Distance from Earth:	4.3 billion km (2.68 billion miles)<br />
            Rotation Period about Axis:	17.24 hrs<br />
            Revolution Period about the Sun: 165 years<br />
            Surface Gravity:	11 m/s^2 (1.12 x Earth's)<br />
            Temperature:	-210ºC ( -346ºF)<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>




      <Popup trigger={<button id = "pluto" className="planet-button"><img src = "./9pluto.svg" height = "35px"/></button>} modal>
      {close => (
        <div className="modal">
          <div className="header"> Pluto </div>
          <div className="content">
            {" "}
            <p>Pluto is categorized as a dwarf planet. In 2006, Pluto was categorized with three other objects in the solar system that are about the same small size as Pluto: Ceres, Makemake and Eris. These objects, along with Pluto, are much smaller than the "other" planets.</p>
            <br></br>
            Diameter:	2,390 km (1,485 miles) [0.187 x Earth's]<br />
            Mass:	12.5 x 1021 kilograms (0.0021 x Earth's)<br />
            Density: 1,750 kg/m3 (0.317 x Earth's)<br />
            Minimum Distance from Sun: 2.757 billion miles<br />
            Maximum Distance from Sun:	4.583 billion miles<br />
            Minimum Distance from Earth:	2.66 billion miles<br />
            Rotation Period about Axis:	6.387 days<br />
            Revolution Period about the Sun: 248 years<br />
            Surface Gravity:	0.58 m/s2 (0.06 x Earth's)<br />
            Temperature:	-233° to -223°C or -387° to -369°F<br />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
      </Popup>

    </div>

  </div>
);