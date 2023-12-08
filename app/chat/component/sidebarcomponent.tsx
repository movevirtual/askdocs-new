import ProfileComponent from "./profilecomponent";
import UploadButton from "./uploadbutton";
import DocList from "./doclist";
import CreditComponent from "./creditcomponent";

export default function SidebarComponent() {
  return (
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
  );
}
