import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'

const utmYears = [
  {
    year: 'Year 4',
    color: '#B87333',
    semesters: [
      {
        label: 'Semester 1',
        subjects: [
          {code: 'SECP4112', name: 'Initial Industry Projet Proposal'},
          {code: 'SECP4114', name: 'Professional Development'},
          {code: 'SECP4124', name: 'Professional Practice'},
          {code: 'SECP4134', name: 'Professional Development & practice Report'}
        ],
      },
      {
        label: 'Semester 2',
        subjects: [],
      },
    ],
  },
  {
    year: 'Year 3',
    color: '#C7CDD6',
    semesters: [
      { label: 'Semester 1', subjects: [ 
        {code: 'SECJ3553', name: 'Artificial Intelligence'}, 
        {code: 'SECP3623', name: 'Database Programming'}, 
        {code: 'SECP3744', name: 'Enterprise Systems Design & Modeling (WBL)'}, 
        {code: 'SSPG2113', name: 'Creativity & Inovasi'}, 
        {code: 'UHLA1112', name: 'Arabic Language'}, 
        {code: 'UHLB3132', name: 'Professional Communication Skills II'} 
      ] },
      { label: 'Semester 2', subjects: [ 
        {code: 'SECP3106', name: 'Application Development (WBL)'}, 
        {code: 'SECP3133', name: 'High Performance Data Processing'}, 
        {code: 'SECP3213', name: 'Business Intelligence'}, 
        {code: 'SECP3843', name: 'Special Topic in Data Engineering'}, 
        {code: 'ULRS3032', name: 'Entrepreneurship & Innovation'} 
      ] },
    ],
  },
  {
    year: 'Year 2',
    color: '#D4AF6A',
    semesters: [
      { label: 'Semester 1', subjects: [ 
        {code: 'SECJ2013', name: 'Data Structure & Algorithm'}, 
        {code: 'SECP2523', name: 'Database (WBL)'}, 
        {code: 'SECP3204', name: 'Software Engineering (WBL)'}, 
        {code: 'SECP3723', name: 'System Development Technology'}, 
        {code: 'SECR1213', name: 'Network Communication'}, 
        {code: 'ULRF2402', name: 'Gamelan'} 
      ] },
      { label: 'Semester 2', subjects: [ 
        {code: 'SECD3761', name: 'Technopreneurship Seminar'}, 
        {code: 'SECJ2154', name: 'Obejct Oirented Programming'}, 
        {code: 'SECP2753', name: 'Data Mining'}, 
        {code: 'SECP3223', name: 'Data Analytics Programming'}, 
        {code: 'SECR2043', name: 'Operating Systems'}, 
        {code: 'UHLB2122', name: 'Professional Communication Skills I'}, 
        {code: 'ULRS1022', name: 'Philosophy & Current Issues'} 
      ] },
    ],
  },
  {
    year: 'Year 1',
    color: '#D4AF6A',
    semesters: [
      { label: 'Semester 1', subjects: [ 
        {code: 'SECI1013', name: 'Discrete Structure'}, 
        {code: 'SECJ1013', name: 'Programming Technique I'}, 
        {code: 'SECP1513', name: 'Technology  Information System'}, 
        {code: 'SECR1013', name: 'Digital Logic'}, 
        {code: 'ULRS1032', name: 'Integrity & Anti-Corruption Course'} 
      ] },
      { label: 'Semester 2', subjects: [ 
        {code: 'SECJ1023', name: 'Programming Technique II'}, 
        {code: 'SECP2613', name: 'System Analysis & Design (WBL)'}, 
        {code: 'SECR1033', name: 'Computer Organization & Architecture'}, 
        {code: 'SECV2113', name: 'Human Computer Interaction'}, 
        {code: 'SECI1143', name: 'Probability & Statistical Data Analysis'}, 
        {code: 'ULRS1182', name: 'Appreciation of Ethics & Civilizations'} 
      ] },
    ],
  },
]

const kmknSemesters = [
  { label: 'Semester 1', subjects: [ 
    {code: 'ENG1413', name: 'English I'}, 
    {code: 'MAT1064', name: 'Mathematics I'}, 
    {code: 'ITE1063', name: 'Basic Information & Communication Technology (ICT)'}, 
    {code: 'SOC1043', name: 'Basic Thinking Skills'}, 
    {code: 'SCI1014', name: 'Physics I'}, 
    {code: 'SCI1054', name: 'Chemistry I'}, 
    {code: 'ISL1030', name: 'Penghayatan Islam I'}, 
    {code: 'KQA1012', name: 'Co-Curiculum'} 
  ] },
  { label: 'Semester 2', subjects: [ 
    {code: 'ENG1423', name: 'English II'}, 
    {code: 'MAT1074', name: 'Mathematics II'}, 
    {code: 'MAT1084', name: 'Engineering Mathematics'}, 
    {code: 'SCI1064', name: 'Chemistry II'}, 
    {code: 'SCI1024', name: 'Physics II'}, 
    {code: 'CSC1304', name: 'Basic Programming'}, 
    {code: 'SCI1034', name: 'Biology I'}, 
    {code: 'ISL1040', name: 'Penghayatan Islam II'} 
  ] },
]

