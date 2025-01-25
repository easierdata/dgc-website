export default function Footer(): JSX.Element {
    return (
        <div
            style={{
                backgroundColor: `#039876`
            }}
            className="py-6"
        >
            <div className='mx-6 md:mx-12 p-6'>
                <hr />
                <div className="grid md:grid-cols-2">
                    <div>
                        <h2 className="text-lg text-white font-bold">Social</h2>
                        <a href="https://www.linkedin.com/company/easier-data-initiative/" target="_blank" rel="noreferrer" className="no-underline	text-white font-bold hover:text-slate-300">LinkedIn</a> <br />
                        <a href="https://twitter.com/easierdataorg" target="_blank" rel="noreferrer" className="no-underline text-white font-bold hover:text-slate-300">Twitter (X)</a> <br/>
                        <a href="https://www.youtube.com/@easierdataorg" target="_blank" rel="noreferrer" className="no-underline text-white font-bold hover:text-slate-300">YouTube</a> <br/>
                    </div>
                    <div>
                        <h2 className="text-lg text-white font-bold">Links</h2>
                        <a href="https://easierdata.org/updates" target="_blank" rel="noreferrer" className="no-underline text-white font-bold hover:text-slate-300">Blog</a> <br/>
                        <a href="https://easierdata.org/about" target="_blank" rel="noreferrer" className="no-underline	text-white font-bold hover:text-slate-300">Team</a> <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}