

// import { useState, useEffect } from 'react';

// import Posts from "./Posts"
// import InputBox from './InputBox';


// const Feed = () => {

//     const[loading, setLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 200);
//     }, []);

//     return (
//         <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
//             <section className="col-span-2">
//                 <InputBox/>
//                 <Posts/>
//             </section>
//         </main>
//     )
// }

// export default Feed

// removing tailwind css

import { useState, useEffect } from 'react';

import Posts from "./Posts"
import InputBox from './InputBox';


const Feed = () => {

    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">
                <InputBox/>
                <Posts/>
            </section>
        </main>
    )
}

export default Feed
