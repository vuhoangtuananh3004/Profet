import React from 'react'

function RewardCard() {
    return (
        <div className='flex w-2/3 text-slate-200 justify-center mx-auto'>
            <div className="flex max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('/svg/Discount.svg')]" title="">
                </div>
                <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="flex flex-col mb-8 justify-center w-full">
                        <p className="flex text-sm text-white-600 flex items-center">
                            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                             Members only 
                        </p>
                        <div className="text-white-400 font-bold text-xl mb-2 text-center"> Sign in, and Save more with LikeHome.com reward!!!</div>
                        <p className="text-white text-base text-center">Get 10% discount with loyalty program.</p>
                        <div className='flex w-full justify-center align-center'>
                            <button className='mt-3 mr-6 text-lg border-2 border-sky-200 px-4 rounded-xl hover:bg-red-800/40'>Sign in</button>
                            <button className='mt-3 text-lg border-2 border-sky-200 px-4 rounded-xl hover:bg-red-800/40'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RewardCard