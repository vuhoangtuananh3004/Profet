import { query } from 'firebase/firestore';
import { useRouter } from 'next/router'
import { doc, setDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import db from '../../firebaseConfig'
import { useEffect, useState } from 'react';
import React from 'react'
import PropertyCard from '../PropertyCard/PropertyCard';
import NavBarBottom from '../Header/NavBarBottom';
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';
import HouseTwoToneIcon from '@mui/icons-material/HouseTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
function HotelList(props) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({
        filterByType: [''],
        price: '',
        rating: '',
    })
    const [value, loading, error] = useDocument(
        doc(db, 'hotelByDestination', props.condition),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }

    )
    useEffect(() => {
        if (loading) {
            console.log('loading....')
        } else {
            setData(value.data().data)
            filterType(value.data().data)
        }
    }, [loading, filter])

    function filterType(getValue) {
        let temp = getValue;
        // Filter By Type of Properties such as : Hotel, Apartment.....
        if (filter.filterByType.length > 1) {
            temp = temp.filter(filterByProperty)
        }
         // Filter By Rating of Properties such as : Hotel, Apartment.....
         
        setData(temp)
    }

    function filterByProperty(property) {
        for (let i = 1; i < filter.filterByType.length; i++) {
            if (property.spaceType == filter.filterByType[i]) {
                return true
            }
        }
        return false
    }

    const filterValue = (e, type) => {
        e.preventDefault()
        let tempStyle = document.getElementById(type)
        if (!filter.filterByType.includes(type)) {
            setFilter({ filterByType: [...filter.filterByType, type] })
            tempStyle.classList.add('text-yellow-400')
        } else {
            let temp = filter.filterByType;
            temp.splice(temp.indexOf(type), 1)
            setFilter({ filterByType: temp })
            tempStyle.classList.remove('text-yellow-400')
        }
    }

    return (
        <div>
            {/* {(filter.filterByType).map(doc => "   " + doc)} */}
            <div className='flex flex-col mx-auto items-center align-center sticky top-[95px] bg-slate-900/40 p-2'>
                <NavBarBottom />
                <div className='grid md:grid-rows-2 grid-flow-col xs:gap-2 xs:p-1 sm:gap-4 sm:p-2 md:gap-10 md:p-6 text-white font-bold'>
                    <div className='xs:hidden sm:flex row-span-2 align-center items-center justify-center text-md font-bold tracking-wide'>Filter By:</div>
                    <div className='flex flex-col row-span-2 align-center items-center justify-center cursor-pointer' onClick={event => filterValue(event, 'Hotel room')} id='Hotel room'>
                        <HotelTwoToneIcon />
                        <span>Hotel</span>
                    </div>
                    <div className='flex flex-col row-span-2 align-center items-center justify-center cursor-pointer' onClick={event => filterValue(event, 'Apartment')} id='Apartment'>
                        <ApartmentTwoToneIcon />
                        <span>Apartment</span>
                    </div>
                    <div className='flex flex-col row-span-2 align-center items-center justify-center cursor-pointer' onClick={event => filterValue(event, 'Guest')} id='Guest'>
                        <HouseTwoToneIcon />
                        <span>Guest</span>
                    </div>
                    <div className='flex flex-col row-span-2 align-center items-center justify-center'>
                        <AttachMoneyTwoToneIcon />
                        <span>Price</span>
                        <div className='absolute bottom-[-2px]'>
                            <div className='flex flex-row'>
                                <div>Low to High</div>
                                <div>High to Low</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col row-span-2 align-center items-center justify-center'>
                        <StarRateTwoToneIcon />
                        <span>Rating</span>
                    </div>
                </div>
            </div>

            {loading ? <></> :
                <div className='w-3/4 mx-auto mt-[100px] justify-center'>
                    <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 overflow-hidden'>
                        {
                            data.map((getData) => <div className='flex mx-auto md:h-[400px] md:w-[300px] sm:h-[400px] sm:w-[250px] mb-5' key={getData.id}><PropertyCard key={getData.id} keyVal={getData} /> </div>)
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default HotelList