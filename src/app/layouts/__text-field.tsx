"use client";

import { useCompletion } from "ai/react";
import { Send, PauseCircle } from "lucide-react";

export function TextField() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: "/api/completion",
  });
  return (
    <main>
      <section>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-1">
          <button className="bg-black text-[#A6A39D] px-4 rounded-2xl">
            <PauseCircle color="#E9E4D1" strokeWidth={2.2} size={20} />
          </button>
          <input
            type="text"
            placeholder="Ask anything..."
            className="p-3 rounded-2xl font-regular border-[#E9E4D1] border-2 w-[55%]"
          />
          <button className="bg-black text-[#A6A39D] px-4 rounded-2xl">
            <Send color="#E9E4D1" strokeWidth={2.2} size={20}/>
          </button>
        </form>
      </section>
    </main>
  );
}
