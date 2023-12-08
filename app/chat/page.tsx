import Sidebar from "./sidebar";
import UploadUI from "./uploadui";

export default function ChatUI() {
  return (
    <section>
      <div className="flex items-center">
        <Sidebar />
        <UploadUI />
      </div>
    </section>
  );
}
