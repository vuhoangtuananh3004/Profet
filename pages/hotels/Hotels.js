import React from 'react'
import { useEffect } from 'react'

export default function Hotels() {
    var Amadeus = require('amadeus');

    var amadeus = new Amadeus({
        clientId: 'CC4hXjPfH1FgNF613AE0GN60cITPsddy',
        clientSecret: 'GC4DZRAwGsVBiGfz'
    });
    useEffect(() => {
        amadeus.referenceData.locations.hotels.byCity.get({
            cityCode: 'SFO'
          }).then(function (response) {
            console.log(response.data);
        }).catch(function (responseError) {
            console.log(responseError.code);
        });
      
    }, [])
    return (
        <div>Hotels</div>
    )
}
