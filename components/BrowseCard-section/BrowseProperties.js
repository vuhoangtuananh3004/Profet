import React from 'react'
import BrowseCard from './BrowseCard'

function BrowseProperties() {
    const propertiesList = {
        header: 'Browse by property type',
        title: ['Hotel', 'Apartment', 'Resort', 'Vilas'],
        img: ['/properties/Hotel.jpg', '/properties/Apartment.jpg', '/properties/Resort.jpg', '/properties/Vilas.jpg'],
        description: ['', '', '', '']
    }
    const explore = {
        header: 'Explore United State of America',
        title: ['DC', 'New York', 'Sanfrancisco', 'Texas'],
        img: ['/states/DC.jpg', '/states/New York.jpg', '/states/Sanfrancisco.jpg', '/states/Texas.jpg'],
        description: ['', '', '', '']
    }



    return (
        <div>
            <BrowseCard list={propertiesList} />
            <BrowseCard list={explore} />
        </div>

    )
}

export default BrowseProperties