import Navbar from '@/components/Navbar';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TempCar = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="layout grid grid-cols-2">
        <motion.img
          className="w-full h-screen"
          src={
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80'
          }
        />
      </div>
    </main>
  );
};

export default TempCar;
