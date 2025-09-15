"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // show on first load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(t);
  }, []);

  // show again on route change
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(t);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          {/* <img src="/images/loader.svg" alt="Loading..." /> */}
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000; /* full screen background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loading-container {
          position: relative;
          width: 80px;
          height: 80px;
        }

        .loading {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 6px solid rgba(255, 255, 255, 0.2);
          border-top: 6px solid #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        #loading-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
        }

        #loading-icon img {
          width: 100%;
          height: auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