const mrsmSemesters = [
  { label: 'Sijil Pelajaran Malaysia (SPM)', subjects: [ 
    {code: '1103', name: 'Bahasa Melayu'}, 
    {code: '1119', name: 'Bahasa Inggeris'}, 
    {code: '1223', name: 'Pendidikan Islam'}, 
    {code: '1249', name: 'Sejarah'}, 
    {code: '1449', name: 'Matematik'}, 
    {code: '3472', name: 'Matematik Tambahan'}, 
    {code: '4531', name: 'Fizik'}, 
    {code: '4541', name: 'Kimia'}, 
    {code: '4551', name: 'Biologi'}
  ] },
  { label: 'Peperiksaan Tingkatan 3 (PT3)', subjects: [ 
    {code: '-', name: 'Bahasa Melayu'}, 
    {code: '-', name: 'Bahasa Inggeris'}, 
    {code: '-', name: 'Sains'}, 
    {code: '-', name: 'Sejarah'}, 
    {code: '-', name: 'Matematik'}, 
    {code: '-', name: 'Geografi'}, 
    {code: '-', name: 'Pendidikan Islam'}, 
    {code: '-', name: 'Reka Bentuk & Teknologi (RBT)'}, 
    {code: '-', name: 'Arabic Language'} 
  ] },
]

function SemesterColumn({ label, subjects }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted mb-3">
        {label}
      </p>
      {subjects.length === 0 ? (
        <p className="text-xs text-muted/50 italic">No subjects added yet</p>
      ) : (
        <ul className="space-y-2">
          {subjects.map((s) => (
            <li key={s.code} className="flex items-baseline gap-2.5">
              <span className="font-mono text-[11px] text-gold flex-shrink-0">{s.code}</span>
              <span className="text-sm text-ink/85">{s.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function YearAccordion({ year, color, semesters, isOpen, onToggle }) {
  return (
    <div className="bg-panel border border-white/5 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
          />
          <h3 className="font-display text-lg text-ink">{year}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={18} className="text-muted" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 gap-6 px-5 pb-5 pt-1">
              {semesters.map((sem) => (
                <SemesterColumn key={sem.label} label={sem.label} subjects={sem.subjects} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Academic() {
  const [openYear, setOpenYear] = useState('Year 1')

  return (
    <PageTransition>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-bronze mb-4">
        academic
      </p>
      <h1 className="font-display text-3xl md:text-5xl text-ink font-semibold mb-4 max-w-2xl">
        Coursework, semester by semester.
      </h1>
      <p className="text-muted max-w-xl mb-14">
        Subjects I've taken across four years at UTM, plus my foundation
        studies at Kolej MARA Kuala Nerang. Project work lives on the
        Projects page.
      </p>

      <h2 className="font-display text-xl text-ink mb-6">
        Universiti Teknologi Malaysia
      </h2>
      <div className="space-y-4 mb-16">
        {utmYears.map((y) => (
          <YearAccordion
            key={y.year}
            year={y.year}
            color={y.color}
            semesters={y.semesters}
            isOpen={openYear === y.year}
            onToggle={() => setOpenYear(openYear === y.year ? null : y.year)}
          />
        ))}
      </div>

      <h2 className="font-display text-xl text-ink mb-6">
        Kolej MARA Kuala Nerang
      </h2>
      <div className="bg-panel border border-white/5 rounded-2xl p-5">
        <div className="grid sm:grid-cols-2 gap-6">
          {kmknSemesters.map((sem) => (
            <SemesterColumn key={sem.label} label={sem.label} subjects={sem.subjects} />
          ))}
        </div>
      </div>

      <h2 className="font-display text-xl text-ink mb-6 mt-16">
        MRSM Felda Trolak
      </h2>
      <div className="bg-panel border border-white/5 rounded-2xl p-5">
        <div className="grid sm:grid-cols-2 gap-6">
          {mrsmSemesters.map((sem) => (
            <SemesterColumn key={sem.label} label={sem.label} subjects={sem.subjects} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}