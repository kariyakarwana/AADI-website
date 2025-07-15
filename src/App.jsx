import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Assignmentdevelopment from './components/pages/Assignmentdevelopment';
import Webns from './components/pages/webns';
import Fasttrack from './components/pages/fasttrack';
import Recommend from './components/pages/recommend';
import ITsupport from './components/pages/ITsupport';
import FloatingEnquiryButton from './components/FloatingEnquiryButton';
import StarsBackground from './components/StarsBackground';

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Assignmentdevelopment");
  const [gradientProgress, setGradientProgress] = useState(0);
  const contentRef = useRef(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Assignmentdevelopment":
        return <Assignmentdevelopment />;
      case "webns":
        return <Webns />;
      case "fasttrack":
        return <Fasttrack />;
      case "Recommend":
        return <Recommend />;
      case "ITsupport":
        return <ITsupport />;
      default:
        return <Assignmentdevelopment />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop } = contentRef.current;
        const scrollStart = 0;
        const scrollEnd = 100;
        let progress = 0;

        if (scrollTop > scrollStart) {
          progress = Math.min(100, ((scrollTop - scrollStart) / (scrollEnd - scrollStart)) * 100);
        }

        if (Math.abs(progress - gradientProgress) > 1) {
          setGradientProgress(progress);
        } else if (scrollTop <= scrollStart && gradientProgress > 0) {
          setGradientProgress(0);
        }
      }
    };

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      currentContentRef.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (currentContentRef) {
        currentContentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [gradientProgress]);

const [scrollDirection, setScrollDirection] = React.useState(0);
const lastScrollTop = React.useRef(0);

useEffect(() => {
  const onScroll = () => {
    if (!contentRef.current) return;
    const scrollTop = contentRef.current.scrollTop;
    const direction = scrollTop > lastScrollTop.current ? 1 : -1;
    lastScrollTop.current = scrollTop;
    setScrollDirection(direction);
  };

  const current = contentRef.current;
  if (current) {
    current.addEventListener('scroll', onScroll);
  }

  return () => {
    if (current) current.removeEventListener('scroll', onScroll);
  };
}, []);


  return (
    <div className="relative font-sans h-screen">
      {/* Star + Comet background */}
      <StarsBackground scrollDirection={scrollDirection} />


      {/* Main content */}
      <div className="flex flex-col h-full relative z-10">
        <Navbar setActiveComponent={setActiveComponent}/>
        <div ref={contentRef} className="flex-1 overflow-y-auto p-8 mt-20">
          {renderComponent()}
        </div>
        <FloatingEnquiryButton />
      </div>
    </div>
  );
};

export default App;