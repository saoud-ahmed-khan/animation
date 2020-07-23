import React from 'react';
import './App.css';
import boat from "./images/boat1.png";
import tree from "./images/tree.png"
import green from "./images/green.jpeg"
import menRun from "./images/men.gif"
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {

  const { ref: men, getAnimation: aniMen } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0)" },
      { transform: "translateX(60px)" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 2000, // Run for 1000ms
      direction: "alternate", // Run the animation forwards and then backwards
      iterations: Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  const { ref: cloud1, getAnimation: aniCloud1 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(150px)" },
      { transform: "translateX(-1200px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 5000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const { ref: cloud2, getAnimation: aniCloud2 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100px)" },
      { transform: "translateX(-1200px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 5000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const { ref: cloud3, getAnimation: aniCloud3 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(60px)" },
      { transform: "translateX(-1200px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 5000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const { ref: tree1, getAnimation: anitree1 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100px)" },
      { transform: "translateX(-1200px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const { ref: tree2, getAnimation: anitree2 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(200px)" },
      { transform: "translateX(-1600px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const { ref: tree3, getAnimation: anitree3 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(00px)" },
      { transform: "translateX(-1400px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const { ref: tree4, getAnimation: anitree4 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(-1500px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const { ref: boat1, getAnimation: aniboat1 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(60px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  
  const { ref: boat3, getAnimation: aniboat3 } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(100px" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      direction: "alternate", // Run the animation forwards and then backwards
      iterations: Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  const { ref: ship, getAnimation: aniship } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-900px) rotate(5deg)" },
      { transform: "translateX(-800px) rotate(-10deg)" },
      { transform: "translateX(-700px) rotate(5deg)" },
      { transform: "translateX(-600px) rotate(-10deg)" },
      { transform: "translateX(-500px) rotate(5deg)" },
      { transform: "translateX(-400px) rotate(-10deg)" },
      { transform: "translateX(-300px) rotate(5deg)" },
      { transform: "translateX(-200px) rotate(-10deg)" },
      { transform: "translateX(-100px) rotate(5deg)" },
      { transform: "translateX(0px) rotate(-10deg)" },
      { transform: "translateX(100px) rotate(5deg)" },
      { transform: "translateX(200px) rotate(-10deg)" },
      { transform: "translateX(300px) rotate(5deg)" },
      { transform: "translateX(400px) rotate(-10deg)" },
      { transform: "translateX(500px) rotate(5deg)" },
      { transform: "translateX(600px) rotate(-10deg)" },
      { transform: "translateX(700px) rotate(5deg)" },
      { transform: "translateX(800px) rotate(-10deg)" },

    ],
    timing: {
      duration: 40000,

      iterations: Infinity,
    },
  });
  const speed = () => {
    const animation1 = aniCloud1();
    const animation2 = aniCloud2();
    const animation3 = aniCloud3();
    const animation4 = aniMen();
    const animation5 = aniboat1();
    const animation6 = aniship();
    const animation7 = aniboat3();
    const animation8 = aniCloud3();
    const animation9 = aniMen();
    const animation10 = aniboat1();
    const animation11 = aniship();
    const animation12 = anitree1();
    const animation13 = anitree2();
    const animation15 = anitree3();
    const animation14 = anitree4();

    animation1.updatePlaybackRate(animation1.playbackRate * 1.1);
    animation2.updatePlaybackRate(animation2.playbackRate * 1.1);
    animation3.updatePlaybackRate(animation3.playbackRate * 1.1);
    animation4.updatePlaybackRate(animation4.playbackRate * 1.1);
    animation5.updatePlaybackRate(animation5.playbackRate * 1.1);
    animation6.updatePlaybackRate(animation1.playbackRate * 1.1);
    animation7.updatePlaybackRate(animation2.playbackRate * 1.1);
    animation8.updatePlaybackRate(animation3.playbackRate * 1.1);
    animation9.updatePlaybackRate(animation4.playbackRate * 1.1);
    animation10.updatePlaybackRate(animation5.playbackRate * 1.1);
    animation11.updatePlaybackRate(animation1.playbackRate * 1.1);
    animation12.updatePlaybackRate(animation2.playbackRate * 1.1);
    animation13.updatePlaybackRate(animation3.playbackRate * 1.1);
    animation14.updatePlaybackRate(animation4.playbackRate * 1.1);
    animation15.updatePlaybackRate(animation5.playbackRate * 1.1);
  };


  return (
    <div>
    <div className="sky"></div>
    <div className="desert"></div>
    <div className="cloud"  ref={cloud1}>
        <img src={'https://pngimg.com/uploads/cloud/cloud_PNG16.png'} alt="cloud1" width="300px" height="35px"/>
    </div>
    <div className="cloud1" ref={cloud2}>
        <img src={'https://d1kn32quvsf7z3.cloudfront.net/images/osdVJ7vPlZfW_v2.png'} alt="cloud2" width="300px" height="35px"/>
    </div>
    <div className="cloud2" ref={cloud3}>
        <img src={'https://pngimg.com/uploads/cloud/cloud_PNG16.png'} width="400px" alt="cloud3" height="45px"/>
    </div>
    <div className="sea">
    </div>
    <div className="boat" ref={boat1}>
      <img src={boat} alt="ship" width="70px" height="50px" />
    </div>
    <div className="boat1" ref={ship}>
      <img src={boat} alt="ship" width="70px" height="50px" />
    </div>
    <div className="boat2" ref={boat3}>
      <img src={boat} alt="ship" width="70px" height="50px" />
    </div>
    <div className="green">
      <img src={green} alt="green" width="100%" height="100%" />
    </div>
    <div className="tree" ref={tree1}>
      <img src={tree} alt="ship" width="90px" height="150px" />
    </div>
   <div className="tree0" ref={tree2}>
      <img src={tree} alt="ship" width="90px" height="50px" />
    </div>
     <div className="tree1" ref={tree3}>
     <img src={tree} alt="ship" width="60px" height="100px" />
   </div>
    <div className="tree2" ref={tree4}>
    <img src={tree} alt="ship" width="100px" height="170px" />
  </div>
  <div className="road"></div>\
  <div className="yellow"></div>
    <div className="yellow1"></div>
    <div className="men" ref={men} onClick={speed}>
    <img  src={menRun} alt="men" width="150px" height="300px" />
  </div>
  <div className="green1">
    <img src={green} alt="green" width="100%" height="100%" />
  </div>
    </div>

  );
}
export default App;
