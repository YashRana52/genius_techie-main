import React from 'react'

function Brand() {
    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-10 w-full bg-pink-500 text-white">
            <a className="mb-8 md:mb-12" href="#">
                <img
                    className="w-28 md:w-36"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"
                    alt="company_logo"
                />
            </a>
            <div className="flex flex-col items-center">
                <p className="md:text-3xl text-xl text-center">
                    Every success story starts with a dream — explore how we’ve helped our clients shape their ideas into real achievements and long-lasting impact.
                </p>
                <div className="flex items-center gap-2 mt-8">
                    <img
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                        src="https://avatars.githubusercontent.com/u/176314557?v=4"
                        alt="profileImg1"
                    />
                    <div className="text-sm">
                        <p className="font-medium text-lg">Yash Rana</p>
                        <p>Software developer</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-8">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-400 rounded-full"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-400 rounded-full"></div>
            </div>
        </div>
    )
}

export default Brand