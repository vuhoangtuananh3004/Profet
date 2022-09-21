import { query } from 'firebase/firestore';
import { useRouter } from 'next/router'
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import db from '../../firebaseConfig'
import { useEffect, useState } from 'react';
import React from 'react'
import PropertyCard from '../PropertyCard/PropertyCard';


function HotelList(props) {
    const [value, loading, error] = useDocument(
        doc(db, 'hotelByDestination', props.condition),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )
    const datas = (!loading) ? value.data().data : "";
    return (
        <div>
            {loading ? <></> :
                // <div className='flex flex-row w-full mx-auto mt-10 justify-center'>
                //     <div className='w-[400px] bg-red-400 mr-10'></div>
                //     <div className='w-[800px]'>
                //         {
                //             datas.map((data) => <PropertyCard key={data.id} keyVal={data} />)
                //         }
                //     </div>
                // </div>
                <div className='w-3/4 mx-auto mt-[100px] justify-center'>
                    <div className='grid grid-cols-4 overflow-hidden'>
                        {
                            datas.map((data) => <div className='flex mx-auto h-[400px] w-[300px]' key={data.id}><PropertyCard key={data.id} keyVal={data} /> </div>)
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default HotelList