import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link, useParams } from "react-router-dom";
import { About } from "../about";
import { ContactUs } from "../contact";
import { Portfolio } from "../portfolio";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// gsap

export const Home = () => {
  const { userId } = useParams();
  const introRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

  tl.from(introRef.current, { y: 80, opacity: 0 })
    .from(textRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
    }, "-=0.6")
    .from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      stagger: 0.2,
    }, "-=0.5");
}, []);


  
  return (
    <HelmetProvider>
      
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>

          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto" ref={introRef}>
                <div ref={textRef}>
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-1x">{introdata.description}</p>
                </div>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div
                      id="button_p"
                      className="ac_btn btn"
                      ref={(el) => (buttonsRef.current[0] = el)}
                    >
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div
                      id="button_h"
                      className="ac_btn btn"
                      ref={(el) => (buttonsRef.current[1] = el)}
                    >
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
      <Portfolio />
      <ContactUs />
      </section>
      
    </HelmetProvider>
  );
};
