"use client";

import React, { useState } from "react";
import SheetSidebar from "./component/sheetsidebar";
import { SheetClose } from "@/components/ui/sheet";
import { IoSettingsOutline } from "react-icons/io5";

export default function UploadUI() {
  return (
    <section className="flex-1 h-screen relative">
      <SheetSidebar />
    </section>
  );
}
