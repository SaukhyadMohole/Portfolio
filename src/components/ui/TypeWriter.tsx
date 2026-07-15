"use client";

import { useState, useEffect, useCallback } from "react";

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function TypeWriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBetween = 2000,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const type = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      setCurrentText(currentWord.substring(0, currentText.length + 1));

      if (currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetween);
        return;
      }
    } else {
      setCurrentText(currentWord.substring(0, currentText.length - 1));

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, delayBetween]);

  useEffect(() => {
    const timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [type, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className="text-indigo-400">
      {currentText}
      <span className="animate-blink text-indigo-400 ml-0.5">|</span>
    </span>
  );
}
