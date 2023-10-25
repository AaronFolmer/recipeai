import { Clipboard } from "lucide-react";

export function Chat() {
  return (
    <main>
      <section>
        <div className="bg-[#FFFBF2] h-auto w-fit py-4 px-3 rounded-r-2xl rounded-t-2xl">
          {/* User Text */}
          <p>How are you?</p>
          {/* User Text Ends Here */}
        </div>
        <div className="bg-white my-5 h-auto w-fit py-4 px-3 rounded-r-2xl rounded-t-2xl">
          {/* AI Text */}
          <p id="ai-text">
            As an AI language model, I dont have feelings or emotions like
            humans do, so Im not capable o feeling sad or any other emotion. Im
            designed to assist and provide information to users to the best of
            my ability. How can I asssist you today?
          </p>
          {/* AI Text Ends Here */}
          <hr className="h-[0.9px] my-3 bg-[#E9E4D1] border-none" />
          <Clipboard color="black" size={20} />
        </div>
      </section>
    </main>
  );
}
