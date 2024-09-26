import React, { useState, useEffect, useRef } from 'react';
import why from '../Assets/why.jpeg';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import '../css/Features.css'; // Ensure this contains animation CSS

const Features = () => {
  const [isVisible, setIsVisible] = useState([false, false, false, false, false]); // Array to track visibility for each section
  const refs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]); // Array of refs

  // Intersection Observer to handle visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
            observer.unobserve(entry.target); // Unobserve once it becomes visible
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="facts fw-bold text-uppercase" style={{ color: 'rgba(31,84,121,255)' }}>Why Choose Task Genie?</h5>
          <h1 className="mb-0 facts">We Make Task Management Simple and Efficient</h1>
        </div>
        <div className="row g-5">
          {/* First Column - Best Task Management */}
          <div className="col-lg-4">
            <div className="row g-5">
              <div className={`col-12 ${isVisible[0] ? 'fadeIn' : ''}`} ref={refs.current[0]} style={{ animationDelay: '0.1s' }}>
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <TaskAltOutlinedIcon style={{ color: 'white' }} />
                </div>
                <h4>Best Task Management</h4>
                <p className="mb-0">Seamlessly connect clients with skilled service providers and streamline tasks efficiently.</p>
              </div>
              <div className={`col-12 ${isVisible[1] ? 'fadeIn' : ''}`} ref={refs.current[1]} style={{ animationDelay: '0.2s' }}>
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <MilitaryTechOutlinedIcon style={{ color: 'white' }} />
                </div>
                <h4>Award-Winning Service</h4>
                <p className="mb-0">Our top-tier platform has been recognized for its excellence in task management and client satisfaction.</p>
              </div>
            </div>
          </div>

          {/* Middle Image Column */}
          <div className={`col-lg-4 ${isVisible[2] ? 'fadeIn' : ''}`} ref={refs.current[4]} style={{ minHeight: '350px', animationDelay: '0.9s' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src={why} alt="Feature" style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* Third Column - Professional Providers */}
          <div className="col-lg-4">
            <div className="row g-5">
              <div className={`col-12 ${isVisible[3] ? 'fadeIn' : ''}`} ref={refs.current[2]} style={{ animationDelay: '0.5s' }}>
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <WorkHistoryOutlinedIcon style={{ color: 'white' }} />
                </div>
                <h4>Professional Providers</h4>
                <p className="mb-0">Our platform offers highly skilled and vetted professionals for all your tasks.</p>
              </div>
              <div className={`col-12 ${isVisible[4] ? 'fadeIn' : ''}`} ref={refs.current[3]} style={{ animationDelay: '0.7s' }}>
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(31,84,121,255)' }}>
                  <SupportAgentSharpIcon style={{ color: 'white' }} />
                </div>
                <h4>24/7 Support</h4>
                <p className="mb-0">Our support team is available round-the-clock to ensure a smooth experience for both clients and providers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
