import { useRef } from "react";
import { useState } from "react";

const Form = ({onOpen}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const cardInput = useRef(null);
    const [placeholder1, setPlaceholder1] = useState('0,00');
    const [placeholder2, setPlaceholder2] = useState('Back card number');
    const [hideCursor1, setHideCursor1] = useState(false);
    const [hideCursor2, setHideCursor2] = useState(false);

    const changeHandler = () => {
        if (cardInput.current.value.length == 16) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }

    const handleFocus = () => {
        setTimeout(() => {
            setPlaceholder1('');
            setHideCursor1(true);
            setIsFocused(true)
        }, 100); // Delay of 500ms
    };

    const handleBlur = () => {
        // setPlaceholder1('0,00');
        // setHideCursor1(false);
        // setIsFocused(false)
    };

    const handleFocus2 = () => {
        setTimeout(() => {
            setPlaceholder2('');
            setHideCursor2(true);
            setIsFocused3(true);
        }, 100); // Delay of 500ms
    };

    const handleBlur2 = () => {
        setActiveButton(true)
        // setPlaceholder2('Bank card number');
        // setHideCursor2(false);
        // setIsFocused3(false)
    };

    return <div className="w-full mt-4">
        {/* First INPUT */}
        <div className={`rounded-[12px] ${isFocused ? 'border-[1px] border-[#004cff] shadow-[0_0_0_3.5px_rgba(32,95,236,.25)]' : 'border-[1px] border-[#d8d8d8]'} py-[5px] px-[12px] flex items-center justify-between w-full`}>
            <div className="px-[8px] pt-[4px]">
                <input onFocus={handleFocus} onBlur={handleBlur} placeholder={placeholder1} min={1000} max={100000} className={`mb-[5px] text-black ${hideCursor1 ? 'hide-cursor' : ''}`} type="text" />
            </div>
            <div className="bg-[#F7F7F7] py-[10px] px-[16px] rounded-[8px] flex items-center cursor-pointer h-[36px] min-w-[132.36px]">
                <img src='/indian-logo.png' alt="" className="w-[24px] h-[24px] " />
                <h1 className="text-[18px] px-[8px] text-black">INR</h1>
                <img src='/drop-down.png' alt="" className="w-[10px] h-[6px]" />
            </div>
        </div>
        {/* Second INPUT */}
        <div className={`rounded-[12px] mt-[16px] ${isFocused3 ? 'border-[1px] border-[#004cff] shadow-[0_0_0_3.5px_rgba(32,95,236,.25)]' : 'border-[1px] border-[#d8d8d8]'} py-[5px] px-[12px] flex items-center justify-between w-full`}>
            <div className="px-[8px] pt-[4px]">
                <input onFocus={handleFocus2} onBlur={handleBlur2} ref={cardInput} onChange={changeHandler} maxLength={16} placeholder={placeholder2} className={`mb-[5px] text-black ${hideCursor2 ? 'hide-cursor' : ''}`} type="text"/>
            </div>

        </div>
        {/* BUTTOn */}

        <button onClick={onOpen} disabled={!activeButton} className={`mt-8 w-full h-[50px] text-[16px] font-[500] shadow-[0_6px_18px_#1178dfb3] rounded-[10px] button-custom ${activeButton ? 'opacity-[1]' : 'opacity-[.5]'}`}>Withdraw</button>

        <div className="text-[#086ddc] text-[13px] font-[600] mt-8 hover:text-[#5e97ff] cursor-pointer">
            Detail
        </div>
    </div>
}

export default Form;