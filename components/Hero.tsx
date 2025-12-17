import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TYPING_PHRASES = [
  "— Follow along 👋🏽",
  "— Say hello 🙏🏽",
  "— Come say hi 🗣️",
  "— Check us out 👀",
  "— Drop a follow 👇🏽",
  "— See what's up 🤔",
  "— Hola, ¿cómo estás? 🇪🇸"
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % TYPING_PHRASES.length;
      const fullText = TYPING_PHRASES[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(DELETING_SPEED);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(TYPING_SPEED);
      }

      if (!isDeleting && text === fullText) {
        setTypingSpeed(PAUSE_DURATION);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Carving my own path,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3131] to-[#ffbd59]">
            building as I go.
          </span>
        </h1>

        <div className="max-w-2xl text-xl md:text-2xl text-white/80 leading-relaxed mb-12 mx-auto">
          I am a creative problem solver who loves to learn. When I am not building new things, I enjoy staying active at the gym or on the basketball court.
        </div>

        <a
          href="https://x.com/hisyre"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xl text-[#ff3131] h-8 font-mono tracking-wide"
        >
          {text}
          <span className="animate-pulse">_</span>
        </a>
      </motion.div>
    </section>
  );
};
