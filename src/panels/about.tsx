export default function About(): JSX.Element {
    return (
        <div
            id="about"
            className="py-6 mt-24 overflow-x-hidden select-none drop-shadow-lg max-w-screen-lg mx-auto"
        >
            <div className="pt-6 bg-white mx-6 md:mx-12 rounded-lg border-2 border-sky-500">
                <div>
                    <h1 className='text-4xl font-bold text-center mt-3'>About</h1>
                    <div className="p-4 text-lg space-y-4">
                        <p>We focus on research, development, and technical community building. </p>
                        <p>Our goal is to expand what's possible with digital geospatial technologies by conducting research, developing open source software, and engaging with the technical community. </p>
                        <p>We organize our work under three pillars: proof-of-location, verifiable geocomputation, and peer-to-peer geospatial data management systems. We seek to complement the existing state of the art in GIScience and location-based services, and we are actively researching how to build more secure location-based services for AI safety use cases.</p>
                    </div>

                    {/* Links */}
                    <div className="flex justify-center space-x-4 mt-6 mb-6">
                        <button
                            className="px-6 py-2 rounded-3xl bg-white text-black border border-sky-500 font-bold hover:bg-gray-200"
                            onClick={() => window.open("https://github.com/DecentralizedGeo", "_blank")}
                        >
                            GitHub
                        </button>
                        <button
                            className="px-6 py-2 rounded-3xl bg-white text-black border border-sky-500 font-bold hover:bg-gray-200"
                            onClick={() => window.open("https://osf.io/preprints/osf/bg2uq_v1", "_blank")}
                        >
                            Vision Paper
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}