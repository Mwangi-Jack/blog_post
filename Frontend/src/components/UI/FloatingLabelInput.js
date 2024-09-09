import React , { useState } from 'react'


function FloatingLabelInput({ type='text', name, label, handleChange, value}){
    const [ isFocused, setIsFocused ] = useState(false);

    const handleFocus = ()=>{
        setIsFocused(true)
    }

    const handleBlur = ()=> {
        setIsFocused(value === " ")
    }
    return (
        <div className='relative my-4 w-full'>
            <input
                className='w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-600 transition-all duration-200'
                type={type}
                name={name}
                value={value}
                required={true}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e)=>handleChange(e)}
                >
                </input>
                <label
                className={`absolute left-3 px-1 bg-white transition-all duration-200 pointer-events-none
                        ${isFocused || value ? 'text-sm -top-3.5 text-gray-300' : 'top-2 text-gray-400' }`}
                >
                    {label}
                </label>
        </div>
    )
}

export default FloatingLabelInput;
