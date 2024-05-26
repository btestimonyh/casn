const PaymentType = () => {
    return <div className="text-[#6a7690] flex items-center justify-between w-full text-[11px] gap-[12px]">
        <div className="flex items-center gap-[12px]">
            <div className="w-[18px] h-[18px]">
                <img src='/indian-logo.png' alt="logo" className="rounded-[50%] w-full h-full" />
            </div>
            <div>
                <div className="opacity-[.65]">Payment methods for the region</div>
                <div className="font-[700] mt-[-3px]">India (भारत) <span className="font-[500] text-[#2f80ed]/70">Change</span></div>
            </div>
        </div>
        <div className="w-[15px] h-[15px] rounded-[50%] bg-[#a4b1cd] flex items-center justify-center text-white text-[9px]">
            ?
        </div>
    </div>
}

export default PaymentType;