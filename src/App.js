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

        <div className="card-full">
          <h4>Max 9</h4>
          <p>
            I finalized the Max 9 patch by synchronizing all sound triggers through a shared bang signal.
            This allowed the remix to begin in rhythmic unison while still preserving individual control
            via the photoresistors. Below is a screenshot of the final patch and the core logic.
          </p>
          <p>
            I wanted to extend the scope of the project by adding a <strong>Phase 2</strong>, where the instrument evolves beyond simple sound triggering.
            The idea was that when <strong>all four sensors are activated</strong>, the system would enter this second phase. In Phase 2, each cup would modify the sound in a different way:
          </p>
          <ul>
            <li><strong>Sensor 1</strong> adjusts the <strong>speed</strong> of playback</li>
            <li><strong>Sensor 2</strong> switches the waveform to a <strong>sine wave</strong></li>
            <li><strong>Sensor 3</strong> switches to a <strong>sawtooth wave</strong></li>
            <li><strong>Sensor 4</strong> switches to a <strong>rectangular wave</strong></li>
          </ul>
          <p>
            I also experimented with <strong>volume</strong> and <strong>frequency</strong> modulation to further shape the sound.
            I attempted to implement this using <strong>gates</strong> in Max 9 to dynamically route signals.
            However, I ran into challenges when multiple signals were sent to a single <code>groove~</code> object, which caused unexpected behavior.
            As a result, for the final performance, I showcased <strong>two different versions</strong>: one focusing on the layered rhythm of Phase 1,
            and another demonstrating the sound transformations intended for Phase 2. The second version is turned on using the space bar.
          </p>
          <figure>
            <img src="Max5.png" alt="Final Max Patch" className="my-image" />
          </figure>
          <p>Max9 Code:</p>
          <pre>
