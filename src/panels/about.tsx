export default function About(): JSX.Element {
    return (
        <div
            style={{
                background: `linear-gradient(0deg, #039876, #fff)`
            }}
            id="about"
            className="py-6 mt-24"
        >
            <div className="pt-6 bg-white mx-6 md:mx-12 rounded-lg">
                <div>
                    <h1 className='text-4xl font-bold text-center mt-3'>About</h1>
                    <div className="p-4 text-lg">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}