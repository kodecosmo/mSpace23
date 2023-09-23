import { Card, Rating } from 'flowbite-react';
export default function TeacherProfile(props) {
    return (

        <Card>

            <div className="flex flex-col items-center pb-10">
                <img
                    alt={props.teachername}
                    className="mb-3 rounded-full shadow-lg"
                    height="96"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    width="96"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {props.teachername}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {props.subject}
                </span>

                <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
                    {props.teachernamedescription}
                </h5>

                <Rating className="mb-5" >
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                    <p className="ml-5 text-sm font-medium text-gray-500 dark:text-gray-400" >
                        {props.rating}
                    </p>
                </Rating>

                <button type="button" class="mb-5 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-6 focus:outline-none focus:ring-[#3b5998]/50 font-small rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                    </svg>
                    Facebook
                </button>
                <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                    </svg>
                    Twitter
                </button>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                        className="inline-flex items-center rounded-lg bg-orange-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-cyan-700 dark:focus:ring-orange-800"
                        href="#"
                    >
                        <p>
                            Follow
                        </p>
                    </a>
                    <a
                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        href="#"
                    >
                        <p>
                            Ask a Question
                        </p>
                    </a>
                </div>
            </div>
        </Card>
    )
}


