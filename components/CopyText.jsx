"use client";
import { useState } from "react";

const CopyText = ({ text }) => {
  const [copied, setcopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text), setcopied(true);
        setTimeout(() => setcopied(false), 3500);
      }}
    >
      {copied ? "copied" : "copy"}
    </button>
  );
};

export default CopyText;
