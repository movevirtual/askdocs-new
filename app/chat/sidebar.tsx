import ProfileComponent from "./component/profilecomponent";
import UploadButton from "./component/uploadbutton";
import DocList from "./component/doclist";
import CreditComponent from "./component/creditcomponent";
import SidebarComponent from "./component/sidebarcomponent";

export default function Sidebar() {
  return (
    <section className="chat__sidebar w-[300px] hidden xl:block border border-dashed h-screen">
      <SidebarComponent />
    </section>
  );
}
