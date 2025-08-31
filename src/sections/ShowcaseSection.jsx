import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const handleFirstProject=()=>{
    window.open('https://veedle.vercel.app/')
  }

  const handleSecondProject=()=>{
    window.open('https://movie-app-delta-weld-88.vercel.app/')
  }

  const handleThirdProject=()=>{
    window.open('https://github.com/codebykazim/blog-app')
  }

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper" onClick={handleFirstProject}>
            <div className="image-wrapper">
              <img src="/images/project1finalwala.png" alt="Veedle WebApp" />
            </div>
            <div className="text-content">
              <h2>
                Veedle – A Full-Stack Video Sharing Platform
              </h2>
              <p className="text-white-50 md:text-xl">
                A video-streaming platform built with React, Redux-Toolkit & TailwindCSS that lets users upload, watch, and tweet about videos — all within a clean and modern UI.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef} onClick={handleSecondProject} >
              <div className="image-wrapper bg-[#dddbff]">
                <img
                  src="/images/project2test.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The Movie Discovery WebApp</h2>
            </div>

            <div className="project" ref={ycDirectoryRef} onClick={handleThirdProject}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>BlogHub - A Blog Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;