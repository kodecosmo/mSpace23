export default function ErrorPage() {

    return (
        <section className="bg-white dark:bg-gray-900 flex h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 m-auto">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>

                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Page not found. Go to Home page </p>
                </div>
            </div>
        </section>
    );
}