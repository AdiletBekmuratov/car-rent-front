import React, { createRef, useEffect } from 'react';
//@ts-ignore
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '@/components/Navbar';

const Home = () => {


  return (
    <main className="bg-gray-900">
        <Navbar/>
      <div className=" text-white min-h-screen layout">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem animi ipsum accusantium
        veritatis dolorem est explicabo. Saepe, asperiores qui dolorem labore voluptate maxime
        accusantium laboriosam distinctio molestiae, suscipit exercitationem doloribus!
      </div>
      <div className=" text-white min-h-screen layout">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem animi ipsum accusantium
        veritatis dolorem est explicabo. Saepe, asperiores qui dolorem labore voluptate maxime
        accusantium laboriosam distinctio molestiae, suscipit exercitationem doloribus!
      </div>
    </main>
  );
};

export default Home;
