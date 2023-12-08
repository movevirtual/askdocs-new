"use client";

import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

export default function UploadUI() {
  return (
    <section className="flex-1 h-screen relative">
      <IoSettingsOutline className="absolute top-2 left-2 text-xl text-slate-500/50" />
    </section>
  );
}
