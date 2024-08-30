import React from 'react'
import lang from '../untils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const language = useSelector(store => store.config.lang);
    console.log(language);
    return (
        <div className='pt-[7%] w-[70%] mx-auto '>
            <form className='  bg-gradient-to-b rounded-full from-red-700 p-5 grid grid-cols-12'>
                <input className='col-span-9 rounded-xl px-20' type='text' placeholder={lang[language].gptSearchPlaceholder} />
                <button className='bg-purple-500 col-span-3 mx-4 px-4 py-2 text-white rounded-xl'>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar