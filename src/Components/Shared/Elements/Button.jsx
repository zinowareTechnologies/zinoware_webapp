// Button.js

const Button = () => {
  return (
    <button
      className="
        relative px-10 py-4 rounded-lg font-bold text-lg text-dark shadow-xl
        bg-white
        backdrop-blur-xl
        border border-white/30
        overflow-hidden
        transition-all duration-200
        hover:scale-105 hover:shadow-2xl
        active:scale-95
        hover:bg-white/30
        focus:outline-none focus:ring-4 focus:ring-[#ffa02f]/70
        group
      "
      style={{ WebkitBackdropFilter: 'blur(20px)', backdropFilter: 'blur(20px)' }}
    >
      <span className="relative z-10">New Design</span>
      {/* Animated Glow Outline */}
      <span
        aria-hidden="true"
        className="
          absolute inset-[-4px] rounded-2xl pointer-events-none
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          before:content-[''] before:absolute before:inset-0 before:rounded-2xl 
          before:bg-gradient-to-r 
          before:from-[#16c3e7]
          before:via-[#ffa02f]
          before:to-[#ffdb73]
          before:animate-glowing
          before:blur-lg
        "
      />
      {/* Frosted Glass Inner Shine */}
      <span
        aria-hidden="true"
        className="
          absolute top-0 left-1/4 w-1/2 h-1/3 rounded-xl bg-white/30 blur-lg opacity-70
        "
      />
      {/* Keyframes for glowing animation */}
      <style>
        {`
          @keyframes glowing {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-glowing {
            background-size: 200% 200% !important;
            animation: glowing 2.5s linear infinite !important;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
