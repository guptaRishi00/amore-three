import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FlavorGallery from "../components/FlavorGallery";
import InteractiveLab from "../components/InteractiveLab";
import Features from "../components/Features";
import Mythology from "../components/Mythology";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const CustomStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');

    :root {
      --primary: #2a59ac;
      --secondary: #7e4c64;
      --tertiary: #6b5a14;
      --surface: #f3f7fb;
    }

    .bubbly-text {
      letter-spacing: -0.02em;
      text-shadow: 0 4px 0 #194c9f, 0 8px 30px rgba(0,0,0,0.1);
      background: linear-gradient(180deg, #fff 0%, #7ba4fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 4px 8px rgba(42, 89, 172, 0.25));
    }

    .gelato-bubble {
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0.5) 100%);
      backdrop-filter: blur(24px);
      border: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 20px 40px rgba(0, 0, 0, 0.04);
      border-radius: 60% 40% 70% 30% / 40% 50% 60% 70%;
      transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .gelato-bubble:hover {
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
      transform: scale(1.03) translateY(-8px);
    }

    .frosted-bg {
      background: 
        radial-gradient(circle at 0% 0%, #f0f2ff 0%, transparent 50%),
        radial-gradient(circle at 100% 0%, #7ba4fd 0%, transparent 50%),
        radial-gradient(circle at 100% 100%, #fae28d 0%, transparent 50%),
        radial-gradient(circle at 0% 100%, #ffc0dc 0%, transparent 50%),
        #f3f7fb;
      background-attachment: fixed;
    }

    .liquid-sheen {
      position: relative;
      overflow: hidden;
    }

    .liquid-sheen::before {
      content: '';
      position: absolute;
      top: -150%;
      left: -150%;
      width: 400%;
      height: 400%;
      background: linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.5) 50%, transparent 55%);
      transform: rotate(25deg);
      pointer-events: none;
      transition: all 1s ease-in-out;
    }

    .liquid-sheen:hover::before {
      top: -50%;
      left: -50%;
    }

    .btn-iridescent {
      background: linear-gradient(135deg, #1e4ea1 0%, #2a59ac 25%, #7ba4fd 50%, #b285ff 75%, #ffc0dc 100%);
      background-size: 200% 200%;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow: 0 15px 35px -5px rgba(42, 89, 172, 0.4);
    }

    .btn-iridescent:hover {
      background-position: 100% 100%;
      transform: scale(1.05) translateY(-2px);
    }

    .melting-border::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 40px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,144C672,128,768,128,864,149.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
      background-size: cover;
      z-index: 10;
    }
  `,
    }}
  />
);

export default function App() {
  return (
    <div className="frosted-bg min-h-screen text-slate-800 font-['Manrope'] selection:bg-blue-100">
      <CustomStyles />
      <Navbar />
      <Hero />
      <FlavorGallery />
      <InteractiveLab />
      <Features />
      <Mythology />
      <Testimonials />
      <Footer />
    </div>
  );
}