----------begin_max5_patcher----------
3076.3oc2cssbajiC8Y6uBU5ws71EAHAurOr09OrON0VSIqzwQYzEWRxYRlo
l7sufr6VShSegh8M4jTkrcGYczgD.G.PzJ+482s7wCeN+zxE+qE+xh6t6Ou+
t6BWxeg6J+46Vta0mWuc0ovSa497e+vieb4CE+Smy+74vk+s7uTcsmWcd8G1
r+oe8X95yEuzFkKCoGVP.lI3uHx3e.4uew+q7WZ+K6N7x4s4mCnnJu5l2Edw
Y.+m1pW9hm14u7bdwq8xM6Ou7g59x29huYe0qsves+5968O7P+H8o7sKjXL7
lYLyaE3erEdi+HucMx6GWs+IOUafm3.xy0q1luPr.PyBQ1BHqEJSZLSIIAgV
CXDJPfOr.LFsm5NSGK.vOt..Mt.z.w0CGwa2p1pzYFRhRq1XbFKAZlpJCkIQ
kVCHorVzBXZV7HJtAs4W+k0ay+Za17ZQMF.90JuGf75M.PnYefSadZ+psiuG
fmdsQZ.PccrVVvZQBl8fHMVKGG+dPv+w+30uJXzJO+AYRKCSh++62dfeMZiZ
nRUG0PUof1UGXmWrZlYOTFd+xK26Obb2pv6E8k2jGWsK+b9weMe+pG2F9UE0
sd.CnAwlmRvKv3r9kGIjx1uLMufAjzOs5b9BrcZKZ11PgoXanZ01XBj7W86s
sS6pObWAWkonxCzrGj+GC2It5k.iNDwGfjVCz2Fw5DTs1yJL8Xcle1h00fGf
PmdnN6senNGTqQOpSORmatiz099Lyz51mQQx6ynX51m6zWWChloWRt5H7lyU
uSydRWqYuLcydTNUl8mO7zS7x30VFKokYZoVprbdLRMgRESxPFM9GuF6cUqk
wd4UZT246zQvh3P6HP2vNBur6w7iWsQgVXSe43ZRA3FTvug9ZzCAeb9E7utT
dqeInp79jR4UNms2qy39MP3djtiTN2o6zUOqaPNfS7yZk7BfBzNGBVaZ8yFj
zT1Q6Ni6SLcsF5gENtrUJwXaj3sW4Mrc.zVhgbduf+rK3pAcYR+JjTkxRCdC
b.Fq+.CUdbrUTxVksC1Jqiss6d2Yi5gwHAOhzYEbCnLs+6RJON5VHOtF1f+2
KDYQYM6HYw2Tj69UpVQ53VB5sc71MeJOa8gc6x8VLM2oFBfLs0hNCxBTXYvZ
z5x3B6jFijUkEZRICV1YB9J9+.fvJb9KZaj+h53u4aW4+3KmNu48aVu57lC6
Gzc47+3cqV2ZmlMAwWNskfWphpd7ZHykzuFqvN+iu1ZH1KjnHvZRGOBM+mMl
Ou4V4ozF1j.gSUdFfzUyS8D1zjc4mNs5ukKtPz1RM1e7PgjfghcQWJb7pyEd
.2Ee53gCeJ+qK18k+6gW1+NZw+Y6gCOGk8K3J9pNkzA0XWarOLgG3YG8BjyD
xnDHo3GXSRshBtuxLiViHx0OA7ilDqGTO+m0U29xkS2.q1nHoPfAUDzu0KsN
kiW.LjuqQQTcPsqAp42O209gbib8ttennPrprIkUK8C8AkZT.ZJhBjF28YO4
27UJfHtbPi04odQRHr0.H4cePoSl654j6pV4ttZa2RtPABLuKqIl3zP3bqAo
IUdalSd2Fqkkl0JoRoY1Kb1fwNlYICvbWn37IUNcpL2Nq63l1c0U.l4rZmyw
IZa.qow38TJw5byI28s6qMtKKE6X2ct3BsF.4PRdiXV230cLHSr.N3KrhU0.
VThHHTsglqeVJ0JkxRJiTKSk8vsaPdt1PJy.JNTtTK.gQgAAtp4ZTx4rgRPo
RMJuAm0s91mgMKPYjkSviCoqkNsxpFTyd4sqBmeZk4P7Zd+VnPKuUaaf5oss
qlSpKaOTuxwUkxT2ZsLMCysaS40l19Ncqpvy94YHGgmcocFNyFAfMw7z11mj
b55dnljEMzkCsm9HaZdaNFSsWEO5rY9ccttEfbfwocMTOSRUzYlvS4r69Fpp
rqMbZ6bPdC3SoSZMY7JfyvUzvWUHcPhMUz3lflJ1dutAlaYb7ahLRGEJYwug
JqhiCBEm.iwPpDmLcqX1643q5VkJltUIEtLgSXcZemaTjrHPmExrfkSFmWp3
b8DRJ0VYYg2NsxBTU71nsZkFUhFWMRpYVV71Z3FxXulVy32b4D.sphS.Lo6V
Iq7F49UnxZmEuE.3zXHpdUQcbMcrOfvevPIoDZU+DpDJpVyb9dbosnFappuj
jBszsjTHbIEONhnRJ3G729ZnJSyB+9iHzRZLjNXRRgV8jHEptdNVubeRRgla
MoPYLRghPes3JhjRNL.vAH7GarrpzWIujwwHbAIgzjBsugjBgp9cvTmMR7Mz
soUizjBcuwjBIJiINvg6P1CxOtWgS4qrLAV4fyN.4DLSThzItIjHsUa6LgLJ
VkjBc2s5HN33CboOBe6eRRgzA+7oPpchLmWgTIQgPakzfVpnCugzGsUcCi4i
vOMMj2KfKYLy3PvojZeagEFahxiN4jHORWMEkUGzEaByA97i.ZhpiN0sl5HF
g5ntLPmCERiS6mC1FmopjDGczaGwQaYuDzdV6rBG03hQRZiN8aJsw58Xfp7I
IsiyhfyTPlpznYFGG9W1+7p0+FuRD9aaGTPgfnECw8rcQTUcDcv97bY.sD9i
sK33Eu77BU2j2vNFgyCNsP.t4+1.fYzBjnHnZw9rVd8DEEhob7u6TTmU0xXY
IKW4iQa4H7tgrjW92blGozZ4W0LaoQT36JL3aETJSaJJvaMA8Hzykk8uwvEx
wB1ZtlF+hR4wd4OQ.NuUKD5L.oRwFWNK54cdK7oKm1einbl2SoNFTnt0uu8t
B8asrr2tVa3t8IEQZTPSgHcSmk6yGNddwisECvIyBBSbN6g8eoKERNqih25s
GN05szBmrI9cbLoMRyLNv0raxwCsF3pT98hMqJo8Qa6BvS3MZdIenBWuTtGj
X8raf6AoF8LOto06VmJGypuJwT9vPSLi1rmxOtY01EOtv097yUY4ZnhTkSP1
okO2uJKIHh5ABOika2r+0eFWFdO6u92uFb5vKGWWAS4m9hK9620uK+z4M6ub
6N8KeiQo+YU65brHYi.og.mvmpfchT3tzs+XAws9I+tm0giuiyqowrhFVvCM
ioNvwo.bqsdvgIAbndvESA39a6m5.W0SvgnL3TiCyiCbw3rmGia8k2h8CKQb
t01AAK6DxKyDhkdBwhhxkTNJFlwANoGEWxHAWLJZ.uRWqI2DbP1hwnvZXLmh
JCBmavvBlDrt7pzAV1AAqnBqInwvqn.7tWTMiG3XmfKFOvkclYjbFW18eBA8
MOqAJLbbFbgOV5FKv6bOOj43HAdm649OwcGCvMQESQOFRuwBNLNV65n.ubYu
mXQQiU+ibqhBK4ffEdMkv1SrhRU25FGK03.eTpa60bpIvMCgkp0FMV8dG0Fk
6uUOHXQWS+N5IVxnvBGGikn.2XFE2DaTwCrhAwREhFq9uiFk6uYPxx2Xulli
0SrzQ2+ydueYnnwB6MVpn0k5OujQiU+4EFcTr9yKHZr5OuDQay2adoiu4y8l
WZ60b9B8DKyzkKlVOcpoZZ5hGpUS39U7ceq+17QE2fFD8KMbMmuROwRzmyxA
lBvoFZZPOSyihJJFMHdfTTd6jZTVkiD7woiXTb4QfiQ64iDbKMNK6QAtwNiK
6Z0XbDswBtXLlIfWaG2j09fD7jhRTvzTq+DSB5MXc6lDvav.yLIf2PDM8j.N
NNtVwANLNtVwAtXbBmFE3Z23DNMNvaZVelFp2PCorSB3MDiilDvowI6g3.uA
eMnmnKipnMbPNvCYTZlxAo.QYTE2fixXyEK3iyYxiwMmSCRIjXTsxPJGEGm3
.GGkYBMRvgw4PthD7w4PtvnR6FGjCdBiJhwffjX9Fv33.ejFv3HAebFv3XAe
bFr.TLeCXLD2zMCCxYpBQcRUvfzwYHp1.Aii4TjfONyiFPyXHDflwPH.MigP
.ZFCgDG3iUHjnThGjI+FfnThgA4P7i51e30uiFLyo3.eblIDXNyBAlyrPf4L
KDXNyBAlyrPhJU9wg2QAcDM4q3Vyb0yO+o7imJ+8Cntb2pOdnnIzOD9wM6K9
wv8u6xi4eZS0ymBWY0w0eXy470me4X3c5xOW9ehPK2cfAd+KaJwl4KCY3lbc
+pc4mddUA0B2Kr2+W2++A6NHoaC
-----------end_max5_patcher-----------
          </pre>
        </div>

        <div className="card-full">
          <h4>Arduino</h4>
          <p>Arduino Code:</p>
          <pre>
            {`const int sensorPins[4] = {A0, A1, A2, A3}; 
int sensorMin[4] = {1023, 1023, 1023, 1023};
int sensorMax[4]= {0,0,0,0};

void setup() {
  Serial.begin(9600); 

  // Calibrate for 5 seconds
  while (millis() < 5000) {
    for (int i = 0; i < 4; i++) {
      int val = analogRead(sensorPins[i]);
      if (val < sensorMin[i]) sensorMin[i] = val;
      if (val > sensorMax[i]) sensorMax[i] = val;
    }
  }
}

void loop() {
  for (int i = 0; i < 4; i++) {
    int val = analogRead(sensorPins[i]);
    val = constrain(val, sensorMin[i], sensorMax[i]);
    int volume = map(val, sensorMin[i], sensorMax[i], 0, 127);

    if (volume > 110) volume = 127;

    Serial.write(volume);  
  }

  Serial.write(255); // Delimiter between cycles
  delay(10);
}

`}
          </pre>
        </div>
      </section>

      <section className="section">
        <h3>4. The Performance</h3>
        <video controls>
          <source src="Joanna.mp4" type="video/mp4" />
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
