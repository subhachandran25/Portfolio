// All site content lives here, so you can edit text and numbers without touching the components.

export const profile = {
  name: 'Subha Chandran',
  kicker: 'Strategy · Growth · Analytics and insights',
  intro:
    "I'm Subha Chandran, a Global MBA who turns funnel and market data into growth strategy. I've driven growth analytics in ed-tech and US healthcare, and built a D2C brand of my own.",
  email: 'subhachandran77@gmail.com',
  phone: '+971 56 782 9135',
  lookingFor: 'Open to strategy, growth and analytics and insights roles in the UAE.',
};

export const counters = [
  { to: 45, suf: '%', label: 'peak conversion rate as manager' },
  { to: 4.5, pre: '₹', suf: 'L', dec: 1, label: 'weekly revenue at Extramarks' },
  { to: 17, label: 'member team led' },
  { to: 130, pre: '~', label: 'orders a month at Naanam' },
];

export const stops = [
  {
    icon: 'TL', when: '2019 – 2021', org: "Think and Learn (BYJU'S)", title: 'Associate – Manager',
    d: "Analysed the lead funnel stage by stage to find where conversions dropped, and turned those insights into the team's strategy.",
    li: ['Funnel analytics by lead stage, linking B2B and B2C data', 'Used call audits and performance data to set priorities and coach the team', 'Insights that lifted conversion from 23% to a 45% peak'],
    chips: [['23%', 'conversion as associate'], ['45%', 'peak conversion as manager']],
  },
  {
    icon: 'EM', when: '2022', org: 'Extramarks · Chennai', title: 'Manager',
    d: 'Used account and pipeline data to decide which schools to target, then shaped partnership strategy across B2B and B2C.',
    li: ['Data-led client prioritisation and bid strategy', 'Spotted renewal and upsell opportunities across school accounts', 'Led a 17-member team on insight-driven targets'],
    chips: [['₹4.5L', 'weekly revenue'], ['17', 'member team'], ['30+', 'school partners']],
  },
  {
    icon: 'N', when: '2022 – present', org: 'Naanam', title: 'Co-founder, D2C jewellery brand',
    d: 'Running a handcrafted earrings brand on data: order and marketing numbers guide pricing, stock and spend.',
    li: ['Tracks unit economics and marketing returns', 'Turns monthly order data into growth decisions'],
    chips: [['~130', 'orders a month'], ['₹2.5L', 'peak monthly revenue']],
  },
  {
    icon: 'HB', when: '2024', org: 'Hbox · Bangalore', title: 'Business Analyst, healthcare platform',
    d: 'Built the data foundation for growth: a master clinic database and analytics that showed the team where to focus across US clinics and hospital accounts.',
    li: ['Power BI, SQL and Excel analysis, with HIPAA-compliant data handling', 'Weekly target schedules that helped clinic managers convert doctors'],
    chips: [['47', 'clinics in master database'], ['Power BI', 'SQL and Excel']],
  },
  {
    icon: 'SPJ', when: '2026', org: 'SP Jain School of Global Management', title: 'Global MBA, Dubai and Singapore',
    d: 'Consulting engagements on live strategy questions. See the case studies below.',
    li: ['Dell Technologies: Edge AI impact toolkit and ROI calculator', 'BorderPlus: Dubai market-entry and pricing strategy'],
    chips: [['2', 'consulting engagements']],
  },
];

export const dell = {
  verticals: {
    m: { lbl: 'Plants', min: 1, max: 20, step: 1, val: 5, lo: 2, hi: 5, per: 1 },
    r: { lbl: 'Stores', min: 100, max: 2000, step: 100, val: 500, lo: 2, hi: 6, per: 100 },
  },
  scenarios: [['Conservative 70%', 0.7], ['Base 100%', 1], ['Optimistic 130%', 1.3]],
  landExpand: [
    ['Predictive maintenance', 'Quality inspection', 'Scheduling', 'Worker safety', 'Digital twin'],
    ['Loss prevention', 'Demand forecasting', 'Dynamic pricing', 'Shelf analytics', 'Associate AI'],
    ['Traffic management', 'Public safety', 'Utilities monitoring', 'Emergency response', 'Waste optimisation'],
  ],
};

export const borderplus = {
  tiers: [
    ['Tier 1 · Groups and tertiary', 'Expand later', 'Aster, Mediclinic, NMC and others. High volume, but long procurement chains, in-house systems and established agents. Becomes the expansion target once there\'s proof; Aster is the first Tier 1 account.'],
    ['Tier 2 · Single-site private hospitals', 'Beachhead', 'Signs at owner level, runs third-party hospital systems and hires by reference. Fastest route to pass-rate, cycle-time and retention proof.'],
    ['Tier 3 · Clinics and home care', 'Not now', "Low value per account, so it doesn't justify the cost of selling to it at entry."],
  ],
  countries: [
    ['Nigeria', 4.7, 'Diversify in year 2, behind two gates'],
    ['Ghana', 4.5, 'Diversify in year 2, behind two gates'],
    ['Egypt', 3.9, 'Option (BSc holders only)'],
    ['Jordan', 1.2, 'Pilot: proven in the Gulf, Arabic fit'],
    ['India', 1.1, 'Pilot: trusted corridor'],
  ],
  scenarios: [
    { name: 'Base', top: 'AED 927K', con: '≈ AED 476K', pl: '150', trig: 'Trigger: 2–4 Tier 2 hospitals won, 150 placements, and 20 hospitals licensing 20 nurses each by year 3.' },
    { name: 'Upside', top: 'AED 1.93M', con: '≈ AED 1.0M', pl: '300', trig: 'Trigger: hospitals license more nurses (30 each) and placements reach 300. Same plan; licence depth is the lever.' },
  ],
};

export const steps = [
  ['Frame', 'Pin down the real question and the decision it feeds.'],
  ['Analyse', 'Pull the data, build the model, find what moves the number.'],
  ['Recommend', 'Turn findings into a clear call, with the trade-offs stated.'],
  ['Execute', 'Stay close to the floor until the result shows up.'],
];

export const tools = ['Excel', 'Power BI', 'Tableau', 'SQL', 'Python', 'Salesforce', 'LeadSquared'];

export const education = [
  ['Global MBA', 'SP Jain School of Global Management · Dubai and Singapore · 2026'],
  ['B.Tech', 'SRM University, Chennai · 2019'],
];

export const also = [
  ['HIPAA certified', 'Hands-on with US healthcare data'],
  ['Bid and proposal experience', 'School partnership bids, renewals and upselling at Extramarks'],
];
