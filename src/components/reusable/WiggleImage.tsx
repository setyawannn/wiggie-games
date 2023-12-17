import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WiggleImageProps {
  imageUrl: string;
}

const WiggleImage: React.FC<WiggleImageProps> = ({ imageUrl }) => {
  const [isTap, setIsTap] = useState(false);

  const wiggleAnimation = {
    x: [0, 10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0],
    scaleX: [1, 1.1, 0.9, 1.08, 0.92, 1.06, 0.94, 1.02, 0.98, 1.01, 0.99, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  };

  useEffect(() => {
    setIsTap(true);

    return () => setIsTap(false);
  }, []);

  return (
    <motion.img
      src={imageUrl}
      alt="Wiggling Image"
      style={{ width: "100%", height: "100%", cursor: "pointer" }}
      initial="start"
      animate={isTap ? "wiggle" : "start"}
      variants={{
        start: {},
        wiggle: wiggleAnimation,
      }}
      whileTap="wiggle"
    />
  );
};

export default WiggleImage;
