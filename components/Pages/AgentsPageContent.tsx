"use client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Agents | LuxHomes",
  description: "Get to know our team of luxury real estate professionals who bring expertise, trust, and excellence to every transaction.",
};


const agents = [
  {
    name: "Isabella Adeyemi",
    role: "Senior Property Advisor",
    image: "/images/agent-isabella.jpg",
    bio: "15+ years connecting elite clients with exclusive properties. A calm negotiator with a sharp eye for detail."
  },
  {
    name: "Derek Omotayo",
    role: "Luxury Sales Specialist",
    image: "/images/agent-derek.jpg",
    bio: "Driven by results. Derek blends charisma, data, and diplomacy to secure the best outcomes for clients."
  },
  {
    name: "Alma Cheng",
    role: "Relocation Expert",
    image: "/images/agent-alma.jpg",
    bio: "Specializes in international buyers and digital closings. Alma delivers clarity to clients across borders."
  },
];

export default function AgentsPage() {
  return (
    <main className="bg-background px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-heading text-base mb-12">Meet Our Agents</h1>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {agents.map((agent, i) => (
            <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-muted/10 flex items-center justify-center">
                <span>{agent.image}</span> {/* Replace with <img /> if needed */}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-base mb-1">{agent.name}</h3>
                <p className="text-muted text-sm mb-2">{agent.role}</p>
                <p className="text-muted text-sm">{agent.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
