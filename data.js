// ─────────────────────────────────────────────────────────────────────────────
// SCHEDULE DATA  —  2026 AlgoLab Summer School
// - affiliation: speaker's institution
// - scholarUrl:  Google Scholar profile URL (null = link not shown)
// - url: null    → shows a greyed-out "not available" button on the site
// ─────────────────────────────────────────────────────────────────────────────

const SCHEDULE = [

  // ── WEEK 1 ──────────────────────────────────────────────────────────────────

  {
    week: "Week 1",
    dayName: "Monday",
    date: "June 8, 2026",
    lectures: [
      {
        title: [
          "Part 1 - Introduction to Fault-Tolerant Quantum Circuits",
          "Part 2 - Hamiltonians and Nonlocal Games",
        ],
        speaker: "Adam Bene Watts",
        affiliation: "University of Calgary",
        scholarUrl: "https://scholar.google.com/citations?user=nXVtEQ0AAAAJ&hl=en",
        time: "09:00 – 12:30",
        type: "Lecture",
        tags: ["Quantum Information", "Quantum Complexity"],
        materials: [
          { label: "Slides - Part 1", type: "slides", url: "slides/adam-bene-watts/introduction-to-fault-tolerant-quantum-computing.pdf" },
          { label: "Slides - Part 2", type: "slides", url: "slides/adam-bene-watts/hamiltonians-and-local-games.pdf" },
        ],
      },
      {
        title: ["Part 1 - Introduction to Complexity Theory", "Part 2 - Interactive Proofs, Bell Tests, and Verified Quantum Computation"],
        speaker: "Arthur Mehta",
        affiliation: "University of Ottawa",
        scholarUrl: "https://scholar.google.com/citations?user=6VCIcoAAAAAJ&hl=en",
        time: "14:30 – 18:00",
        type: "Lecture",
        tags: ["Quantum Information", "Quantum Complexity"],
        materials: [
          { label: "Slides", type: "slides", url: "slides/arthur-mehta/quantum-complexity.pdf" },
        ],
      },
    ],
  },

  {
    week: "Week 1",
    dayName: "Tuesday",
    date: "June 9, 2026",
    lectures: [
      {
        title: "Hands-on on Quantum Information",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "09:00 – 12:30",
        type: "Hands-on",
        tags: ["Quantum Information", "Quantum Complexity"],
        materials: [
          { label: "GitHub Classroom Assignment", type: "url", url: "https://classroom.github.com/assignment-invitations/a87dec85ea2694a5dcf495fd2d4e3db8" },
        ],
      },
      {
        title: "Poster Session 1 / Industry Exhibition / Cocktail",
        speaker: "All Participants",
        affiliation: "",
        scholarUrl: null,
        time: "14:30 – 17:30",
        type: "Poster Session",
        materials: [],
      },
    ],
  },

  {
    week: "Week 1",
    dayName: "Wednesday",
    date: "June 10, 2026",
    lectures: [
      {
        title: ["Part 1 - Variational Quantum Algorithms and their Place in the Fault-Tolerant Age", "Part 2 - Double Bracket Flows"],
        speaker: "Roeland Wiersema",
        affiliation: "Flatiron Institute",
        scholarUrl: "https://scholar.google.com/citations?user=OK_B1GYAAAAJ&hl=en",
        time: "09:00 – 12:30",
        type: "Lecture",
        tags: ["Quantum Algorithm Applications"],
        materials: [
          { label: "Lecture Notes", type: "slides", url: "slides/roeland-wiersema/variational-quantum-algorithms.pdf" },
        ],
      },
      {
        title: "Quantum Singular Value Transformation and its Applications",
        speaker: "Abhijeet Alase",
        affiliation: "Concordia University",
        scholarUrl: "https://scholar.google.com/citations?user=3CjMS4EAAAAJ&hl=en",
        time: "14:30 – 18:00",
        type: "Lecture",
        tags: ["Quantum Algorithm Applications"],
        materials: [
          { label: "Lecture Notes", type: "slides", url: "slides/abhijeet-alase/qsvt-manuscript-notes.pdf" },
          { label: "Related Slides", type: "slides", url: "slides/abhijeet-alase/qsvt-and-its-applications.pdf" },
        ],
      },
    ],
  },

  {
    week: "Week 1",
    dayName: "Thursday",
    date: "June 11, 2026",
    lectures: [
      {
        title: "Solving Unconstrained and Constrained Combinatorial Optimization Problems using QAOA",
        speaker: "Ulrike Stege",
        affiliation: "University of Victoria",
        scholarUrl: "https://scholar.google.com/citations?user=1Zp5jw8AAAAJ&hl=en",
        time: "09:00 – 12:30",
        type: "Lecture",
        tags: ["Quantum Algorithm Applications"],
        materials: [
          { label: "Slides", type: "slides", url: "slides/ulrike-stege/solving-combinatorial-optimization-problems-using-qaoa.pdf" },
        ],
      },
      {
        title: "Hands-on on Quantum Applications",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "14:30 – 18:00",
        type: "Hands-on",
        tags: ["Quantum Algorithm Applications"],
        materials: [
          { label: "GitHub Classroom Assignment", type: "url", url: "https://classroom.github.com/a/1ypQTyHY" },
        ],
      },
    ],
  },

  {
    week: "Week 1",
    dayName: "Friday",
    date: "June 12, 2026",
    lectures: [
      {
        title: "Sponsored Session : Using Logical Qubits to Solve Differential Equations",
        speaker: "Evan Philip",
        affiliation: "Pasqal",
        scholarUrl: "https://scholar.google.com/citations?user=c-eOH-QAAAAJ&hl=en",
        time: "09:00 – 10:00",
        type: "Sponsored",
        materials: [
          { label: "Slides", type: "slides", url: "slides/pasqal/using-logical-qubits-to-solve-differential-equations.pdf" },
          { label: "Related paper", type: "url", url: "https://arxiv.org/abs/2605.21276" },

        ],
      },
      {
        title: "Revision Session",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "10:30 – 12:30",
        type: "Revision",
        materials: [],
      },
    ],
  },

  // ── WEEK 2 ──────────────────────────────────────────────────────────────────

  {
    week: "Week 2",
    dayName: "Monday",
    date: "June 15, 2026",
    lectures: [
      {
        title: "Introduction to the Interacting Electrons Problem",
        speaker: "Chloé Gauvin-Ndiaye",
        affiliation: "Université de Sherbrooke",
        scholarUrl: "https://scholar.google.com/citations?user=Of9XACAAAAAJ&hl=en",
        time: "09:00 – 12:30",
        type: "Lecture",
        tags: ["Quantum Computation"],
        materials: [
          { label: "Slides", type: "slides", url: "slides/chloe-aminata-gauvin-ndiaye/intro-to-many-body-problem-vs-quantum-computing.pdf" },
        ],
      },
      {
        title: "Introduction to Compilation and Resource Estimation",
        speaker: "Olivia Di Matteo",
        affiliation: "The University of British Columbia",
        scholarUrl: "https://scholar.google.com/citations?user=neFhvlsAAAAJ&hl=en",
        time: "14:30 – 18:00",
        type: "Lecture",
        tags: ["Quantum Computation"],
        materials: [
          { label: "Slides - Part 1", type: "slides", url: "slides/olivia-di-matteo/quantum-computation-overview-annotated.pdf" },
          { label: "Slides - Part 2", type: "slides", url: "slides/olivia-di-matteo/ftqc-resource-estimation-annotated.pdf" },
        ],
      },
    ],
  },

  {
    week: "Week 2",
    dayName: "Tuesday",
    date: "June 16, 2026",
    lectures: [
      {
        title: "Quantum Algorithms for Link Invariants",
        speaker: "Konstantinos Meichanetzidis",
        affiliation: "Quantinuum",
        scholarUrl: "https://scholar.google.com/citations?user=IH9fJM0AAAAJ&hl=en",
        time: "09:00 – 12:30",
        type: "Lecture",
        tags: ["Quantum Algorithm Applications"],
        materials: [
          { label: "Slides", type: "slides", url: "slides/konstantinos-meichanetzidis/quantum-algorithms-for-link-invariants.pdf" },
        ],
      },
      {
        title: "Resource Estimation for the Hubbard Model",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "14:30 – 18:00",
        type: "Hands-on",
        tags: ["Quantum Computation"],
        materials: [
          { label: "GitHub Classroom Assignment", type: "url", url: "https://classroom.github.com/a/zalmex2a" },
        ],
      },
    ],
  },

  {
    week: "Week 2",
    dayName: "Wednesday",
    date: "June 17, 2026",
    lectures: [
      {
        title: "Quantum Error Correction with Erasure Qubits",
        speaker: "Shruti Puri",
        affiliation: "Yale University",
        scholarUrl: "https://scholar.google.com/citations?user=q7U4bNoAAAAJ&hl=en",
        time: "09:00 – 12:30",
        type: "Lecture",
        tags: ["Quantum Error Handling"],
        materials: [
          { label: "Slides", type: "slides", url: null },
        ],
      },
      {
        title: "Application of Quantum Error Correction and Fault-Tolerance in Quantum Metrology",
        speaker: "Sisi Zhou",
        affiliation: "Perimeter Institute",
        scholarUrl: "https://scholar.google.com/citations?user=i-m2j4oAAAAJ&hl=en",
        time: "14:30 – 18:00",
        type: "Lecture",
        tags: ["Quantum Error Handling"],
        materials: [
          { label: "Slides", type: "slides", url: "slides/sisi-zhou/application-of-quantum-error-correction-and-fault-tolerance-in-quantum-metrology.pdf" },
        ],
      },
      {
        title: "Poster Session 2",
        speaker: "All Participants",
        affiliation: "",
        scholarUrl: null,
        time: "19:00 – 21:00",
        type: "Poster Session",
        materials: [],
      },
    ],
  },

  {
    week: "Week 2",
    dayName: "Thursday",
    date: "June 18, 2026",
    lectures: [
      {
        title: "Introduction to Error Correction Codes",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "09:00 – 12:30",
        type: "Hands-on",
        tags: ["Quantum Error Handling"],
        materials: [
          { label: "GitHub Classroom Assignment", type: "notes", url: null },
        ],
      },
      {
        title: "Sponsored Session",
        speaker: "Industry Speaker",
        affiliation: "",
        scholarUrl: null,
        time: "14:30 – 15:15",
        type: "Sponsored",
        materials: [],
      },
      {
        title: "Revision Session",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "16:00 – 18:00",
        type: "Revision",
        materials: [],
      },
    ],
  },

  {
    week: "Week 2",
    dayName: "Friday",
    date: "June 19, 2026",
    lectures: [
      {
        title: "Exam",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "09:00 – 12:30",
        type: "Exam",
        materials: [],
      },
      {
        title: "Concluding Remarks",
        speaker: "AlgoLab Team",
        affiliation: "Université de Sherbrooke",
        scholarUrl: null,
        time: "12:30 – 13:30",
        type: "Event",
        materials: [],
      },
    ],
  },

];
