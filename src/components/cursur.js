// import React, {useEffect, useRef } from "react";
// // import Link from './Link';
// import "../app.css";


// const Link =({ mouseOverEvent, mouseOutEvent, src}) => {
//     return(
//         <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={src} />
//     );
// };

// const Cursor = () => {
//     const delay = 18;
  
//     const dot = useRef(null);
//     const dotOutline = useRef(null);
  
//     const cursorVisible = useRef(true);
//     const cursorEnlarged = useRef(false);
  
//     const endX = useRef(window.innerWidth / 2);
//     const endY = useRef(window.innerHeight / 2);
//     const _x = useRef(0);
//     const _y = useRef(0);
  
//     const requestRef = useRef(null);
  
//     useEffect(() => {
//       document.addEventListener('mousedown', mouseOverEvent);
//       document.addEventListener('mouseup', mouseOutEvent);
//       document.addEventListener('mousemove', mouseMoveEvent);
//       document.addEventListener('mouseenter', mouseEnterEvent);
//       document.addEventListener('mouseleave', mouseLeaveEvent);
  
//       animateDotOutline();
  
//       return () => {
//         document.removeEventListener('mousedown', mouseOverEvent);
//         document.removeEventListener('mouseup', mouseOutEvent);
//         document.removeEventListener('mousemove', mouseMoveEvent);
//         document.removeEventListener('mouseenter', mouseEnterEvent);
//         document.removeEventListener('mouseleave', mouseLeaveEvent);
  
//         cancelAnimationFrame(requestRef.current);
//       };
//     }, []);
  
//     const toggleCursorVisibility = () => {
//       if (cursorVisible.current) {
//         dot.current.style.opacity = 1;
//         dotOutline.current.style.opacity = 1;
//       } else {
//         dot.current.style.opacity = 0;
//         dotOutline.current.style.opacity = 0;
//       }
//     };
  
//     const toggleCursorSize = () => {
//       if (cursorEnlarged.current) {
//         dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
//         dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
//       } else {
//         dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
//         dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
//       }
//     };
  
//     const mouseOverEvent = () => {
//       cursorEnlarged.current = true;
//       toggleCursorSize();
//     };
  
//     const mouseOutEvent = () => {
//       cursorEnlarged.current = false;
//       toggleCursorSize();
//     };
  
//     const mouseEnterEvent = () => {
//       cursorVisible.current = true;
//       toggleCursorVisibility();
//     };
  
//     const mouseLeaveEvent = () => {
//       cursorVisible.current = false;
//       toggleCursorVisibility();
//     };
  
//     const mouseMoveEvent = e => {
//       cursorVisible.current = true;
//       toggleCursorVisibility();
  
//       endX.current = e.pageX;
//       endY.current = e.pageY;
  
//       dot.current.style.top = endY.current + 'px';
//       dot.current.style.left = endX.current + 'px';
//     };
  
//     const animateDotOutline = () => {
//       _x.current += (endX.current - _x.current) / delay;
//       _y.current += (endY.current - _y.current) / delay;
  
//       dotOutline.current.style.top = _y.current + 'px';
//       dotOutline.current.style.left = _x.current + 'px';
  
//       requestRef.current = requestAnimationFrame(animateDotOutline);
//     };
  
//     return (
//       <>
//         <div ref={dotOutline} className="cursor-dot-outline"></div>
//         <div ref={dot} className="cursor-dot"></div>
  
//         <div className="links-container">
//           {[...Array(4).keys()].map(i => (
//             // <Link
//             //   key={i}
//             //   mouseOverEvent={mouseOverEvent}
//             //   mouseOutEvent={mouseOutEvent}
//             //   src={getImage(i + 1)}
//             // />
//             <Link key={i} mouseOverEvent={mouseOverEvent} mouseOutEvent={mouseOutEvent} />

//           ))}
//         </div>
//       </>
//     );
//   };
  
//   export default Cursor;





// const toggleCursorSize = () => {
//     if (cursorEnlarged.current) {
//       dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
//       dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
//     } else {
//       dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
//       dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
//     }
//   };
  
//   const mouseOverEvent = () => {
//     cursorEnlarged.current = true;
//     toggleCursorSize();
//   };
  
//   const mouseOutEvent = () => {
//     cursorEnlarged.current = false;
//     toggleCursorSize();
//   };
  



import React, { useRef, useEffect } from 'react';
import "../app.css";


const Cursor = () => {



  const circleRef = useRef(null);

  useEffect(() => {
    console.clear();

    const circleElement = circleRef.current;

    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    let currentScale = 0;
    let currentAngle = 0;
    const speed = 0.17;

    const tick = () => {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;

      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150);
      const scaleValue = (mouseVelocity / 150) * 0.5;
      currentScale += (scaleValue - currentScale) * speed;
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
      if (mouseVelocity > 20) {
        currentAngle = angle;
      }
      const rotateTransform = `rotate(${currentAngle}deg)`;

      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      window.requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    tick();

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className="circle" ref={circleRef}></div>
  );
};

export default Cursor;
