// ─────────────────────────────────────────────
//  Portfolio content — sourced exactly from Resume (4).pdf
// ─────────────────────────────────────────────

export const personal = {
  name:     'Yogesh Sanjay Ghogare',
  initials: 'YG',
  titles: [
    'Automation Test Engineer',
    'Software Developer — Agentic Automation',
    'Playwright & Appium Specialist',
    'RAG & Agentic AI Builder',
  ],
  tagline:
    'QA Automation Engineer with 6+ years building scalable test frameworks for web, mobile, and API — plus AI-powered multi-agent QA platforms.',
  location: 'Pune, INDIA',
  email:    'ghogareyogesh2015@gmail.com',
  phone:    '(+91) 8329222473',
  linkedin: 'https://www.linkedin.com/in/yogesh-ghogare-159b40104',
  github:   'https://github.com/yogeshghogare',
  experienceLabel: '6 Years 10 Months',
  bio: [
    'QA Automation Engineer with 6+ years of expertise in building scalable test automation frameworks using Python, Playwright, Appium, and Pytest for web, mobile, and API testing.',
    'Experienced in testing RAG/LLM-based AI applications for response accuracy, context relevance, and hallucination detection. Skilled in developing AI-powered testing tools using FastAPI, Anthropic Claude, and OpenAI.',
    'Hands-on experience with cloud device farms (LambdaTest, BrowserStack), CI/CD pipelines, Docker, and Allure reporting with historical trend analysis.',
  ],
  languages: ['English', 'Marathi', 'Hindi'],
}

export const stats = [
  { label: 'Years of Experience', value: 6, suffix: '+' },
  { label: 'Client Projects',     value: 3, suffix: ''  },
  { label: 'Certifications',      value: 1, suffix: ''  },
]

export const experience = [
  {
    id: 1,
    role:     'Software Developer — AI Vibe Coding / Agentic Automation',
    company:  'Amdocs Development Centre India LLP — Mobile Device Automation Agent',
    duration: 'October 2025 – May 2026',
    period:   '~7 Months',
    location: 'Pune, INDIA',
    current:  true,
    project:  'AI-Powered Multi-Agent Mobile QA Platform (mobileqa-agent)',
    highlights: [
      'Architected and developed mobileqa-agent — a production-grade multi-skill Agent-to-Agent (A2A) JSON-RPC automation platform built on Python and Starlette, exposing five core agent skills: Orchestrator, Planner, Generator, Executor, and Self-Healer for fully autonomous mobile app test lifecycle management.',
      'Integrated a pgvector-backed RAG (Retrieval-Augmented Generation) pipeline for intelligent test case retrieval, semantic deduplication, and context caching — significantly reducing LLM token consumption and improving execution latency.',
      'Enforced a Crawl-First Architecture with live BFS DOM crawling, typed DOMSnapshot and CrawlPlanEntry dataclasses, and per-page vector store writes, enabling accurate LLM-guided navigation planning decisions.',
      'Extended the platform to support multi-framework test generation and execution across six frameworks: Python-Pytest-Appium, Java-TestNG-Appium, JavaScript-WDIO, Swift-XCUITest, Kotlin-Espresso, and Roku-BrightScript via a unified RUNNER_REGISTRY and TestOutcome report builder.',
      'Leveraged OpenAI and Anthropic Claude APIs with vision-based coordinate tapping, perceptual hashing for stable-screen detection, and adaptive loop-guard mechanisms — eliminating crawler loop defects and DOM locator failures.',
    ],
    tags: [
      'Python',
      'Starlette',
      'A2A JSON-RPC',
      'Appium',
      'pgvector',
      'OpenAI',
      'Anthropic Claude',
      'FastAPI',
      'Docker',
      'Allure',
      'LambdaTest',
    ],
  },
  {
    id: 2,
    role:     'Automation Test Engineer',
    company:  'Amdocs Development Centre India LLP — Etisalat',
    duration: 'July 2023 – October 2025',
    period:   '~2 Years 3 Months',
    location: 'Pune, INDIA',
    current:  false,
    project:  'CI/CD, Web & Mobile Automation — Etisalat',
    highlights: [
      'Architected and implemented end-to-end CI/CD pipelines on Jenkins enabling one-click execution of full test suites, integrated with Grafana dashboards for real-time monitoring of test execution metrics and visualisation of historical trend reports.',
      'Built a Python-based utility to aggregate and generate Cumulative Regression Execution Reports, consolidating results from multiple test suites into a single unified report for stakeholder review and release sign-off decisions.',
      'Led a team of 4 QA Engineers in Web Automation, designing and delivering a scalable Playwright + Python framework for automated testing of web applications and REST APIs, establishing team coding standards, Page Object Model patterns, and peer-review practices.',
      'Architected and delivered a comprehensive Mobile App Automation Framework using Pytest + Appium, enabling reliable cross-device test coverage across Android and iOS platforms with parallel execution support via pytest-xdist.',
    ],
    tags: [
      'Python',
      'Playwright',
      'Pytest',
      'Appium',
      'Jenkins',
      'Grafana',
      'REST APIs',
      'Docker',
      'pytest-xdist',
    ],
  },
  {
    id: 3,
    role:     'Automation Test Engineer',
    company:  'Amdocs Development Centre India LLP — Transport for London (TfL)',
    duration: 'July 2019 – June 2023',
    period:   '4 Years',
    location: 'Pune, INDIA',
    current:  false,
    project:  'XML Data Processing & Automated Reporting — Transport for London',
    highlights: [
      'Developed robust Python automation scripts to parse, process, and transform complex XML files carrying Penalty Charge Notice (PCN) data for vehicles driving through London, generating correctly structured output files to sustain accurate downstream data flow across TfL environments.',
      'Engineered a Python-based Daily Sanity Reporting Service using Pandas and DataFrames, producing fully automated, styled HTML email reports dispatched automatically to all project stakeholders upon completion of each daily sanity execution cycle.',
      'Designed and implemented a Python-based Data Analytics Mailing System to proactively monitor end-to-end data flow across multiple environments, providing real-time visibility into pipeline health and alerting stakeholders to data anomalies or processing failures.',
    ],
    tags: [
      'Python',
      'Pandas',
      'XML Processing',
      'HTML Email Automation',
      'SMTP',
      'DataFrames',
    ],
  },
]

