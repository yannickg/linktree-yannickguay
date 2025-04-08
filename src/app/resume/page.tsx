'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <motion.div
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <h1 className="text-2xl md:text-3xl font-bold">Yannick Guay - Resume</h1>
          <Link 
            href="/"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            Back to Links
          </Link>
        </motion.div>
      </header>

      <motion.main
        className="prose prose-invert max-w-none"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-[var(--card-bg)] p-6 rounded-lg">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Yannick Guay</h1>
            <p className="text-zinc-400">Gatineau, QC</p>
          </div>
          
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-[var(--accent)]">Software Architect and Development Professional</h2>
            <p className="mb-4">
              Supporting organizations in the development, evolution, and maintenance of critical software systems while adhering to industry best practices.
            </p>
            <p>
              Experienced professional with over 20 years of technical expertise, I specialize in developing and managing high-performing, secure software solutions. Adept at collaborating with internal and external teams, I ensure application availability, performance, and compliance while minimizing disruptions. Passionate about continuous learning and innovation, I adapt to business needs and deliver creative, effective solutions.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-[var(--accent)]">Core Competencies</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Software Development: .NET, C#, Python, Java, C++</li>
              <li>Code Management: Git, GitLab, deployment processes</li>
              <li>Methodologies: Agile (Scrum Master), SDLC</li>
              <li>Technologies: Cloud (AWS), VoIP, microservices</li>
              <li>Soft Skills: Client focus, autonomy, problem-solving, communication, leadership</li>
            </ul>
          </section>
          
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-[var(--accent)]">Professional Experience</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Principal Software Engineer</h3>
              <p className="text-zinc-400">Motorola Solutions Inc. • Gatineau, QC • 10/2020 - Present</p>
              <p className="my-2">Responsible for developing and evolving critical software systems using Agile practices. Lead a team of six engineers, manage code via Git, and optimize deployments with Kubernetes.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Led projects using Agile methodology as Scrum Master, ensuring performance and quality of deliverables.</li>
                <li>Developed Java microservices (Spring Boot, Quarkus) and contributed to scalable, secure solutions.</li>
                <li>Collaborated with stakeholders to align technical solutions with business needs.</li>
                <li>Mitigated risks by designing rigorous test plans and contingency strategies.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Cloud Telephony Specialist Consultant</h3>
              <p className="text-zinc-400">Le Nordik Spa-Nature • Chelsea, QC • 3/2018 - 10/2020</p>
              <p className="my-2">Oversaw the overhaul of a cloud telephony system (AWS), including development, deployment, and maintenance.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Designed and implemented a distributed solution with Python and Bash scripts to automate updates.</li>
                <li>Ensured operational continuity through meticulous planning and thorough testing.</li>
                <li>Resolved complex issues via in-depth analysis, enhancing client satisfaction.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Software Designer</h3>
              <p className="text-zinc-400">Motorola Solutions (formerly Avtec) • Lexington, SC • 5/2018 - 12/2019</p>
              <p className="my-2">Developed and integrated features for an emergency call handling platform (Scout Software Suite).</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Utilized Git for code management and collaborated with external developers on integrations.</li>
                <li>Documented acceptance and unit test plans, ensuring system reliability.</li>
                <li>Addressed network issues through log and UDP packet analysis.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Software Designer</h3>
              <p className="text-zinc-400">Motorola Solutions (formerly Airbus DS Communications) • Gatineau, QC • 2/2017 - 1/2018</p>
              <p className="my-2">Contributed to the development of the Vesta Software Suite for emergency call management.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed in C++ and Erlang, managing code with collaborative tools.</li>
                <li>Fixed critical bugs through detailed log and SIP protocol analysis.</li>
                <li>Mentored junior developers, fostering teamwork and learning.</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-[var(--accent)]">Education</h2>
            <div>
              <h3 className="text-lg font-semibold">Diploma of College Studies - Computer Science</h3>
              <p className="text-zinc-400">College of Victoriaville • Victoriaville, QC, Canada</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-[var(--accent)]">Technical Proficiencies</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Languages: .NET, C#, Python, Java, C++, Bash</li>
              <li>Tools: Git, GitLab, AWS (EC2, Lambda, ECS), Visual Studio</li>
              <li>Protocols: SIP, HTTP, TCP/UDP</li>
              <li>Platforms: Linux, Windows, AWS Cloud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[var(--accent)]">Certifications and Professional Development</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Sales Professional Certification</li>
              <li>Exploration of technology trends through personal projects (AI, full stack development, React.js, vibe coding)</li>
            </ul>
          </section>
        </div>
      </motion.main>

      <motion.footer 
        className="mt-12 text-center text-zinc-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        © {new Date().getFullYear()} Yannick Guay
      </motion.footer>
    </motion.div>
  );
} 