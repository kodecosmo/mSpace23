import Breadcrumb from '@/components/molecules/BreadcrumbMolecule';

export default function DashboardHeading({ heading, description, subPage1URL, subPage2URL }) {
    
    return (
        <div className="pt-2 bg-gray-50 dark:bg-gray-900 antialiased">

            <Breadcrumb subPage1URL={subPage1URL} subPage2URL={subPage2URL} />

            <div className="p-10 pt-2 pb-8">
                <h3 className="text-3xl font-bold dark:text-white text-gray-800">{heading}</h3>
                <p className="text-sm mt-1 text-gray-500">{description}</p>
            </div>

        </div>
    );
}