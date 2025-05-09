import { motion } from "framer-motion";

export default function Contact() {
  const contactLinks = [
    {
      href: "https://linkedin.com/in/diamant3",
      color: "[#0077b5]",
      label: "LinkedIn",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>,
    },
    {
      href: "https://github.com/diamant3",
      color: "[#333]",
      label: "GitHub",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    },
    {
      href: "https://x.com/me_diamant3",
      color: "[#1da1f2]",
      label: "X (Twitter)",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>,
    },
    {
      href: "mailto:diamant3@proton.me",
      color: "violet-600",
      label: "Email",
      icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor"><path d="M18,19H6a4,4,0,0,1-4-4V7A4,4,0,0,1,6,3H18a4,4,0,0,1,4,4v8A4,4,0,0,1,18,19ZM6,5A2,2,0,0,0,4,7v8a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2Z"/><path d="M12,14.08a.86.86,0,0,1-.32-.05L2.68,11a1,1,0,1,1,.64-1.9L12,12l8.68-2.81A1,1,0,0,1,22,9.86a1,1,0,0,1-.64,1.26l-9,2.91A.84.84,0,0,1,12,14.08Z"/></svg>,
    },
  ];

  return (
    <div className="w-full min-h-[120vh] flex flex-col items-center justify-center text-center px-6">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-4"
      >
        Contact
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="block h-1 bg-blue-500 mx-auto mt-2 rounded-full"
        />
      </motion.h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
        Whether you have a question or just want to say hi,  
        Feel free to connect with me on social media or drop me an email. 
      </p>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {contactLinks.map(({href, color, label, icon}) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`bg-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${color === "[#0077b5]" ? "hover:bg-[#0077b5]" : ""} ${color === "[#333]" ? "hover:bg-[#333]" : ""} ${color === "[#1da1f2]" ? "hover:bg-[#1da1f2]" : ""} ${color === "violet-600" ? "hover:bg-violet-600" : ""}`}
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

