import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
gsap.registerPlugin(ScrollTrigger);
export const About = () => {
  useGSAP(()=>{
    const tl = gsap.timeline(
      {
        x:-1000,
        trigger:'#left',
        duration:1,
        delay:2,
        
       
      },
      {
        x:0,
        
        duration:2, scrollTrigger: {
          trigger: '#left',
          start: 'top 65%',
          // end:'top -100%',// when the top of the element hits 80% of viewport
           toggleActions: 'play reverse play reverse',
          markers: false // change to true for visual debugging
        }
      }
    )
    gsap.fromTo("#right",
      {
        x:1000,
       
      },
      {
        x:0,
        
        duration:2, scrollTrigger: {
          trigger: '#left',
          start: 'top 80%',
          // end:'top 10%',// when the top of the element hits 80% of viewport
           toggleActions: "play none play reverse",

          markers: true // change to true for visual debugging
        }
      }
    )


  },[])
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
       
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4" id="left" >About me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" id="left">{dataabout.title}</h3>
          </Col>

          <Col lg="7" className="d-flex align-items-center" >
            <div>
              <p id="right">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" id="left" >Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
