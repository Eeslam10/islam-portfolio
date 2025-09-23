import { RiReactjsLine, RiNextjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10], // Oscillates between y: 10px and y: -10px
    transition: {
      duration: duration,
      ease: "linear", // Linear for consistent speed
      repeat: Infinity,
      repeatType: "reverse", // Reverses direction for smooth back-and-forth
    },
  },
});

const Technoligies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
            whileInView={{ opacity: 1, y: 0}} 
            initial={{ opacity: 0, y: -50}}
            transition={{duration: 1}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
                <motion.div
                variants={iconVariants(1)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400 " />
                </motion.div>
                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-blue-200" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-blue-700" />
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsLine className="text-7xl text-purple-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-red-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFirebaseFill className="text-7xl text-green-400" />
                </motion.div>
            </div>
        </div>
    )
}

export default Technoligies