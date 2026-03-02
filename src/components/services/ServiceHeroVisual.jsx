import React from "react";
import { motion } from "framer-motion";

const ServiceHeroVisual = ({ src, alt, imageClassName = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative flex justify-center items-center w-full"
    >
      <motion.div
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.95, 1.06, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none w-[75%] h-[75%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(145,79,252,0.48) 0%, rgba(233,58,139,0.25) 45%, rgba(0,0,0,0) 72%)",
        }}
      />

      <motion.div
        animate={{ opacity: [0.1, 0.28, 0.1], y: [-8, 8, -8] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none w-[88%] h-[80%] rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(43,97,229,0.22), rgba(145,79,252,0.12), rgba(233,58,139,0.22))",
          filter: "blur(14px)",
        }}
      />

      <motion.div
        animate={{ y: [0, -10, 0], rotateZ: [0, 1.2, 0, -1.2, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full flex justify-center"
      >
        <motion.img
          src={src}
          alt={alt}
          animate={{
            filter: [
              "drop-shadow(0 0 18px rgba(145,79,252,0.58)) brightness(1.02)",
              "drop-shadow(0 0 34px rgba(233,58,139,0.64)) brightness(1.08)",
              "drop-shadow(0 0 24px rgba(43,97,229,0.58)) brightness(1.03)",
              "drop-shadow(0 0 18px rgba(145,79,252,0.58)) brightness(1.02)",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className={`${imageClassName} w-[76vw] max-w-[460px] md:max-w-[520px] lg:max-w-[560px] h-auto max-h-[440px] object-contain mix-blend-screen`}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceHeroVisual;
