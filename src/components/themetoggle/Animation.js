// AnimatedBox.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AnimatedBox = ({
  children,
  from = {},
  to = {},
  duration = 1,
  delay = 0,
  style = {},
  as: Tag = 'div', // allow specifying the HTML tag/component
  ...rest
}) => {
  const boxRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      from,
      {
        ...to,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <Tag ref={boxRef} style={{ ...style }} {...rest}>
      {children}
    </Tag>
  );
};

export default AnimatedBox;
