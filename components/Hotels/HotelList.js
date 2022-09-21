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
        doc(db, 'hotelByDestination', props.destination),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )
    const datas = (!loading) ? value.data().data : "";
    return (
         <div>
               {loading ? <></> :
                    <div className='flex flex-row w-full mx-auto mt-10 justify-center'>
                        <div className='w-[400px] bg-red-400 mr-10'>asd</div>
                        <div className='w-[800px]'>
                            {
                                datas.map((data) => <PropertyCard key={props.destination} keyVal={data} />)
                            }
                        </div>
                    </div>
                }
         </div>
    )
}

export default HotelList