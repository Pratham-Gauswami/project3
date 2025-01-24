import React, { useState } from 'react';
import { 
  Code2, User, Briefcase, FolderGit2, BookOpen, Mail, Github, Linkedin, Twitter, Code, 
  Database, Globe2, Server, Cpu, LayoutGrid, Blocks, Braces, Terminal, GitBranch, 
  MonitorSmartphone, Cloud, Settings,
  X,
  Menu
} from 'lucide-react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = [
    { name: 'Frontend Development', level: 90, icon: <Code className="w-5 h-5" />, color: 'bg-blue-500' },
    { name: 'Backend Development', level: 85, icon: <Server className="w-5 h-5" />, color: 'bg-green-500' },
    { name: 'Database Management', level: 80, icon: <Database className="w-5 h-5" />, color: 'bg-purple-500' },
    { name: 'System Architecture', level: 75, icon: <Cpu className="w-5 h-5" />, color: 'bg-yellow-500' },
    { name: 'Web Technologies', level: 85, icon: <Globe2 className="w-5 h-5" />, color: 'bg-red-500' }
  ];

  const techStack = [
    { name: 'React', icon: <Blocks className="w-8 h-8" />, category: 'Frontend' },
    { name: 'TypeScript', icon: <Braces className="w-8 h-8" />, category: 'Language' },
    { name: 'Node.js', icon: <Terminal className="w-8 h-8" />, category: 'Backend' },
    { name: 'Git', icon: <GitBranch className="w-8 h-8" />, category: 'Version Control' },
    { name: 'Responsive', icon: <MonitorSmartphone className="w-8 h-8" />, category: 'Design' },
    { name: 'Cloud', icon: <Cloud className="w-8 h-8" />, category: 'Infrastructure' },
    { name: 'UI/UX', icon: <LayoutGrid className="w-8 h-8" />, category: 'Design' },
    { name: 'DevOps', icon: <Settings className="w-8 h-8" />, category: 'Operations' }
  ];

  const projects = [
    {
      title: "TeachingAI",
      description: "A smart, role-based platform enhancing learning, teaching, and management.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "PythonChatbot",
      description: "A Chatbot made using OpenAI and Coher API keys, written in Python",
      imageUrl: "https://example.com/image2.jpg",
      link: "#"
    },
    {
      title: "SaveMyJobPostings",
      description: "A Chrome extension to help users save web pages or specific job postings, making it easy to remember and revisit opportunities during a job search. Stay organized and track your job hunt effortlessly!",
      imageUrl: "https://example.com/image3.jpg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
       {/* Navigation Bar */}
       <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-xl">Pratham Gauswami</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="animate-pulse absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="animate-pulse absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Code2 className="w-20 h-20 mx-auto mb-8 text-blue-400" />
          <h1 className="text-6xl font-bold mb-6">Pratham Gauswami</h1>
          <p className="text-2xl text-gray-300 mb-8">Software Engineer & Problem Solver</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <User className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="/src/assets/image2.jpg"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate software engineer with expertise in building scalable web applications.
                With a strong foundation in modern technologies and best practices, I create elegant
                solutions to complex problems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p className="text-gray-300">React, Vue, Angular</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p className="text-gray-300">Node.js, Python, Java</p>
                </div>

                <div className="col-span-2 py-12 bg-gray-800/50">
                  <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {techStack.map((tech, index) => (
                        <div 
                          key={index}
                          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:bg-gray-700 transition-colors group"
                        >
                          <div className="text-blue-400 group-hover:text-blue-300 transition-colors mb-3">
                            {tech.icon}
                          </div>
                          <h4 className="font-medium text-lg mb-1">{tech.name}</h4>
                          <p className="text-sm text-gray-400">{tech.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      {/* <div className="py-12 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:bg-gray-700 transition-colors group"
              >
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors mb-3">
                  {tech.icon}
                </div>
                <h4 className="font-medium text-lg mb-1">{tech.name}</h4>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Work Experience */}
      <section id="work" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Web Desing Intern</h3>
              <p className="text-blue-400 mb-4">XSAL University of Windsor • 2023 May - 2023 September</p>
              <p className="text-gray-300"> - Utilized HTML, CSS, and JavaScript to design visually appealing and user-friendly website layouts.</p>
              <p className="text-gray-300"> - Employed Notion as a project management tool to enhance communication, monitor updates, and foster seamless collaborative teamwork within the organization.</p>
              <p className="text-gray-300"> - Contributed to the development of engaging web interfaces, ensuring a positive user experience for visitors to the Wine and Spirits Lab website.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Software Engineer Intern</h3>
              <p className="text-blue-400 mb-4">Tempus Central • 2024 May - 2024 August</p>
              <p className="text-gray-300"> - Created an Asset Management System using C# and .NET, enabling 60 users to track, manage, and monitor the status of 20+ assets efficiently in a secure and structured environment.</p>
              <p className="text-gray-300"> - Developed advanced reporting functionalities, allowing users to generate PDF and Excel exports, which streamlined the reporting process, reducing asset reporting time by 30%.</p>
              <p className="text-gray-300"> - Integrated Microsoft SQL Server for secure data storage and efficient management of the asset database, ensuring the integrity and reliability of asset information.</p>
              <p className="text-gray-300"> - Used HTML and AJAX to create a dynamic user interface that enabled real-time server communication, improving user interaction by ensuring data was updated instantly without full-page reloads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <FolderGit2 className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group">
                View Project 
                <span className="ml-2 transform translate-x-0 transition-transform group-hover:translate-x-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Blog</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Artificial Intelligence: Navigating the Rewards and Risks</h3>
              <p className="text-gray-300 mb-4">Artificial Intelligence (AI) refers to the simulation of human intelligence...</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-400">Jan 20, 2025</span>
                <a href="https://medium.com/@learning.pg2612/artificial-intelligence-navigating-the-rewards-and-risks-7c54dfba5d95" className="text-blue-400 hover:underline">Read More →</a>
              </div>
            </article>
            <article className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">The Future of AI in Software Development</h3>
              <p className="text-gray-300 mb-4">Exploring how AI is transforming the software industry...</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-400">March 1, 2024</span>
                <a href="#" className="text-blue-400 hover:underline">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Mail className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Contact</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Pratham Gauswami. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;