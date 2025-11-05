import { BookOpen, Gamepad2, Brain } from "lucide-react";

export default function Features() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-center mb-12">
                    <span className="text-[#007bff]">Fun Learning</span>, <span className="text-[#ffc107]">Smart Future</span>
                </h2>

                {/* Cards Grid */}
                <div className="grid gap-8 md:grid-cols-3">

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
                        <div className="flex justify-center mb-4">
                            <BookOpen className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fun Learning</h3>
                        <p className="text-gray-600">
                            Kids enjoy learning with interactive lessons and exciting challenges.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
                        <div className="flex justify-center mb-4">
                            <Gamepad2 className="w-12 h-12 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Gamified Experience</h3>
                        <p className="text-gray-600">
                            Unlock levels, earn rewards, and make learning feel like a game.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition">
                        <div className="flex justify-center mb-4">
                            <Brain className="w-12 h-12 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Smart Growth</h3>
                        <p className="text-gray-600">
                            Develop creativity, logic, and problem-solving skills step by step.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}