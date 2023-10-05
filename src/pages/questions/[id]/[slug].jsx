import QueWithAnswer from '@/components/molecules/QueWithAnswer'

import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import { FooterMolecule } from '@/components/molecules/FooterMolecule'

export default function SelectedQuestion() {

    return (
        <>

            <Header title="Que" description="Welcome to Que. Your online tutoring site." />

            <NavbarMolecule type="default" /> {/* `default` or `dashboard` */}

            <main style={{ marginTop: '80px' }} className='w-full'>

                <QueWithAnswer />

            </main>

            <FooterMolecule />

        </>
    )
}