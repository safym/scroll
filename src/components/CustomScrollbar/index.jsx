import React, { useRef, useState, useEffect, useCallback } from "react";
import "./CustomScrollbar.css";

const CustomScrollbar = ({ children }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const thumbRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  const [offsetY, setOffsetY] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [contentTop, setContentTop] = useState(0);

  const handleMouseDown = (event) => {
    setDragging(true);
    let offset;

    if (event.type === "touchstart") {
      offset = event.targetTouches[0].clientY - thumbRef.current.offsetTop;
    } else if (event.type === "mousedown") {
      offset = event.clientY - thumbRef.current.offsetTop;
    }

    setOffsetY(offset);
  };

  const handleMouseMove = useCallback(
    (event) => {
      if (dragging) {
        let newTop;

        if (event.type === "touchmove") {
          newTop = event.targetTouches[0].clientY - offsetY;
        } else if (event.type === "mousemove") {
          newTop = event.clientY - offsetY;
        }

        let containerPos = containerRef.current.getBoundingClientRect();
        let contentPos = contentRef.current.getBoundingClientRect();

        if (containerPos.height >= newTop + thumbHeight && 0 <= newTop) {
          const contentTop = Math.round(
            (newTop * contentPos.height) / containerPos.height
          );

          setThumbTop(newTop);
          setContentTop(contentTop);
        }
      }
    },
    [dragging, offsetY, thumbHeight]
  );

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const containerHeight = containerRef.current.clientHeight;
    const contentHeight = contentRef.current.clientHeight;
    const height = (containerHeight * containerHeight) / contentHeight;

    setThumbHeight(Math.round(height));
  }, [containerRef, contentRef, thumbRef]);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleMouseMove);
    };
  }, [dragging, handleMouseMove]);

  return (
    <div className="custom-scrollbar-container" ref={containerRef}>
      <div
        className="custom-scrollbar-content"
        ref={contentRef}
        style={{
          position: "absolute",
          top: `-${contentTop}px`,
        }}
      >
        {children}
      </div>
      <div
        className="custom-scrollbar-thumb"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={{
          height: `${thumbHeight}px`,
          top: `${thumbTop}px`,
        }}
        ref={thumbRef}
      ></div>
    </div>
  );
};

export default CustomScrollbar;
