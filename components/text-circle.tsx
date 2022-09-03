import React from 'react';

type Props = {
    text?: string;
    className?: string;
}

const TextCircle = (props: Props) => {

    const { text, className } = props;

    const splitText = text?.split('');

    const [width, setWidth] = React.useState<number>(0);
    const breakpoint = 1024;

    const getWindowWidth = () => {
        setWidth(window?.innerWidth)
    }

    React.useEffect(() => {
        getWindowWidth()
        window.addEventListener("resize", getWindowWidth);
        return () => window.removeEventListener('resize', getWindowWidth);
    }, []);

    return (
        <div className={`absolute capitalize rounded-full h-[140px] w-[140px] large-sm:h-[200px] large-sm:w-[200px] border font-work-sans 
            animate-spin-slow ${className}`}>
            <p>
                {splitText?.map((letter, index) => {
                    return (
                        <span style={{
                            transform: `rotate(${index * 7.0}deg)`,
                            transformOrigin: `0 ${width >= breakpoint ? '100px' : '70px'}`,
                        }} 
                        className={` text-[0.50rem] z-0 absolute left-1/2 text-green-200 font-work-sans`} key={index}>{letter}</span>
                    )
                })}
            </p>
        </div>
    )
}

export default TextCircle










// import React from 'react';

// type Props = {
//     text?: string;
//     className?: string;
// }

// const TextCircle = (props: Props) => {

//     const { text, className } = props;

//     const splitText = text?.split('');

//     return (
//         <div className={`absolute capitalize rounded-full h-[200px] w-[200px] border font-work-sans animate-spin-slow ${className}`}>
//             <p>
//                 {splitText?.map((letter, index) => {
//                     return (
//                         <span style={{
//                             transform: `rotate(${index * 7.0}deg)`,
//                             transformOrigin: '0 100px',
//                         }} 
//                         className={`text-[0.50rem] absolute left-1/2 text-green-200 font-work-sans`} key={index}>{letter}</span>
//                     )
//                 })}
//             </p>
//         </div>
//     )
// }

// export default TextCircle


















// import React from 'react';

// type Props = {
//     text?: string;
//     className?: string;
// }

// const TextCircle = (props: Props) => {

//     const { text, className } = props;

//     const splitText = text?.split('');

//     return (
//         <div className={`absolute capitalize rounded-full h-[180px] w-[180px] font-work-sans border animate-spin-slow ${className}`}>
//             <p>
//                 {splitText?.map((letter, index) => {
//                     return (
//                         <span style={{
//                             transform: `rotate(${index * 7.1}deg)`,
//                             transformOrigin: '0 90px',
//                         }} 
//                         className={`text-[0.60rem] absolute left-1/2 text-green-200 font-work-sans`} key={index}>{letter}</span>
//                     )
//                 })}
//             </p>
//         </div>
//     )
// }

// export default TextCircle







// import React from 'react';

// type Props = {
//     text?: string;
//     className?: string;
// }

// const TextCircle = (props: Props) => {

//     const { text, className } = props;

//     const splitText = text?.split('');

//     return (
//         <div className={`absolute capitalize rounded-full h-[180px] w-[180px] font-work-sans border animate-spin-slow ${className}`}>
//             <p>
//                 {splitText?.map((letter, index) => {
//                     return (
//                         <span style={{
//                             transform: `rotate(${index * 7.1}deg)`,
//                             transformOrigin: '0 90px',
//                         }} 
//                         className={`text-[0.60rem] absolute left-1/2 text-green-200 font-work-sans`} key={index}>{letter}</span>
//                     )
//                 })}
//             </p>
//         </div>
//     )
// }

// export default TextCircle