import React , { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


function FloatingLabelInput({ type='text', name, label, handleChange, value}){
    const [ isFocused, setIsFocused ] = useState(false);
    const [ showPasswd, setShowPasswd ] = useState({
        'password': false,
        'cpassword': false
    })

    const handleFocus = ()=>{
        setIsFocused(true)
    }

    const handleBlur = ()=> {
        setIsFocused(value === " ")
    }

    const handlePasswordToggle = (name) => {
        setShowPasswd({...showPasswd, [name]: !showPasswd[name]});
    }

    return (
        <div className='relative my-4 w-full cursor-pointer'>
            <div onClick={()=> handlePasswordToggle(name)} className='absolute right-4 top-2 '>
                { type === 'password' ? showPasswd[name] ? <IoIosEye size={25} /> : <IoIosEyeOff size={25} /> : null}
            </div>
            <input
                className='w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-600 transition-all duration-200'
                type={ name === 'password' || name === 'cpassword' ? showPasswd[name] ? 'text' : 'password' : type }
                name={name}
                value={value}
                required
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
