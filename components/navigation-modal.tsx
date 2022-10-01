import React from 'react';
import Link from 'next/link';

type Props = {}

const NavigationModal = (props: Props) => {
    return (
        <div className="fixed left-0 top-0 w-full h-full bg-slate-800">
            hello world

            <div className="border w-full max-w-2xl my-0 mx-auto">
                <ul>
                    <li>
                        <Link href="">
                            <a>
                                Work
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationModal