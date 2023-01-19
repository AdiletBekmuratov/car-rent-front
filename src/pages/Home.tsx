import React, { createRef, useEffect } from 'react';
//@ts-ignore
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Card from '@/components/Card';

const Home = () => {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <div className="grid grid-cols-2 gap-4 layout">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className=" text-white min-h-screen layout">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem animi ipsum accusantium
        veritatis dolorem est explicabo. Saepe, asperiores qui dolorem labore voluptate maxime
        accusantium laboriosam distinctio molestiae, suscipit exercitationem doloribus!
      </div>
      <Footer />
    </main>
  );
};

export default Home;
