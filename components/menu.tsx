import React from 'react';

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="fixed left-0 top-0 h-screen w-screen bg-slate-800">
            <div className="flex ml-auto h-full w-full max-w-[50%] border">
                <ul className="projects">
                    <li className="projectsLi">
                        <div className="projectContainer">
                            <a href="/work/studiomega/" className="">Studio<br />Mega</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu