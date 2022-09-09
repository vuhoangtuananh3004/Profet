import React, { useEffect, useState } from 'react'

function SpecialEvent() {
    const [ticking, setTicking] = useState(true)
    const [count, setCount] = useState(0)
    let [loop, setLoop] = useState(0)
    let [opacity, setOpacity] = useState(100)

    useEffect(() => {
        const timer = setTimeout(() => ticking && setCount(count + 1), 1e3)
        setOpacity(opacity-10)
        if (count!=0 && count % 10 == 0) {
            setOpacity(100)
            setLoop(loop+1)
            if (loop + 1 == specialEvent.EventName.length){
                setLoop(0)
            }
        }
    }, [count])
    


    const specialEvent = {
        EventName: ["EnchantMagic","New Years San Francisco 2022-2023"],
        EventDescription: ["The World's Largest Christmas Light Maze and Village", 'San Francisco is one of the best places to celebrate New Year\'s Eve'],
        EventTicket: ["TICKETS ON SALE SEPTEMBER 15! OPENS EVERYWHERE NOVEMBER 25.",'THIS YEAR, NEW YEAR\'s Eve falls on a Saturday night'],
        EventStory: ["Escape to an incredible illuminated winter wonderland. Experience a world of adventure featuring over 4 million sparkling lights creating an immersive walk-thru, story-themed maze. Discover our charming Village offering ice-skating, live entertainment, dining, holiday shopping, Santa & Mrs. Claus, and much more. Enchant is a spectacular annual event produced on the playing fields of major league sports stadiums and iconic outdoor spaces. Make plans to bring family and friends to Enchant for your most memorable, fun, and heartwarming evening of the Christmas season. A world of Christmas wonder awaits!",
                    'You\'ll find plenty of activities on New Year\'s Day too. You can head out on a special New Year\'s Day cruise, visit a few of the famous San Francisco attractions, or lay low watching some great college football games'],
        EventLocationTitle: ["Lighting Up These Cities in 2022", "Lighting Up SanFrancisco"],
        EventLocationDescription: ["Join us in one of our 8 host cities. Tickets go on sale on September 15. Opens everywhere November 25.", 'New Year’s Eve Fireworks in SF'],
        EventLocation: [[['Washington, DC', 'Nationals Park'], ['St. Petersburg, FL', 'Tropicana Field'], ['Nashville, TN', 'First Horizon Ballpark'], ['Dallas, TX', 'Fair Park'],
        ['Las Vegas, NV', 'Las Vegas Ballpark'], ['Scottsdale, AZ', 'Salt River Fields'], ['Sacramento, CA', 'Sutter Health Park'], ['San Jose, CA', 'PayPal Park']
        ],[['Sanfrancisco, CA', 'SF Bay Bridge']]],
        DiscountWithLikeHome: 15,
        EventImageSrc: [['/main-image/EnchantMagic.jpeg', '/main-image/EnchantChild.jpeg'],['/main-image/Sfnewyear1.jpeg', '/main-image/sfnewyear2.jpeg']]
    }

    return (
        <div className={`flex justify-center align-center text-white mt-10 opacity2-${opacity} h-[800px] overflow-scroll`}>
            <div className='flex flex-col w-2/6'>
                <div className='flex'>
                    <div className='grid grid-cols-2 gap-2 w-full p-4'>
                        <div className='col-span-2 text-center'>
                            <p className='font-Sacramento text-2xl font-bold tracking-widest border border-white-900 rounded-full p-3'>{specialEvent.EventName[loop]}</p>
                        </div>
                        <div className='col-span-2'>
                            <p className='font-Sacramento text-lg text-center'>{specialEvent.EventDescription[loop]}</p>
                            <p className='text-sm text-center text-red-300 mt-4'>{specialEvent.EventTicket[loop]} </p>
                            <p className='text-base p-4 text-stone-400 tracking-wide'>{specialEvent.EventStory[loop]}</p>

                        </div>
                        <div className='col-span-2'>
                            <p className='font-Sacramento text-lg text-center p-2 text'>{specialEvent.EventLocationTitle[loop]}</p>
                            <p className='text-stone-400'>{specialEvent.EventLocationDescription[loop]}</p>
                        </div>
                        {specialEvent.EventLocation[loop].map((location) => <div className='text-stone-400'><span className='text-emerald-500'>{location[0]}</span> at {location[1]}</div>)}
                    </div>
                </div>
                <div className='flex w-full border border-gray-100/20 p-2 text-center bg-gradient-to-r from-indigo-500/10'>Booking with LikeHome save {specialEvent.DiscountWithLikeHome}% more at above Event Locations, book and stay for less before Sept 30, 2022</div>
            </div>
            <div className='flex flex-col w-1/4 justify-start h-[800px] w-[600px] p-1'>
                {
                    specialEvent.EventImageSrc[loop].map((src) => <div className='flex h-1/2 w-full justify-center'><img src={src} className='object-contain' alt="" />
                    </div>)
                }
            </div>
        </div>
    )
}

export default SpecialEvent