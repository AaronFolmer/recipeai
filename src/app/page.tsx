import { TextField } from "@/app/layouts/__text-field";
import { Chat } from "@/app/layouts/__chat";

export default function Home() {
  return (
    <main>
      <section>
        <div className="py-5">
          {/* Chat Section */}
          <Chat />
          {/* Chat Section Ends */}
        </div>
        <div className="bottom-0 fixed py-12 px-4">
          {/* TextField Section*/}
          <TextField />
          {/* TextField Section Ends */}
        </div>
      </section>
    </main>
  );
}
