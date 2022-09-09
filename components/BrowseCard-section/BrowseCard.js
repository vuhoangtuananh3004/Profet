import React from 'react'

function BrowseCard(props) {
    const getList = props.list;
    return (
        <div className='flex flex-col w-2/3 mx-auto text-slate-200/30 text-sky-300'>
        <span className='text-[30px] tracking-wider border-t-2 p-4'>{getList.header}</span>
        <div className='flex justify-center'>
            {
                getList.title.map((v,i)=>
                <div class="max-w-sm rounded overflow-hidden shadow-lg p-5 hover:scale-125">
                <img class="w-[300px] h-[200px] border border-slate-300 rounded-lg" src={getList.img[i]} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-1 text-center">{v}</div>
                    <p class="text-gray-400 text-base text-center">
                        {getList.description}
                    </p>
                </div>
            </div>
                )
            }
        </div>
        </div>

    )
}

export default BrowseCard