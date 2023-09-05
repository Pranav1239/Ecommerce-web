import React from "react";
import "../styles/Home.css";
import Mainbackground from '../assests/pngwing.com.png';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HomeFirst = () => {
  return (
    <>
    <Parallax pages={2} className="parallax">
        <ParallaxLayer
          offset={0}
         speed={2}>
                    <div className="container-Main">
            <div className="fitem-Main">
              <h1>
                Lorem, <span>ipsum dolor.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident fugit suscipit
                <span>quod officiis recusandae, consequatur</span>tempora veniam
                magnam, sapiente maiores nam eligendi rem sequi quia in omnis
                beatae, quos numquam.
              </p>
            </div>
            <div className="fitem-Main">
              <img src={Mainbackground} width={500}  alt="" />
            </div>
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
         speed={3}>
        <div className="container-smain">
        <div className="fitem-smain">
            <h1> <span>Lorem ipsum</span> dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates, ad aspernatur <span>quisquam quam numquam, quas adipisci iure voluptatibus libero atque suscipit ex accusamus beatae ducimus? Molestias debitis</span> animi ab temporibus repellat quis iure earum, laboriosam rerum nulla magnam. Tempore nulla ducimus et obcaecati a itaque ullam non, sunt voluptates.</p>
        </div>
    </div>
        </ParallaxLayer>
    </Parallax>
    </>
  );
};

export default HomeFirst;
