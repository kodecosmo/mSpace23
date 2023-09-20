import { useRouter } from 'next/router'
import NavbarMolecule from '../../components/molecules/NavbarMolecule'
import FooterMolecule from '@/components/molecules/FooterMolecule'

export default function Topic() {
    const router = useRouter()
    return (
        <>
            <NavbarMolecule />
            <main>
                <section className="font-sans antialiased text-gray-600 min-h-full flex flex-col">
                    <div className="relative overflow-hidden mt-10">
                        <img
                            src="https://tailwindui.com/img/beams-basic.png"
                            alt="pattern"
                            className="absolute left-1/2 top-0 -ml-[35rem] max-w-full"
                        />
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
                                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl capitalize">
                                    {router.query.slug} is the slug
                                </h1>
                                <p className="mt-4 text-base leading-7 text-slate-600">
                                    This is subject page
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterMolecule />
        </>
    )
}