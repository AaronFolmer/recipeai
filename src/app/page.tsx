'use client'
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
      </section>
    </main>
  );
}
