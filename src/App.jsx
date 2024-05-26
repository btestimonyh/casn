import PaymentMenu from "./components/PaymentMenu"
import PaymentType from "./components/PaymentType"
import Title from "./components/Title"
import Form from "./components/Form";
import Modal from "./components/Modal";
import { useState } from "react";


function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="w-screen h-screen" id='background'>
      </div>
      {modal && <Modal onClose={() => setModal(false)} />}

      <div className="fixed left-0 top-0 h-screen w-screen bg-[rgba(9,15,30,.98)] flex items-center justify-center py-[134px]">
        <div className="bg-white w-[682px] h-full rounded-[16px] flex">
          <div className="w-[290px] bg-[#edf0f7] rounded-l-[16px] p-[20px]">
            <PaymentType />
            <PaymentMenu />
          </div>
          <div className="h-full p-[20px] w-[390px] flex flex-col justify-between">
            <div className="w-full">
              <Title />
              <div className="text-[rgb(7,12,25)] text-[12px] mt-[10px]">
                <p>One withdrawal limits:</p>
                <p className="mt-[-3px]">1000 INR - 100 000 INR</p>
              </div>
              <Form onOpen={() => setModal(true)}/>
            </div>
            <div className="text-[10px] text-[#6A7690A6]">
              <p>© 2024 1WIN</p>
              <p className="mt-[-2px]">All rights reserved and protected by law.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
