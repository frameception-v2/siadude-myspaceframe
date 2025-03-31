"use client";

import { useEffect, useCallback, useState } from "react";
import { EMPIRE_URL } from "~/lib/constants";

// Custom blinking text component
function BlinkingText({ children, color = "#FF00FF", speed = "1s" }: { children: React.ReactNode; color?: string; speed?: string }) {
  return (
    <span 
      className="inline-block" 
      style={{ 
        animation: `blink ${speed} infinite`, 
        color: color,
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
      }}
    >
      {children}
    </span>
  );
}

// Custom marquee component
function Marquee({ children, speed = "15s", direction = "left" }: { children: React.ReactNode; speed?: string; direction?: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap my-1">
      <div 
        className="inline-block"
        style={{ 
          animation: `marquee-${direction} ${speed} linear infinite`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function MySpaceFrame() {
  const handleVisitEmpire = useCallback(() => {
    window.open(EMPIRE_URL, "_blank");
  }, []);

  return (
    <div 
      className="w-full mx-auto p-3 rounded-md border-4" 
      style={{ 
        background: "linear-gradient(to bottom, #000066, #6699FF)",
        borderColor: "#FF00FF",
        borderStyle: "ridge",
        boxShadow: "0 0 10px #00FFFF, 0 0 20px #FF00FF",
        fontFamily: "'Comic Sans MS', cursive"
      }}
    >
      {/* Profile section */}
      <div className="flex items-center mb-3 bg-black bg-opacity-50 p-2 rounded-md border-2 border-yellow-300">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white mr-3 bg-blue-300 flex items-center justify-center">
          <span className="text-2xl">👨‍💻</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">
            <BlinkingText color="#00FFFF">SiaDude.degen 🎩</BlinkingText>
          </h1>
          <p className="text-yellow-300">
            <span className="text-white">Mood:</span> Building my $HMBT Empire!
          </p>
        </div>
      </div>

      {/* Marquee section */}
      <div className="bg-black bg-opacity-70 p-1 rounded mb-3 border border-cyan-400">
        <Marquee>
          <span className="text-white">💰 $HMBT EMPIRE 💰 DISTRIBUTED: $212 💰 BURNED: 20.57M HMBT 💰 VISIT NOW! 💰</span>
        </Marquee>
      </div>

      {/* Main content */}
      <div 
        className="bg-white bg-opacity-80 p-3 rounded-md mb-3 border-2"
        style={{ borderColor: "#FF00FF" }}
      >
        <h2 
          className="text-center mb-2 font-bold"
          style={{ color: "#FF0000", textShadow: "1px 1px 2px #000000" }}
        >
          ★彡 MY $HMBT EMPIRE 彡★
        </h2>
        <p className="text-center text-blue-800 mb-3">
          Click below to check out my awesome Empire Builder page!
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleVisitEmpire}
            className="px-4 py-2 rounded-md font-bold text-white"
            style={{ 
              background: "linear-gradient(to bottom, #FF00FF, #9900CC)",
              border: "3px outset #FF66FF",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
              cursor: "pointer"
            }}
          >
            ⭐ VISIT MY EMPIRE ⭐
          </button>
        </div>
      </div>

      {/* Friends section */}
      <div className="bg-black bg-opacity-70 p-2 rounded-md border border-yellow-300">
        <h3 className="text-center text-white mb-2">
          <BlinkingText color="#FFFF00" speed="1.5s">My Top Friends</BlinkingText>
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {["taliskye", "g0hst", "whiskerworks", "ronwest", "drakhonen.eth", "birtcorn"].map((friend, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 mx-auto bg-gray-300 rounded-full mb-1 border border-white"></div>
              <p className="text-xs text-cyan-300">{friend}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 text-center text-xs text-white">
        <p>♪♫ Currently playing: $HMBT Empire Builder ♫♪</p>
      </div>
    </div>
  );
}

export default function Frame() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add global styles for animations
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes marquee-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `;
      document.head.appendChild(style);
      setIsLoaded(true);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] mx-auto py-2 px-2">
      <MySpaceFrame />
    </div>
  );
}