export const skills = [
  {
    category: 'Test Automation',
    color:    'teal',
    items: [
      'Playwright Automation',
      'Pytest Framework',
      'Robot Framework (Currently Learning)',
      'Appium (Android/iOS)',
      'Python Scripting',
    ],
  },
  {
    category: 'AI / LLM Tools',
    color:    'pink',
    items: [
      'Retrieval Augmented Generation',
      'Agentic AI',
      'OpenAI',
      'Anthropic Claude',
      'Cursor / Github Copilot',
    ],
  },
  {
    category: 'CI/CD & DevOps',
    color:    'blue',
    items: [
      'Jenkins',
      'GitLab CI',
      'Docker',
      'Grafana',
      'Allure Reporting',
    ],
  },
  {
    category: 'Platforms & Cloud Farms',
    color:    'amber',
    items: [
      'LambdaTest',
      'BrowserStack',
      'REST APIs',
      'FastAPI',
      'Starlette',
    ],
  },
  {
    category: 'Languages',
    color:    'green',
    items: ['English', 'Marathi', 'Hindi'],
  },
]

export const projects = [
  {
    id:     1,
    name:   'mobileqa-agent',
    desc:   'Production-grade multi-skill Agent-to-Agent (A2A) JSON-RPC automation platform with Orchestrator, Planner, Generator, Executor, and Self-Healer skills for autonomous mobile app test lifecycle management. Includes pgvector RAG, Crawl-First BFS DOM architecture, and multi-framework runners across six stacks.',
    tags:   ['Python', 'Starlette', 'A2A JSON-RPC', 'Appium', 'pgvector', 'OpenAI', 'Anthropic Claude', 'Docker'],
    github: '#',
    demo:   '#',
  },
  {
    id:     2,
    name:   'Playwright + Python Web Automation Framework',
    desc:   'Scalable Playwright + Python framework for automated testing of web applications and REST APIs, delivered while leading a team of 4 QA Engineers at Etisalat. Established coding standards, Page Object Model patterns, and peer-review practices.',
    tags:   ['Python', 'Playwright', 'Pytest', 'REST APIs', 'POM'],
    github: '#',
    demo:   '#',
  },
  {
    id:     3,
    name:   'Mobile App Automation Framework',
    desc:   'Comprehensive mobile automation framework using Pytest + Appium with reliable cross-device coverage across Android and iOS, and parallel execution via pytest-xdist. Integrated with cloud device farms including LambdaTest and BrowserStack.',
    tags:   ['Python', 'Pytest', 'Appium', 'pytest-xdist', 'Android', 'iOS'],
    github: '#',
    demo:   '#',
  },
  {
    id:     4,
    name:   'Jenkins CI/CD + Grafana Monitoring',
    desc:   'End-to-end CI/CD pipelines on Jenkins enabling one-click execution of full test suites, integrated with Grafana dashboards for real-time monitoring of test execution metrics and visualisation of historical trend reports.',
    tags:   ['Jenkins', 'Grafana', 'Docker', 'CI/CD'],
    github: '#',
    demo:   '#',
  },
  {
    id:     5,
    name:   'TfL XML Data Processing & Sanity Reporting',
    desc:   'Python automation to parse and transform complex XML Penalty Charge Notice (PCN) data for Transport for London, plus a Daily Sanity Reporting Service using Pandas that dispatched styled HTML email reports to stakeholders automatically.',
    tags:   ['Python', 'Pandas', 'XML', 'SMTP', 'HTML Email'],
    github: '#',
    demo:   '#',
  },
  {
    id:     6,
    name:   'Data Analytics Mailing System',
    desc:   'Python-based system to proactively monitor end-to-end data flow across multiple TfL environments, providing real-time visibility into pipeline health and alerting stakeholders to data anomalies or processing failures.',
    tags:   ['Python', 'Pandas', 'DataFrames', 'SMTP'],
    github: '#',
    demo:   '#',
  },
]

export const certifications = [
  {
    id:     1,
    name:   'Mastering Generative AI: Agents With RAG And LangChain',
    issuer: 'Certification',
    year:   '',
    link:   '#',
    color:  'teal',
  },
]

export const education = [
  {
    id:     1,
    degree: 'B.Tech / B.E. — Information Technology',
    field:  'Information Technology',
    school: 'MGM Jawaharlal Nehru Engineering College',
    years:  '2019',
  },
]
