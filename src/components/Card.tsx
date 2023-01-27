import { FaStar } from 'react-icons/fa';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICardProps {
  layoutId: string;
}

const animation: Variants = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      bounce: 0.2,
      duration: 0.7
    }
  }
};

const fadeAnimation: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

const Card: FC<ICardProps> = ({ layoutId }) => {
  return (
    <motion.div
      variants={fadeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      className="h-80 relative overflow-hidden group rounded-2xl w-full cursor-pointer"
      layout>
      <div
        className="group-hover:scale-110 transition-all duration-500 absolute w-full h-full  block overflow-hidden rounded-xl 
      bg-[url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80)] 
      bg-cover bg-center bg-no-repeat"></div>
      <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
        4.5
        <FaStar className="ml-1.5 h-3 w-3 text-yellow-300" />
      </span>
      <div className="absolute inset-0 bg-black/20"></div>
      <motion.div
        className="absolute left-4 bottom-4 text-white"
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit">
        <h3 className="text-2xl font-bold">Mercedes-Benz E200</h3>

        <p className="text-sm">70.000KZT</p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
