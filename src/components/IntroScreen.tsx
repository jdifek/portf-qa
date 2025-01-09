import { motion } from "framer-motion";
import { useEffect } from "react";

const IntroScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish(); // Скрываем экран через 3 секунды
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="300px"
        height="100px"
        viewBox="0 0 600 100"
        className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto block relative overflow-visible mx-auto"
      >
        <defs>
          <filter id="filter">
            <feFlood floodColor="black" result="black" />
            <feFlood floodColor="red" result="flood1" />
            <feFlood floodColor="limegreen" result="flood2" />
            <feOffset in="SourceGraphic" dx="3" dy="0" result="off1a" />
            <feOffset in="SourceGraphic" dx="2" dy="0" result="off1b" />
            <feOffset in="SourceGraphic" dx="-3" dy="0" result="off2a" />
            <feOffset in="SourceGraphic" dx="-2" dy="0" result="off2b" />
            <feComposite in="flood1" in2="off1a" operator="in" result="comp1" />
            <feComposite in="flood2" in2="off2a" operator="in" result="comp2" />

            <feMerge result="merge1">
              <feMergeNode in="black" />
              <feMergeNode in="comp1" />
              <feMergeNode in="off1b" />
              <animate
                attributeName="y"
                dur="4s"
                values="104px; 30px; 105px; 2px; 50px; 40px; 104px; 70px; 30px; 102px"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                dur="4s"
                values="10px; 30px; 50px; 0px; 10px; 40px; 30px; 10px; 50px"
                repeatCount="indefinite"
              />
            </feMerge>

            <feMerge result="merge2">
              <feMergeNode in="black" />
              <feMergeNode in="comp2" />
              <feMergeNode in="off2b" />
              <animate
                attributeName="y"
                dur="4s"
                values="103px; 69px; 42px; 104px; 96px; 50px; 42px; 100px; 104px"
                repeatCount="indefinite"
              />
              <animate
                attributeName="height"
                dur="4s"
                values="0px; 16px; 12px; 0px; 5px; 10px; 22px; 11px; 0px"
                repeatCount="indefinite"
              />
            </feMerge>

            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="merge1" />
              <feMergeNode in="merge2" />
            </feMerge>
          </filter>
        </defs>

        <g>
          <motion.text
            x={-300}
            y="100"
            style={{
              filter: "url(#filter)",
              fill: "white",
              fontFamily: "'Share Tech Mono', monospace",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
            initial={{
              opacity: 0,
              x: -300,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              x: 300,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
            className="text-[60px] xl:text-[80px]"
          >
            Dmytro Nebelskyi
          </motion.text>
        </g>
      </svg>
    </motion.div>
  );
};

export default IntroScreen;
