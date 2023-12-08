import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { IoSettingsOutline } from "react-icons/io5";
import SidebarComponent from "./sidebarcomponent";

export default function SheetSidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <IoSettingsOutline className="xl:hidden absolute top-2 right-2 text-xl text-slate-500" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[300px] p-0 pt-5">
          <SidebarComponent />
        </SheetContent>
      </Sheet>
    </div>
  );
}
