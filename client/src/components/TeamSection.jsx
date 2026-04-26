import { motion } from "framer-motion";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import omkar from '../assets/omkar.jpg'
import bhairavnath from '../assets/bhairavnath.jpeg'
import digvijay from '../assets/digvijay.jpeg'
import kartik from '../assets/kartik.jpeg'

const teamMembers = [
    {
        name: "Digvijay Kalokhe",
        role: "UI/UX Designer",
        image: digvijay,
        email: "digvijaykalokhe16@gmail.com",
        linkedin: "https://www.linkedin.com/in/digvijay-kalokhe-b975442ab/",
        github: "https://github.com/digvijay160902/",
    },
    {
        name: "Omkar Salunkhe",
        role: "Backend Developer",
        image: omkar,
        email: "omkarsalunkhe1201@gmail.com",
        linkedin: "https://www.linkedin.com/in/omkar-salunkhe-28784b214",
        github: "https://github.com/omkar1201",
    },
    {
        name: "Bhairavnath Bhuse",
        role: "ML Engineer",
        image: bhairavnath,
        email: "bhairavnathbhuse@gmail.com",
        linkedin: "https://www.linkedin.com/in/bhairavnath-bhuse-740266231/",
        github: "https://github.com/Bhairavnath-Bhuse",
    },
    {
        name: "Kartik Dixit",
        role: "ML Engineer",
        image: kartik,
        email: "kartik.dixit@gmail.com",
        linkedin: "https://www.linkedin.com/in/kartik-prasad-dixit-6a627b225/",
        github: "https://github.com/Kartik-Dixit-11",
    },

];

export default function TeamSection() {
    return (
        <section
            className="relative pb-28 px-4 sm:px-10 lg:px-20 overflow-hidden isolate"
            id="team"
        >

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500"
                >
                    The Team Behind the Green Vision
                    <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500 font-normal text-lg md:text-xl">
                        Empowering Farmers Through Smart Plant Care
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-3 cursor-pointer border-2 border-emerald-50 hover:border-emerald-100"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Hover background pattern */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_#05966910_0%,_transparent_70%)]" />

                            <div className="relative z-10 space-y-5">
                                {/* Profile Image */}
                                <div className="relative mx-auto w-32 h-32">
                                    <div className="absolute -inset-2 bg-emerald-100 rounded-full blur-lg opacity-0 transition-opacity duration-300" />
                                    <div className="p-1 rounded-full bg-gradient-to-br from-emerald-50 to-green-50 shadow-inner">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full rounded-full object-cover border-[3px] border-white"
                                        />
                                    </div>
                                </div>

                                {/* Name & Role */}
                                <div className="text-center space-y-2.5">
                                    <h3 className="text-xl font-semibold text-emerald-900 group-hover:text-emerald-800 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-emerald-700/90 font-medium">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Social Links - Always visible but subtle */}
                                <div className="flex justify-center space-x-3">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-2.5 bg-white hover:bg-emerald-50 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiMail className="w-5 h-5 text-emerald-600 hover:text-emerald-800 transition-colors" />
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        className="p-2.5 bg-white hover:bg-emerald-50 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <LuLinkedin className="w-5 h-5 text-emerald-600 hover:text-emerald-800 transition-colors" />
                                    </a>
                                    <a
                                        href={member.github}
                                        className="p-2.5 bg-white hover:bg-emerald-50 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiGithub className="w-5 h-5 text-emerald-600 hover:text-emerald-800 transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}