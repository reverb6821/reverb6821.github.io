import * as React from 'react';

const Contact: React.FC =()=> {
    return(
        <React.Fragment>
            <div className="inline-flex flex-col">
                <h1 className="text-xl font-semibold text-gray-700 mt-5 dark:text-gray-200">
                    Social Links
                </h1>
                <div className="mt-2 ml-4">
                    <div className="flex flex-row justify-start items-center ">
                        <a
                        href='https://github.com/reverb6821'
                        target="_blank"
                        className="flex flex-row items-center space-x-4 group"
                        >
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                Linkedin
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row justify-start items-center ">
                        <a
                         href='https://github.com/reverb6821'
                         target="_blank"
                         className="flex flex-row items-center space-x-4 group"
                        >
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                Github
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact