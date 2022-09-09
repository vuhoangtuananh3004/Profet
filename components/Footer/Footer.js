import React from 'react'


function Footer() {
  return (
    
<footer class="w-full mt-20 rounded-lg shadow md:px-6 md:py-8 bg-gradient-to-r from-indigo-800/10 to-indigo-900/70">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black font-Sacramento text-white tracking-widest">PropheT</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-lg sm:mb-0 text-white tracking-wider">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span class="block text-sm text-gray-500 sm:text-center  text-white tracking-wider">© 2022 <a href="/" class="hover:underline">Team PropheT™</a>. All Rights Reserved.
    </span>
</footer>

  )
}

export default Footer