import { RiReactjsLine, RiNextjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [1, 1.2, 1], // Oscillate between 100% and 120% scale
    opacity: 1,
    transition: {
      duration: duration,
      repeat: Infinity, // Loop indefinitely
      repeatType: 'loop', // Ensures smooth looping
      ease: 'easeInOut', // Smooth easing for natural motion
    },
  },
});
const Technoligies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap justify-center items-center gap-8">
                <motion.div
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-6xl text-cyan-400 " />
                </motion.div>
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-6xl text-blue-200" />
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-blue-700" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsLine className="text-6xl text-purple-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-6xl text-red-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFirebaseFill className="text-6xl text-green-400" />
                </motion.div>
            </div>
        </div>
    )
}

export default Technoligies