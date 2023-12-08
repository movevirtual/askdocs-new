import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dropdownMenuItems = [
  {
    id: 1,
    name: "Billing",
    icon: <LuWallet />,
    link: "#",
  },
  {
    id: 2,
    name: "Support",
    icon: <FiHelpCircle />,
    link: "#",
  },
  {
    id: 3,
    name: "Sign Out",
    icon: <TbLogout />,
    link: "#",
  },
];

export default function ProfileComponent() {
  return (
    <div className="name__component flex items-center justify-between">
      <div className="account__details select-none flex items-center gap-x-3">
        <DropdownMenu>
          <div className="account__details flex items-center gap-x-5">
            <DropdownMenuTrigger className="outline-none focus:ring-2 ring-offset-2 rounded-full">
              <img
                className="rounded-full w-10 h-10 object-cover ring ring-offset-2 ring-[#40CD77]"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </DropdownMenuTrigger>
            <div className="flex items-center gap-x-5">
              <div>
                <div className="flex flex-col gap-y-0.5">
                  <p className="text-sm font-bold ">Amy Elimam</p>
                  <p className="text-xs text-slate-700/50 font-semibold">
                    contact@baked.design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DropdownMenuContent className="min-w-[260px] mb-3 ml-5">
            {dropdownMenuItems.map((item, index, array) => (
              <div key={item.id}>
                <DropdownMenuItem className="cursor-pointer">
                  <a href={item.link}>
                    <div className="flex items-center gap-x-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500">
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </a>
                </DropdownMenuItem>
                {index === array.length - 2 && <DropdownMenuSeparator />}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="setting__menu">
        <IoSettingsOutline className="text-xl text-slate-500/50" />
      </div>
    </div>
  );
}
