import { FaPlus } from "react-icons/fa6";
import { MdLink } from "react-icons/md";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

const documentList = [
  {
    id: 1,
    title: "Design research",
  },
  {
    id: 2,
    title: "Pitch_desk_2023",
  },
  {
    id: 3,
    title: "Design research",
  },
];

export default function DocList() {
  return (
    <div className="document__list__component">
      <div className="heading__component flex items-center justify-between">
        <h1 className="text-base font-medium text-slate-700/50">Documents</h1>
        <MdOutlineDriveFolderUpload className="text-xl text-slate-500/50" />
      </div>
      <div className="document__list__item">
        <div className="flex flex-col gap-y-5 items-start gap-x-4 py-4">
          {documentList.map((item) => (
            <div key={item.id} className="flex items-center gap-x-2">
              <FiFileText className="text-base text-slate-700/70" />
              <p className="text-base text-slate-800 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
