import Header from '@/components/molecules/HeaderMolecule'
import NavbarMolecule from '@/components/molecules/NavbarMolecule'
import IntroMolecule from '@/components/molecules/IntroMolecule'
import { FooterMolecule } from '@/components/molecules/FooterMolecule'
import Landing from '@/components/molecules/Landing'

export default function Home() {

  return (
    <>

      <Header title="Que" description="Welcome to Que. Your online tutoring site." />

      <NavbarMolecule type="default" /> {/* `default` or `dashboard` */}

      <main style={{ marginTop: '80px' }} className='w-full'>

        <IntroMolecule />
        <Landing />

      </main>

      <FooterMolecule />

    </>
  )
}