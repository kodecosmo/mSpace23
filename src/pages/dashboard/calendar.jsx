import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import SideNavbarMolecule from '@/components/molecules/SideNavbarMolecule'
import CalenderMoleule from '@/components/molecules/CalenderMolecule'

import { useState, useEffect } from 'react';
import DashboardHeading from '@/components/molecules/DashboardHeadingMolecule';
import { DashboardFooterMolecule } from '@/components/molecules/FooterMolecule';

export default function Calender() {

    // ------------------- side nav resize code starts -------------------
    const [windowHeight, setWindowHeight] = useState(0);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            setWindowHeight(window.innerHeight);
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    // ------------------- side nav resize code ends -------------------

    return (
        <>

            <Header title="Que" description="Welcome to Que. Your online tutoring site." />

            <NavbarMolecule type="dashboard" /> {/* `default` or `dashboard` */}

            <main style={{ marginTop: '70px' }} className='bg-gray-50 dark:bg-gray-900 flex justify-center w-full h-fit'>

                <div className='max-w-screen-2xl flex w-full'>

                    <SideNavbarMolecule windowHeight={windowHeight} />

                    <div className="m-0 w-full">
                        <div className="grid grid-cols-4">
                            <div className="flex flex-col justify-center align-top mt-4 pb-2 col-span-4">

                                {/* Heading section start */}
                                <DashboardHeading
                                    heading="Calendar"
                                    description="Customize your online sessions using the calendar."
                                    subPage1URL="dashboard"
                                    subPage2URL="calendar"
                                />
                                {/* Heading section end */}

                                <CalenderMoleule />

                                <DashboardFooterMolecule />

                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </>
    )
}