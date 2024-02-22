import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";
import SetapartBox from "../../components/SetapartBox";

function WhatSet() {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center pt-10">
      <div className="w-full flex justify-start items-center pl-10 relative pb-4">
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">05</span> What Sets Us Apart
        </div>
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">05</span> What Sets Us Apart
        </div>
      </div>
      <div className="bg-[#fdfde1]">
        <img src={Sep1} alt="" className="w-[100vw] h-20" />
      </div>
      <div className="w-full h-auto py-3 bg-[#5ACEA1] flex justify-center items-center flex-col gap-3 px-8">
        <SetapartBox />
      </div>
      <div className="">
        <img src={Sep2} alt="" className="w-[100vw] h-24" />
      </div>
    </div>
  )
}

export default WhatSet