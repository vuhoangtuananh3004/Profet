import { query } from 'firebase/firestore';
import { useRouter } from 'next/router'
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import db from '../../../firebaseConfig'
import StyleContext from '../../../components/Context/StyleContext';
import Layout from '../../../components/Layout/Layout';
import PropertyCard from '../../../components/PropertyCard/PropertyCard';
import { useEffect, useState } from 'react';
import React from 'react'
import HotelList from '../../../components/Hotels/HotelList';

// export default function Home() {
//     // const setStyle = "bg-purple-700 hover:bg-slate-900 hover:text-white"
//     // const router = useRouter();
//     // const { destination } = router.query;
//     // const [getProp, setProps] = useState([]);

//     // const [value, loading, error] = useDocument(
//     //     doc(db, 'hotelByDestination', destination),
//     //     {
//     //         snapshotListenOptions: { includeMetadataChanges: true },
//     //     }
//     // );
//     /**CONVERT DATA IN FIRE-STORE*/
//     // const [value, loading, error] = useDocument(
//     //     doc(db, 'hotelByDestination', 'San Jose'),
//     //     {
//     //         snapshotListenOptions: { includeMetadataChanges: true },
//     //     }
//     // );

//     // if (!loading) {
//     //     (async () => {
//     //         await setDoc(doc(db, "hotelByDestination", "ChIJ9T_5iuTKj4ARe3GfygqMnbk"), value.data());
//     //     })()
//     // }
//     const datas = (!loading) ? value.data().data : "";
//     return (
//         <StyleContext.Provider value={{ setStyle }}>
//             <Layout>
//                 {/* {loading ? <></> :
//                     <div className='flex flex-row w-full mx-auto mt-10 justify-center'>
//                         <div className='w-[400px] bg-red-400 mr-10'>asd</div>
//                         <div className='w-[800px]'>
//                             {
//                                 datas.map((data) => <PropertyCard key={destination} keyVal={data}/>)
//                             }
//                         </div>
//                     </div>

//                 } */}
//             </Layout>
//         </StyleContext.Provider>
//     )
// }

function Home() {
    const setStyle = "bg-purple-700 hover:bg-slate-900 hover:text-white"
    const router = useRouter();
    const { destination } = router.query;
    const [getProp, setProps] = useState([]);
    // const [value, loading, error] = useDocument(
    //     doc(db, 'hotelByDestination', destination),
    //     {
    //         snapshotListenOptions: { includeMetadataChanges: true },
    //     }






    // const datas = (!loading) ? value.data().data : "";
    return (
        <StyleContext.Provider value={{ setStyle }}>
            <Layout>
                {/* {loading ? <></> :
                    <div className='flex flex-row w-full mx-auto mt-10 justify-center'>
                        <div className='w-[400px] bg-red-400 mr-10'>asd</div>
                        <div className='w-[800px]'>
                            {
                                datas.map((data) => <PropertyCard key={destination} keyVal={data} />)
                            }
                        </div>
                    </div>

                } */}
                {(destination!=null) ? <HotelList destination={destination}/>:<></> }
              
            </Layout>
        </StyleContext.Provider>
    )
}
export default Home