import { IoSettingsOutline } from "react-icons/io5";

export default function ProfileComponent() {
  return (
    <div className="name__component flex items-center justify-between">
      <div className="flex items-center gap-x-5">
        <div>
          <img
            className="rounded-full w-12 h-12 object-cover"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <div className="flex flex-col gap-y-0.5">
            <p className="text-sm font-bold ">Amy Elimam</p>
            <p className="text-xs text-slate-700/50 font-semibold">
              contact@baked.design
            </p>
          </div>
        </div>
      </div>
      <div className="setting__menu">
        <IoSettingsOutline className="text-xl text-slate-500/50" />
      </div>
    </div>
  );
}
