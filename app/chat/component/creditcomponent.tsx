import { MdLink } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineGeneratingTokens } from "react-icons/md";

export default function CreditComponent() {
  return (
    <div className="credit__component">
      <div className="flex items-center justify-between pb-5">
        <p className="text-[15px] text-slate-700/50 font-semibold">Credits</p>
        <MdOutlineGeneratingTokens className="text-xl text-slate-500/50" />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-2 justify-between">
          <div className="w-10">
            <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#E8E8E8] text-black">
              <FiFileText className="text-base" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-medium">Documents</p>
              <p className="text-sm font-medium">18/60</p>
            </div>
            <div className="ranger">
              <div className="ranger__bar w-full h-1.5 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2 justify-between">
          <div className="w-10">
            <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#E8E8E8] text-black">
              <BsChatDots className="text-base" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-medium">Questions</p>
              <p className="text-sm font-medium">18/60</p>
            </div>
            <div className="ranger">
              <div className="ranger__bar w-full h-1.5 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2 justify-between">
          <div className="w-10">
            <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#E8E8E8] text-black">
              <MdLink className="text-base" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">Youtube Links</p>
              <p className="text-sm font-medium">18/60</p>
            </div>
            <div className="ranger">
              <div className="ranger__bar w-full h-1.5 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
