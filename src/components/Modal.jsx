import gsap from "gsap";
import { useEffect } from "react";
import { IoIosWarning } from "react-icons/io";




// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {

    const closeHandler = () => {
        onClose();
    }
    useEffect(() => {
        gsap.fromTo('#modal', { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    }, [])

    return <div className="w-screen h-screen bg-[#000]/50 fixed top-0 left-0 flex items-center justify-center z-10">
        <div id='modal' className="bg-white w-[600px] h-[470px] flex flex-col items-center text-[#a7a6ac] p-8 text-[18px] rounded-xl shadow-xl">
            {/* <img src="./warning.png" width='25%' alt="" /> */}
            <IoIosWarning className="text-red-600/70 text-[800%]" />
            <div className="text-center leading-[30px] text-[18px] mt-[28px] font-[500]">
                Dear user1929390. There was an error in your transaction. The reason: international transfer. You need to pay a security deposit of 5% of your deposit.
            </div>
            <div className="flex text-[#84848a] w-full gap-[5%] mt-14">
                <button className="rounded-[10px] bg-[#ebebf1] w-[47.5%] py-2 text-[16px] font-[500]" onClick={closeHandler}>Close</button>
                {/* <button className="rounded-[36px] bg-[#000] text-[#fff] w-[47.5%] py-4 hover:text-[#9e9e9e]" onClick={closeHandler}>Continue</button> */}
                <button  className={`w-[47.5%] h-[50px] text-[16px] font-[500] shadow-[0_6px_18px_#1178dfb3] rounded-[10px] button-custom text-white`} onClick={closeHandler}>Continue</button>
            </div>
        </div>
    </div>
}

export default Modal;