import SidebarComponent from "./component/sidebarcomponent";

export default function Sidebar() {
  return (
    <section className="chat__sidebar xl:w-[300px] hidden xl:block border border-dashed h-screen">
      <SidebarComponent />
    </section>
  );
}
