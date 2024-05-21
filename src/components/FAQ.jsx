import React from 'react'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'

const FAQ = ({ question, answer, isOpen, toggle }) => {
    return (
        <div>
            <button onClick={toggle} className="flex items-center justify-between w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none hover:bg-gray-100 transition-colors">
                <div className="flex items-center">
                    {isOpen ? <FaArrowDown className="mr-2" /> : <FaArrowRight className="mr-2" />}
                    <span className="text-lg font-medium">{question}</span>
                </div>
            </button>
            {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
        </div>
    )
}

export default FAQ