import { FaPlus } from "react-icons/fa6";
import { MdLink } from "react-icons/md";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import ProfileComponent from "./component/profilecomponent";
import UploadButton from "./component/uploadbutton";
import DocList from "./component/doclist";
import CreditComponent from "./component/creditcomponent";

export default function Sidebar() {
  return (
    <section className="chat__sidebar w-[300px] border border-dashed h-screen">
      <div className="sidebar__component p-5 flex flex-col justify-between h-full">
        <div className="sidebar__upper--component">
          <ProfileComponent />
          <UploadButton />
          <DocList />
        </div>
        <div className="sidebar__lower__component">
          <CreditComponent />
        </div>
      </div>
    </section>
  );
}
