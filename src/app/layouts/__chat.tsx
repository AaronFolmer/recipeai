import { Clipboard } from "lucide-react";
import { useCompletion } from "ai/react";
import { Send, PauseCircle } from "lucide-react";
import { useState } from "react";

export function Chat() {
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
  const [userText, setUserText] = useState("");

  // Função para atualizar o estado quando o usuário submeter o formulário
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Atualize o estado com o texto digitado pelo usuário
    setUserText(input);
    handleSubmit(e);
  };
  return (
    <main>
      <section>
        <div className="bg-[#FFFBF2] h-auto w-fit py-4 px-3 rounded-r-2xl rounded-t-2xl">
          {/* User Text */}
          <p id="displayText">{userText}</p>
          {/* User Text Ends Here */}
        </div>
        <div className="bg-white my-5 overflow-y-scroll h-auto max-h-52 w-fit py-4 px-3 rounded-r-2xl rounded-t-2xl">
          {/* AI Text */}
          <p id="ai-text">{completion}</p>
          {/* AI Text Ends Here */}
          <div>
            <hr className="h-[0.9px] my-3 bg-[#E9E4D1] border-none" />
            <Clipboard color="black" size={20} />
          </div>
        </div>
        <section className="bottom-0 fixed px-12 py-12">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              handleFormSubmit(e);
            }}
            id="form"
            className="flex flex-wrap gap-1"
          >
            <button
              onClick={stop}
              className="bg-black text-[#A6A39D] px-4 rounded-2xl"
            >
              <PauseCircle color="#E9E4D1" strokeWidth={2.2} size={20} />
            </button>
            <input
              type="text"
              id="input-user"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask anything..."
              className="p-3 rounded-2xl font-regular border-[#E9E4D1] border-2 w-[55%]"
            />
            <button
              disabled={isLoading}
              className="bg-black text-[#A6A39D] px-4 rounded-2xl"
            >
              <Send color="#E9E4D1" strokeWidth={2.2} size={20} />
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
