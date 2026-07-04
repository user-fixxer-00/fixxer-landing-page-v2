const MESSAGES = [
  {
    from: "user",
    text: "Hi Fixxer! My geyser is leaking in Randburg 😩",
    time: "08:12",
  },
  {
    from: "fixxer",
    text: "Sorry to hear that! We've got 3 vetted plumbers near you. Here's Sipho — 4.9★, 212 jobs completed. Want a quote?",
    time: "08:13",
  },
  { from: "user", text: "Yes please 🙏", time: "08:14" },
  {
    from: "fixxer",
    text: "Done ✅ Sipho can be there at 10:00 today. You only pay through Fixxer once the job is finished.",
    time: "08:15",
  },
] as const;

export default function PhoneMockup() {
  return (
    <div
      className="mx-auto w-full max-w-[340px] rounded-[40px] border border-white/10 bg-black p-3 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-[30px] bg-[#0B141A]">
        {/* Chat header */}
        <div className="flex items-center gap-3 bg-[#1F2C34] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-fixxer-orange text-sm font-extrabold text-white">
            f
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Fixxer</p>
            <p className="text-xs text-whatsapp-green">online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-2.5 px-3 py-4">
          {MESSAGES.map((message, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-snug ${
                message.from === "user"
                  ? "self-end rounded-br-sm bg-[#005C4B] text-white"
                  : "self-start rounded-bl-sm bg-[#1F2C34] text-white/90"
              }`}
            >
              {message.text}
              <span className="ml-2 align-bottom text-[10px] text-white/40">
                {message.time}
              </span>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 px-3 pb-4">
          <div className="flex-1 rounded-full bg-[#1F2C34] px-4 py-2.5 text-[13px] text-white/35">
            Type a message
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp-green">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-5 w-5 fill-white"
              aria-hidden="true"
            >
              <path d="M3.4 20.4l17.45-7.48a1 1 0 000-1.84L3.4 3.6a.993.993 0 00-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
