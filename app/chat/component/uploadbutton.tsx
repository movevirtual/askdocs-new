import { FaPlus } from "react-icons/fa6";
import { MdLink } from "react-icons/md";

export default function UploadButton() {
  return (
    <div className="upload__button__component flex items-center justify-center gap-x-4 py-5">
      <div className="bg-[#F5F5F5] w-full p-4 rounded-md flex flex-col items-center justify-center gap-y-2">
        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#40CD77] text-white">
          <FaPlus className="text-base" />
        </div>
        <p className="text-sm font-semibold">Add PDF</p>
      </div>
      <div className="bg-[#F5F5F5] w-full p-4 rounded-md flex flex-col items-center justify-center gap-y-2">
        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#40CD77] text-white">
          <MdLink className="text-base" />
        </div>
        <p className="text-sm font-semibold">Youtube Link</p>
      </div>
    </div>
  );
}
