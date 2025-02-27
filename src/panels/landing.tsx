import React from "react";
import { LandingContent } from "../static/content";
import globe from '../assets/globe.png';

export default function Landing(): JSX.Element {

    return (
        <div className="h-full grid md:grid-cols-2 ml-4 mr-4 md:ml-20 md:mr-20 select-none">
            <div className="mt-8 md:mt-20">
                <h1 className="font-bold text-4xl md:text-6xl">{LandingContent.heading}</h1>
                <h2 className="mt-4 font-bold text-2xl md:text-3xl">{LandingContent.subheading}</h2>
                <hr className="mt-4 mb-4"/>
                <p className="text-lg mb-4">{LandingContent.description}</p>

                <div className="sm:visible sm:grid sm:grid-rows-2 md:invisible md:h-0 flex flex-col items-center">
                    <button
                        className="mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-sky-700 text-white hover:bg-sky-800"
                        onClick={() => window.open("https://www.astral.global", "_blank")}
                    >
                        Astral
                    </button>
                    <button
                        className="mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-sky-700 text-white hover:bg-sky-800"
                        onClick={() => window.open("https://easierdata.org", "_blank")}
                    >
                        EASIER
                    </button>
                    <button
                        className="mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-sky-700 text-white hover:bg-sky-800"
                        onClick={() => window.open("https://www.ogc.org/domain-working-groups/", "_blank")}
                    >
                        OGC DWG
                    </button>
                </div>

                <div className="invisible sm:invisible sm:h-0 md:visible">
                    <button
                        className="mt-3 px-6 py-2 drop-shadow-md rounded-3xl bg-sky-700 text-white hover:bg-sky-800"
                        onClick={() => window.open("https://www.astral.global", "_blank")}
                    >
                        Astral
                    </button>
                    <button
                        className="sm:ml-0 md:ml-3 mt-3 px-6 py-2 rounded-3xl text-white bg-sky-700 hover:bg-sky-800"
                        onClick={() => window.open("https://easierdata.org", "_blank")}
                    >
                        EASIER
                    </button>
                    <button
                        className="sm:ml-0 md:ml-3 mt-3 px-6 py-2 rounded-3xl text-white bg-sky-700 hover:bg-sky-800"
                        onClick={() => window.open("https://www.ogc.org/domain-working-groups/", "_blank")}
                    >
                        OGC DWG
                    </button>
                </div>
            </div>
            <div>
                <img 
                    src={globe} 
                    alt="logo" 
                    className='md:mt-12 md:ml-12 container max-w-screen-sm mx-auto'
                />
            </div>
        </div>
    )
}