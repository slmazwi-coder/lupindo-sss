// ── Storage helpers ────────────────────────────────────────────────────────
const get = (key, fallback) => {
  try {
    const raw = localStorage.getItem(`lss_${key}`)
    return raw ? JSON.parse(raw) : fallback
  } catch { return fallback }
}

const set = (key, value) => {
  try { localStorage.setItem(`lss_${key}`, JSON.stringify(value)) } catch {}
}

// ── School constants ────────────────────────────────────────────────────────
export const SCHOOL = {
  name:       'Lupindo Senior Secondary School',
  short:      'Lupindo SSS',
  motto:      'Amidst difficulties we rise',
  emis:       '200500470',
  address:    'Tshisa Location, Lupindo A/A, Matatiele, 4730',
  postal:     'P.O. Box 1865, Matatiele, 4730',
  phone:      '079 500 8111',
  cell:       '073 077 9988',
  email:      '200500470@ecschools.org.za',
  province:   'Eastern Cape',
  district:   'Alfred Nzo West',
  circuit:    'ANW Magudlaphi',
  sector:     'Public',
  grades:     'Grade 8 – Grade 12',
  hoursWeek:  '07:30 – 15:30',
  hoursFri:   '07:30 – 13:30',
  coords:     { lat: -30.47271, lng: 28.64753 },
  facebook:   'https://www.facebook.com/lupindosss/',
  tiktok:     'https://www.tiktok.com/@lupindosss',
}

// ── Default data ────────────────────────────────────────────────────────────
const DEFAULT_NEWS = [
  {
    id: '1',
    title: '2027 Applications Now Open',
    date: '2026-05-01',
    excerpt: 'Applications for general admission for the 2027 academic year are open. Submit your application online.',
    body: 'Applications for general admission for the 2027 academic year are now open. We welcome learners from Grade 8 to Grade 12. Please submit all required documents including a certified copy of the learner\'s birth certificate, progress report, and proof of residence.',
    image: '',
    category: 'Admissions',
  },
  {
    id: '2',
    title: '2025 Matric Results — 94.5% Pass Rate',
    date: '2026-01-14',
    excerpt: 'Lupindo SSS achieved a 94.5% matric pass rate in 2025, with 206 bachelor passes and 451 distinctions.',
    body: 'We are proud to announce that Lupindo Senior Secondary School achieved a 94.5% pass rate in the 2025 National Senior Certificate examinations. Our learners recorded 206 bachelor passes (71.8%) and an impressive 451 subject distinctions. We congratulate every learner, educator, and parent who contributed to this achievement.',
    image: '',
    category: 'Achievements',
  },
]

const DEFAULT_ABOUT = {
  history: [
    'Lupindo Senior Secondary School is a public school proudly serving learners in the Tshisa Location, Lupindo A/A area of Matatiele, Eastern Cape, within the Alfred Nzo West District.',
    'Operating under the ANW Magudlaphi Circuit, Lupindo SSS is committed to academic excellence, disciplined learning, and the values of our community. Our motto — "Amidst difficulties we rise" — reflects the spirit of every learner who walks through our doors.',
    'Parents and guardians are encouraged to engage actively with the school through meetings, events, and ongoing learner support. Together we build a culture of achievement and pride.',
  ],
  principal: {
    name: 'Mr L.M. Ntshayisa',
    title: 'Principal',
    message: [
      'Welcome to Lupindo Senior Secondary School. We believe every learner carries within them the capacity for greatness. Our role is to unlock it — through discipline, love, and unwavering belief in their potential.',
      'We value respect, responsibility, and pride in our school community. Hard work pays, and at Lupindo SSS, we are committed to proving that amidst every difficulty, we rise.',
    ],
  },
}

