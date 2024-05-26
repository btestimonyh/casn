import CardType from "./CardType";

const PaymentMenu = () => {
    return <div className="grid grid-cols-2 gap-[10px] mt-[25px]">
        <CardType icon='/payment.png' id='active-card'>Payment</CardType>
        <CardType icon='/fk-wallet.png'>FK Wallet</CardType>
        <CardType icon='/perfect-money.png'>Perfect Money</CardType>
        <CardType icon='/web-money.png'>Webmoney</CardType>
        <CardType icon='/yo-money.png'>YooMoney</CardType>
        <CardType icon='/cryptocurrency.png'>Cryptocurrency</CardType>
        <CardType icon='/bank-card.png'>Bank card</CardType>
        <CardType icon='/steam.png'>Withdrawal to Steam account</CardType>
    </div>
}

export default PaymentMenu;