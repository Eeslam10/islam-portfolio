
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Navbar = () => {

  const hoverVariants = {
    hover: {
      scale: 1.2, // Scale up to 120%
      rotate: 6, // Slight rotation for a playful effect
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-4 mx-auto max-w-6xl'>
      <div className='flex flex-shrink-0 items-center'>
        <h2 className='text-4xl text-white'>Is</h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-300 hover:text-navy-600 transition-colors"
          aria-label="LinkedIn Profile"
          variants={hoverVariants}
          whileHover="hover"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/Eeslam10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-300 hover:text-navy-600 transition-colors"
          aria-label="GitHub Profile"
          variants={hoverVariants}
          whileHover="hover"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://instagram.com/your-instagram-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-300 hover:text-navy-600 transition-colors"
          aria-label="Instagram Profile"
          variants={hoverVariants}
          whileHover="hover"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://x.com/your-x-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-300 hover:text-navy-600 transition-colors"
          aria-label="X Profile"
          variants={hoverVariants}
          whileHover="hover"
        >
          <FaSquareXTwitter />
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar