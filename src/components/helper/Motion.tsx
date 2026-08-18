"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "zoomIn"
  | "zoomOut"
  | "rotate"
  | "blur"
  | "bounceUp"
  | "bounceDown"
  | "flipX"
  | "flipY"
  | "slideScale"
  | "skewLeft"
  | "skewRight"
  | "pop"
  | "float"
  | "reveal";

const animationVariants: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  fadeDown: {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  fadeLeft: {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  fadeRight: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  zoomIn: {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
  zoomOut: {
    hidden: {
      opacity: 0,
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
  rotate: {
    hidden: {
      opacity: 0,
      rotate: -10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
    },
  },
  blur: {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  },
  bounceUp: {
    hidden: {
      opacity: 0,
      y: 100,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  },
  bounceDown: {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  flipX: {
    hidden: {
      opacity: 0,
      rotateX: 90,
    },

    visible: {
      opacity: 1,
      rotateX: 0,
    },
  },
  flipY: {
    hidden: {
      opacity: 0,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
    },
  },
  slideScale: {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  },
  skewLeft: {
    hidden: {
      opacity: 0,
      x: -50,
      skewX: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
    },
  },
  skewRight: {
    hidden: {
      opacity: 0,
      x: 50,
      skewX: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
    },
  },
  pop: {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  },
  float: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  reveal: {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
    },
  },
};

export default function Motion({
  children,
  animation = "fadeUp",
  variants,
  duration = 0.6,
  delay = 0,
  once = true,
  className = "",
}: {
  children: ReactNode;
  animation?: AnimationType;
  variants?: Variants;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants || animationVariants[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
