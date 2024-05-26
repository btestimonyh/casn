
const CardType = ({ icon, children, id }) => {
    return <div id={id} className="cursor-pointer w-full text-[12px] text-[#090f1e] shadow-[0_4px_10px_-5px_#0000001a] bg-white rounded-[10px] p-[10px] font-[500] gap-[7px] flex flex-col justify-between">
        <div>
            <img src={icon} alt="" />
        </div>
        <div className="leading-[14px]">
            {children}
        </div>
    </div>
}

export default CardType;