const DEFAULT_RESULTS = {
  '2025': {
    passRate: 94.5,
    bachelors: 206,
    bachelorRate: 71.8,
    distinctions: 451,
    wrote: 287,
    subjects: [
      { name: 'Accounting', rate: 90.6 },
      { name: 'Mathematics', rate: 71.1 },
      { name: 'Physical Sciences', rate: 82.1 },
      { name: 'English FAL', rate: 100 },
      { name: 'Life Orientation', rate: 100 },
    ],
  },
  '2024': { passRate: 94.0, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
  '2023': { passRate: 92.1, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
}

const DEFAULT_ACTIVITIES = [
  { id: '1', name: 'Soccer',    category: 'Sport',    description: 'Boys and girls teams competing at district and regional level.',      image: '' },
  { id: '2', name: 'Netball',   category: 'Sport',    description: 'Competitive teams across all age groups with provincial accolades.',  image: '' },
  { id: '3', name: 'Athletics', category: 'Sport',    description: 'Track and field development and inter-district competition.',         image: '' },
  { id: '4', name: 'Rugby',     category: 'Sport',    description: 'A growing programme competing at district and regional tournaments.', image: '' },
  { id: '5', name: 'Debating',  category: 'Academic', description: 'Building critical thinking and public speaking skills.',              image: '' },
  { id: '6', name: 'Spelling Bee', category: 'Academic', description: 'National-level finalists multiple years running.',                image: '' },
  { id: '7', name: 'Choir',     category: 'Culture',  description: 'Award-winning choir excelling at regional competitions.',            image: '' },
  { id: '8', name: 'Drama',     category: 'Culture',  description: 'Performances celebrating culture, language, and community.',         image: '' },
]

const DEFAULT_HALL = [
  { id: '1', name: 'Top Achiever', title: 'Best Matric Learner', year: '2025', desc: '', image: '' },
  { id: '2', name: 'Top Achiever', title: '2nd Best Matric Learner', year: '2025', desc: '', image: '' },
  { id: '3', name: 'Top Achiever', title: '3rd Best Matric Learner', year: '2025', desc: '', image: '' },
]

const DEFAULT_CONTACT = {
  address: SCHOOL.address,
  postal:  SCHOOL.postal,
  phone:   SCHOOL.phone,
  cell:    SCHOOL.cell,
  email:   SCHOOL.email,
  hoursWeek: SCHOOL.hoursWeek,
  hoursFri:  SCHOOL.hoursFri,
}

// ── Getters / Setters ───────────────────────────────────────────────────────
export const getNews       = ()      => get('news',       DEFAULT_NEWS)
export const setNews       = (v)     => set('news',       v)
export const getAbout      = ()      => get('about',      DEFAULT_ABOUT)
export const setAbout      = (v)     => set('about',      v)
export const getActivities = ()      => get('activities', DEFAULT_ACTIVITIES)
export const setActivities = (v)     => set('activities', v)
export const getHallOfFame = ()      => get('hall',       DEFAULT_HALL)
export const setHallOfFame = (v)     => set('hall',       v)
export const getContact    = ()      => get('contact',    DEFAULT_CONTACT)
export const setContact    = (v)     => set('contact',    v)
export const getDocuments  = ()      => get('documents',  [])
export const setDocuments  = (v)     => set('documents',  v)
export const getApplications = ()   => get('applications', [])
export const setApplications = (v)  => set('applications', v)
export const getResultsByYear = (y)  => get(`results_${y}`, DEFAULT_RESULTS[y] || null)
export const setResultsByYear = (y, v) => set(`results_${y}`, v)
export const getAchievers = (y)      => get(`achievers_${y}`, [])
export const setAchievers = (y, v)   => set(`achievers_${y}`, v)

// ── Auth ────────────────────────────────────────────────────────────────────
export const isAuthenticated = () => localStorage.getItem('lss_auth') === 'true'
export const login  = (pw) => { if (pw === 'admin2026') { localStorage.setItem('lss_auth', 'true'); return true } return false }
export const logout = ()   => localStorage.removeItem('lss_auth')

// ── IDs ─────────────────────────────────────────────────────────────────────
export const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`

let _counters = {}
export const generateStudentNumber = (year) => {
  const key = `lss_ctr_${year}`
  const n = Number(localStorage.getItem(key) || 0) + 1
  localStorage.setItem(key, String(n))
  return `${year}-${String(n).padStart(6, '0')}`
}

export const calcAvg = (marks = []) => {
  if (!marks.length) return 0
  return Math.round((marks.reduce((s, m) => s + (m.mark || 0), 0) / marks.length) * 10) / 10
}
