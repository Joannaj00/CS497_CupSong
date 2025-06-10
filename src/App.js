import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Joanna Jung</h1>
        <h2>The Cup Song – The Remix</h2>
      </header>

      <section className="section">
        <h3>1. Introduction of the Project</h3>
        <p>
  This project was inspired by Anna Kendrick’s “The Cup Song” from <em>Pitch Perfect</em>, which was my favorite movie in primary school. I still remember sitting in a circle with my friends during break time, practicing the rhythm over and over with plastic cups. I wanted to recreate that memory by designing a performative instrument that brings the same joy but with a modern twist. In this version, sound is triggered when a cup covers a photoresistor and the volume depends on the intensity of the light, allowing me to remix the original Cup Song by layering rhythms and patterns using live movement.
</p>

        <iframe
          src="https://docs.google.com/presentation/d/1ZSa49JalTW4dCoCd2-T0LB_hhPwmc-V2oBGg3n7gLVo/embed?start=true&loop=false&delayms=3000"
          title="Google Slides"
          allowFullScreen
          className="slide"
        ></iframe>
      </section>

      <section className="section">
        <h3>2. Implementation Progress</h3>
        <div className="grid">
          <div className="card">
            <h4>Max 9</h4>
            <p>This is my initial setup of Max9 code. I started off by testing with one photoresistor sensor. I experimented with changing the volume depending on the light intensity using a cup. Then, I learned how to add a sound to Max9 and modify the speed and interval.</p>
            <img src="/Max1.png" alt="Max 9 Patch" />
            <p>With one photoresistor sensor successfully working, my next step was to incorporate all four sensors and ensure that each signal was routed to the correct input in Max. To do this, I added a value of 255 at the end of each sensor reading cycle from Arduino. In Max, I used that 255 to unpack the incoming serial stream into four separate values, each corresponding to a specific sensor. During office hours, I also learned how to trigger sound playback dynamically so that mySound only starts when a sensor is covered using a cup. I also learned how to define the starting point of my sounds.</p>
            <img src="/Max2.png" alt="Max 9 Patch" />
            <p>After spending time practicing and experimenting, I decided that it was very difficult to time the moment I cover the cup to trigger the sound and have it align rhythmically with the previous beats. I modified the Max 9 patch so that a bang is sent when the first sensor is covered, triggering all sounds to start simultaneously. However, each individual sound is still only audible when its corresponding sensor is covered.</p>
            <img src="/Max3.png" alt="Max 9 Patch" />
            
          </div>

          <div className="card">
            <h4>Arduino</h4>
            <p>I began by building the initial Arduino setup using alligator clips as shown. The circuit included four photoresistor sensors, each connected to a resistor and wired to Ground, 5V, and analog pins A0 through A3. I based the setup on a previous photoresistor assignment we had done in class. </p>
            <figure>
              <img src="/Arduino1.png" alt="Arduino Setup" className="my-image" />
              <figcaption className="image-caption">First Arduino circuit setup with photoresistor</figcaption>
            </figure>
            <p>Once I confirmed that everything was working properly, I found the alligator clip connections to be too visually messy. To make the setup easier and improve its appearance, I chose to solder the four photoresistors, creating a cleaner and more stable circuit. I also wanted to try learning how to solder :D</p>
            <figure>
              <img src="/Arduino3.png" alt="Arduino Setup" className="my-image" />
              <figcaption className="image-caption">First time soldering since Middle school!!!</figcaption>
            </figure>
            <p>I soldered wires to each leg of the photoresistors and connected them back to the breadboard. At the other end of the wires, I attached header pins so they could be easily inserted into the breadboard and Arduino. This made the wiring much more organized and stable, reducing the messiness of the original alligator clip setup.</p>

          </div>
        </div>
      </section>

      <section className="section">
        <h3>3. The Final Product</h3>
        <video controls>
          <source src="/videos/final_product.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Arduino Code: </p>
        <pre>
          {`const int sensorPin = A0;\n\nvoid loop() {\n  int value = analogRead(sensorPin);\n  Serial.write(value);\n  delay(10);\n}`}
        </pre>
        <p>Max9 Code: </p>
        <pre>
        {`serial in -> unpack values -> scale -> sig~ -> *~ volume`}
        </pre>
      </section>

      <section className="section">
        <h3>4. The Performance</h3>
        <video controls>
          <source src="/videos/performance.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Joanna Jung. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
