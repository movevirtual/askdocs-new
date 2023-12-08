import SheetSidebar from "./component/sheetsidebar";
import { Button } from "@/components/ui/button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaFileAlt, FaYoutube } from "react-icons/fa";
import { MdLink } from "react-icons/md";

export default function UploadUI() {
  return (
    <section className="flex-1 h-screen relative">
      <SheetSidebar />
      <div className="flex items-center justify-center h-full p-10">
        <div className="p-10 md:p-0 border-2 w-full h-fit md:h-full flex items-center justify-center border-dashed border-[#63656A]/20 bg-[#FAFAFA] rounded-lg">
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <div className="flex flex-col gap-y-1 items-center justify-center">
              <AiOutlineCloudUpload className="text-4xl text-slate-700" />
              <div className="flex flex-col gap-y-0.5 items-center justify-center">
                <p className="text-lg font-semibold">Upload a PDF</p>
                <p className="text-sm font-medium text-slate-700/50">
                  Select a file to continue
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <Button className="bg-[#40CD77] hover:bg-green-500 flex items-center gap-x-2">
                <FaFileAlt className="text-lg text-white" />
                Select the file
              </Button>
              <Button
                value="default"
                className="bg-[#f5f5f5] hover:bg-[#e6e6e6] text-black border border-slate-300/30 flex items-center gap-x-2"
              >
                <FaYoutube className="text-lg text-slate-700/50" />
                Add youtube link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
