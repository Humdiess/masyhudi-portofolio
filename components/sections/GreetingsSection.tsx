import TextReveal from "../magicui/text-reveal";
export default function GreetingsSection() {
    return (
        <div className="greetings h-screen">
            <TextReveal
                className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 drop-shadow-[0_0_25px_rgba(100,255,255,0.9)]"
                text="Hello, I'm Masyhudi"
            />
        </div>
    );
}