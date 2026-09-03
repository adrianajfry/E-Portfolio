import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Linkedin, Github } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'

const contact = [
  { icon: Phone, label: '+60 17-283 4234', href: 'tel:+60172834234' },
  { icon: MapPin, label: 'Kuala Lumpur', href: null },
  { icon: Mail, label: 'adriana.kjefri@gmail.com', href: 'mailto:adriana.kjefri@gmail.com' },
  { icon: Linkedin, label: 'linkedin.com/in/adrianajefri', href: 'https://linkedin.com/in/adrianajefri' },
  { icon: Github, label: 'github.com/adrianajfry', href: 'https://github.com/adrianajfry' },
]

const skills = [
  { group: 'Languages', items: ['Python', 'SQL', 'PHP', 'C++', 'Dart'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL'] },
  { group: 'Data & analytics tools', items: ['Alteryx', 'Power BI', 'Tableau', 'Pandas', 'Polars', 'Matplotlib', 'Seaborn', 'Excel', 'SAP BTP'] },
  { group: 'Cloud & data engineering', items: ['AWS (EC2, S3)', 'Microsoft Azure', 'Azure Databricks', 'ADF', 'Synapse Analytics', 'AWS Data Pipeline'] },
  { group: 'Tools & platforms', items: ['Docker', 'Supabase', 'Flutter', 'Git / GitHub'] },
  { group: 'Concepts', items: ['ETL Pipeline', 'Medallion Architecture', 'OOP', 'Agile / Scrum / Waterfall'] },
]

const experience = [
  {
    role: 'Tech Architecture & Delivery Intern',
    org: 'Telekom Malaysia (TM) · Kuala Lumpur',
    period: 'Sep 2026 – Present',
    text: 'Learning hands-on experience in a professional environment, applying academic knowledge to real-world projects while gaining meaningful operations, values, and corporate culture.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ImE8nzYs4GaxtOw7l_iGma5b8e3KUUR7vhrhArZq1Q&s=10',
  },
  {
    role: 'Restaurant Crew Service',
    org: 'Fiske Steakhouse & Asam Pedas Melaka · Kuala Lumpur',
    period: 'Aug – Sep 2023',
    text: 'Provided friendly, efficient table service in a fast-paced dining environment, assisting with order taking, food delivery, and maintaining cleanliness of dining areas.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWiNA2w0GYhFJ_oe3DB9zIQUXupURuYDrupuw-Fpy9KFA7DFWcrxbHuk&s=10',
  },
  {
    role: 'Data Entry Intern',
    org: 'Ministry of Defence · Kuala Lumpur',
    period: 'May – Jun 2022',
    text: 'Entered and updated company data accurately across spreadsheets and internal systems, developing thoroughness and scheduling discipline while meeting daily data entry targets.',
    logo : 'https://pbs.twimg.com/profile_images/824952464159887361/vG8QQ-Fe_400x400.jpg',
  },
]

const certificates = [
  {
    name: 'AWS Cloud Developing',
    image: 'https://images.credly.com/size/340x340/images/bb3211c0-a562-44ec-a8b5-df54deb0e5e9/blob',
    url: 'https://www.credly.com/badges/94f48451-0fc1-4782-bd69-f87cfa5e8916/linked_in_profile',
  },
  {
    name: 'AWS Cloud Data Pipeline Builder',
    image: 'https://images.credly.com/size/340x340/images/43f26cf1-0b54-41a3-9fa5-3d2f02fa5040/blob',
    url: 'https://www.credly.com/badges/523e3563-7b46-4fdd-bead-b68d3fefde57/linked_in_profile',
  },
  {
    name: 'AWS Cloud Foundations',
    image: 'https://images.credly.com/size/340x340/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob',
    url: 'https://www.credly.com/badges/74139e31-e40f-46ae-bd42-edf5c17cbfba/linked_in_profile',
  },
   {
    name: 'Alteryx Designer Core',
    image: 'https://images.credly.com/size/340x340/images/14744318-8d6a-49c3-971d-6a4a0f524925/Certification_Designer_Core.png',
    url: 'https://www.credly.com/badges/2450a758-7aeb-4830-b208-f9035068f41f/linked_in_profile',
  },
  {
    name: 'Microsoft Azure Data Fundamentals',
    image: 'https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png',
    url: 'https://www.credly.com/badges/452618ac-3077-4d89-bb89-e2fa94d50398/linked_in_profile',
  },
]

const events = [
  { role: 'Vice Secretary', org: 'GASARI Ignite 2026', period: 'Apr 2026' },
  { role: 'Registration Unit Leader', org: "CODE' 26", period: 'Dec 2025 – Jan 2026' },
  { role: 'Stage Manager', org: 'Computing Gala 2025', period: 'May – Jun 2025' },
  { role: 'Multimedia Unit Leader', org: 'Majlis Gemilang Anugerah Mahasiswa 2024', period: 'Mar – May 2025' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-8">
        <motion.img
          src="/profile.png"
          alt="Nurul Adriana Binti Kamal Jefri"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gold/40 shadow-lg flex-shrink-0"
        />

        <div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.3em] text-bronze mb-2"
          >
            about
          </motion.p>

          <motion.h2
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl text-ink font-semibold mb-3"
          >
            Nurul Adriana Binti Kamal Jefri
          </motion.h2>

          <motion.div
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver border border-white/15 rounded-full px-2.5 py-1">
              21 years old
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold border border-gold/30 rounded-full px-2.5 py-1">
              Aspiring Data Analyst
            </span>
          </motion.div>
        </div>
      </div>

      <motion.h1
        initial="hidden"
        animate="show"
        custom={1.5}
        variants={fadeUp}
        className="font-display text-3xl md:text-5xl text-ink font-semibold max-w-2xl mb-6"
      >
        From coursework to production — I like following data all the way through.
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="show"
        custom={1.5}
        variants={fadeUp}
        className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
      >
        {contact.map((c) => {
          const Icon = c.icon
          const content = (
            <span className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-silver transition-colors">
              <Icon size={13} />
              {c.label}
            </span>
          )
          return c.href ? (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
              {content}
            </a>
          ) : (
            <span key={c.label}>{content}</span>
          )
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        custom={2}
        variants={fadeUp}
        className="max-w-2xl text-muted leading-relaxed space-y-4 mb-14"
      >
        <p>
          I'm a final-year Data Engineering student at Universiti Teknologi
          Malaysia, based in Ulu Kelang, Selangor. I care about the full
          lifecycle of data — ingesting it, cleaning it, modeling it, and
          shipping it into something people actually use, whether that's a
          dashboard, an app, or an analytics pipeline.
        </p>
        <p>
          Most of my recent work sits at the intersection of cloud data
          engineering (AWS, Azure Databricks, Spark, ADF) and applied product
          building (Flutter + Supabase apps for real institutions). I'm
          supervised by Dr. Aryati Bakri on my final year project, and I work
          well in collaborative, cross-functional teams.
        </p>
      </motion.div>

      {/* Education */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-xl text-ink mb-6"
      >
        Education
      </motion.h2>
      <div className="relative pl-8 md:pl-10 mb-14">
        <div className="rail-line absolute left-2 md:left-2.5 top-2 bottom-2 w-px" />
        <div className="space-y-8">
          {[
            {
              year: '2023 – Present',
              institution: 'Universiti Teknologi Malaysia',
              detail: 'Bachelor of Computer Science (Data Engineering) w. Hons',
              achievement: 'CGPA 3.70 · GPA 3.88',
              color: '#D4AF6A',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/UTM-LOGO.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
            },
            {
              year: '2022 – 2023',
              institution: 'Kolej MARA Kuala Nerang',
              detail: 'Foundation in Engineering & Technology',
              achievement: 'CGPA: 3.92 · MUET: Band 4',
              color: '#B87333',
              logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuFCxvQanqW-q2KzJgBUtjufBnimrRrh9EoR88f2RuA&s=10',
            },
            {
              year: '2017 – 2021',
              institution: 'MRSM Felda Trolak',
              detail: 'Biology Stream',
              achievement: 'SPM: 6As · PT3: 7As',
              color: '#B87333',
              logo: 'https://upload.wikimedia.org/wikipedia/ms/3/3b/MRSM_Logo.jpg?utm_source=ms.wikipedia.org&utm_campaign=index&utm_content=original',
            },
            {
              year: '2012 – 2016',
              institution: 'SRAI Taman Keramat',
              detail: null,
              achievement: 'UPSR: 5As',
              color: '#B87333',
              logo: 'https://upload.wikimedia.org/wikipedia/ms/5/5c/Lencana_SRAITK.jpg?utm_source=ms.wikipedia.org&utm_campaign=index&utm_content=original',
            },
          ].map((e, i) => (
            <motion.div
              key={e.institution}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div
                className="absolute -left-[26px] md:-left-[30px] top-1.5 w-3 h-3 rounded-full"
                style={{ backgroundColor: e.color, boxShadow: `0 0 10px ${e.color}` }}
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: e.color }}>
                {e.year}
              </p>
                <div className="flex items-center gap-2.5">
                {e.logo && (
                  <img
                    src={e.logo}
                    alt=""
                    className="w-6 h-6 md:w-7 md:h-7 object-contain rounded-full bg-white/90 p-0.5 flex-shrink-0"
                  />
                )}
                <h3 className="font-display text-lg text-ink">{e.institution}</h3>
              </div>
              {e.detail && <p className="text-sm text-ink/80 mt-1">{e.detail}</p>}
              <p className="font-mono text-xs text-muted mt-1.5">{e.achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-xl text-ink mb-6"
      >
        Experience
      </motion.h2>
      <div className="space-y-5 mb-14">
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-panel border border-white/5 rounded-2xl p-5 max-w-2xl"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1.5">
              <div className="flex items-center gap-2.5">
                {e.logo && (
                  <img
                    src={e.logo}
                    alt=""
                    className="w-6 h-6 rounded-full bg-white/90 p-0.5 object-contain flex-shrink-0"
                  />
                )}
                <p className="font-display text-ink text-lg">{e.role}</p>
              </div>
              <p className="font-mono text-[11px] text-bronze">{e.period}</p>
            </div>
            <p className="text-xs text-muted font-mono mb-2">{e.org}</p>
            <p className="text-sm text-ink/80 leading-relaxed">{e.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Toolkit */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-xl text-ink mb-6"
      >
        Toolkit
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
        {skills.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-panel border border-white/5 rounded-2xl p-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              {s.group}
            </p>
            <ul className="space-y-1.5">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-ink/90">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Certificates */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-xl text-ink mb-6"
      >
        Certificates
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-14">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="flex flex-col items-center gap-2 bg-panel border border-white/5 rounded-2xl p-4 text-center hover:border-gold/30 transition-colors"
          >
            <img src={cert.image} alt={cert.name} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <span className="text-[11px] font-mono text-ink/80 leading-snug">{cert.name}</span>
          </motion.a>
        ))}
      </div>

      {/* Event experience */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-xl text-ink mb-6"
      >
        Event Experience
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {events.map((e, i) => (
          <motion.div
            key={e.role + e.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-panel border border-white/5 rounded-2xl p-5"
          >
            <p className="font-display text-ink text-base mb-1">{e.role}</p>
            <p className="text-xs text-muted font-mono mb-1">{e.org}</p>
            <p className="text-[11px] text-bronze font-mono">{e.period}</p>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  )
}