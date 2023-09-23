import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import SideNavbarMolecule from '@/components/molecules/SideNavbarMolecule'

import { useState, useEffect } from 'react';

export default function Dashboard() {

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {

    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("load", handleWindowResize);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>

      <Header title="StudyMate" description="Welcome to StudyMate. Your online tutoring site." />

      <NavbarMolecule type="dashboard" /> {/* `default` or `dashboard` */}

      <main style={{ marginTop: '70px' }} className='flex justify-center w-full h-fit'>

        <div className='max-w-screen-xl flex w-full'>

          <SideNavbarMolecule windowHeight={windowHeight} />

          <div className="container">

            Dashboard Page

          </div>
sd
        </div>
      </main>
      
    </>
  )
}