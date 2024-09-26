import React, { useState, useEffect, useRef } from 'react';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import '../css/Facts.css'; // Make sure this contains animation CSS

const Facts = () => {
  const [facts, setFacts] = useState({
    clients: 0,
    projects: 0,
    awards: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const factsRef = useRef(null); // Ref to track the section

  // Simulate fetching dynamic data
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setFacts({
          clients: 4700, // Example dynamic data
          projects: 500,
          awards: 15,
        });
      }, 1000); // Simulate delay
    }
  }, [isVisible]);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Unobserve after triggering the animation
        }
      },
      {
        threshold: 0.3, // Adjust this based on when you want the animation to trigger (30% visible)
      }
    );

    if (factsRef.current) {
      observer.observe(factsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" facts container-fluid facts py-5 pt-lg-0" ref={factsRef}>
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          {/* Happy Clients */}
          <div className={`col-lg-4 ${isVisible ? 'fadeIn' : ''}`}>
            <div
              className="shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: '150px', backgroundColor: 'rgba(31,84,121,255)' }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: '60px', height: '60px' }}
              >
                <SentimentSatisfiedAltOutlinedIcon style={{ color: 'rgba(31,84,121,255)' }} />
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Happy Clients</h5>
                <h1 className="text-white mb-0">{facts.clients}</h1>
              </div>
            </div>
          </div>

          {/* Projects Done */}
          <div className={`col-lg-4 ${isVisible ? 'fadeIn' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div
              className="bg-light shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: '150px' }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}
              >
                <DoneAllIcon style={{ color: 'white' }} />
              </div>
              <div className="ps-4">
                <h5 className="mb-0" style={{ color: 'rgba(31,84,121,255)' }}>
                  Projects Done
                </h5>
                <h1 className="mb-0">{facts.projects}</h1>
              </div>
            </div>
          </div>

          {/* Awards Won */}
          <div className={`col-lg-4 ${isVisible ? 'fadeIn' : ''}`} style={{ animationDelay: '0.6s' }}>
            <div
              className="shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: '150px', backgroundColor: 'rgba(31,84,121,255)' }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: '60px', height: '60px' }}
              >
                <EmojiEventsOutlinedIcon style={{ color: 'rgba(31,84,121,255)' }} />
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Awards Won</h5>
                <h1 className="text-white mb-0">{facts.awards}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
