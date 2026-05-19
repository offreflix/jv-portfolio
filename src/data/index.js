export const experiences = [
  {
    id: 1,
    company: 'CI&T',
    role: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    location: 'Campinas, SP',
    start: { en: 'Apr 2025', pt: 'Abr 2025' },
    end: null,
    current: true,
    techs: ['TypeScript', 'Python', 'React', 'NestJS', 'AI Agents', 'Scrum'],
    bullets: {
      en: [
        'Building scalable applications with TypeScript, Python and React, focusing on microservices and high availability.',
        'Collaborating with international teams (Europe) in Scrum ceremonies fully in English.',
        'Developing AI agents with Python for process automation and operational efficiency improvements.',
        'Enforcing code quality through Code Review, automated testing and clean architecture.',
      ],
      pt: [
        'Desenvolvimento de aplicações escaláveis com TypeScript, Python e React, focando em microserviços e alta disponibilidade.',
        'Colaboração com times internacionais (Europa) em cerimônias Scrum totalmente em inglês.',
        'Desenvolvimento de agentes de IA com Python para automação de processos e melhoria da eficiência operacional.',
        'Foco em qualidade de código: Code Review, testes automatizados e arquitetura limpa.',
      ],
    },
  },
  {
    id: 2,
    company: 'Fractal',
    role: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    location: '',
    start: { en: 'Dec 2024', pt: 'Dez 2024' },
    end: { en: 'Apr 2025', pt: 'Abr 2025' },
    current: false,
    techs: ['React', 'Node.js', 'Agile'],
    bullets: {
      en: [
        'Improved existing systems with full-stack features (frontend and backend).',
        'Built internal portals for app distribution, optimizing user support workflows.',
        'Collaborated with stakeholders and cross-functional teams in agile environments.',
      ],
      pt: [
        'Melhoria de sistemas existentes com recursos de front-end e back-end.',
        'Desenvolvimento de portais internos para distribuição de aplicativos, otimizando o suporte ao usuário.',
        'Colaboração com stakeholders e equipes multifuncionais em ambientes ágeis.',
      ],
    },
  },
  {
    id: 3,
    company: 'Solinski Corp',
    role: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    location: '',
    start: { en: 'Aug 2024', pt: 'Ago 2024' },
    end: { en: 'Dec 2024', pt: 'Dez 2024' },
    current: false,
    techs: ['Next.js', 'Docker', 'Jenkins', 'GitHub Actions', 'Nginx'],
    bullets: {
      en: [
        'Delivered a complete Next.js system in 2 weeks, managing business logic and frontend/backend integration.',
        'Built CI/CD pipelines with Docker, Jenkins and GitHub Actions for dev, staging and production environments.',
        'Configured and managed servers (Apache2, Nginx, Ubuntu Linux) for robustness and availability.',
      ],
      pt: [
        'Entrega completa de sistema Next.js em 2 semanas, gerenciando lógica de negócio e integração entre front-end e back-end.',
        'Criação de pipelines de deploy com Docker, Jenkins e GitHub Actions para múltiplos ambientes (dev, teste e produção).',
        'Configuração e gerenciamento de servidores (Apache2, Nginx, Ubuntu Linux) para garantir disponibilidade.',
      ],
    },
  },
  {
    id: 4,
    company: 'Solinski Corp',
    role: { en: 'Frontend Developer', pt: 'Desenvolvedor Front-End' },
    location: '',
    start: { en: 'Aug 2022', pt: 'Ago 2022' },
    end: { en: 'Aug 2024', pt: 'Ago 2024' },
    current: false,
    techs: ['React', 'Vue.js', 'React Query', 'TypeScript', 'CI/CD'],
    bullets: {
      en: [
        'Maintained Vue.js legacy systems: bug fixes and new feature implementation.',
        'Led a React POC that became a final product — reduced load time from 13s to 5s via API optimization.',
        'Implemented React Query, Tanstack Table, Yup and Context API for optimal user experience.',
        'Deployed CI/CD pipelines with Jenkins and GitHub Actions for automated releases.',
      ],
      pt: [
        'Manutenção de sistemas legados em Vue.js: correção de falhas e implementação de novas features.',
        'Liderança de POC em React que evoluiu para produto final — redução de tempo de carga de 13s para 5s via otimização de API.',
        'Implementação de React Query, Tanstack Table, Yup e Context API para otimização da experiência do usuário.',
        'Implantação de pipelines CI/CD com Jenkins e GitHub Actions para deploys automatizados.',
      ],
    },
  },
];

export const education = [
  {
    id: 1,
    institution: 'FIAP',
    degree: { en: "Associate's Degree", pt: 'Tecnólogo' },
    field: { en: 'Systems Analysis & Development', pt: 'Análise e Desenvolvimento de Sistemas' },
    start: { en: 'Aug 2024', pt: 'Ago 2024' },
    end: { en: 'Aug 2026', pt: 'Ago 2026' },
    current: true,
  },
];

export const projects = [
  {
    name: 'JV Portfolio',
    slug: null,
    githubSlug: 'https://github.com/offreflix/jv-portfolio',
    technologies: ['React', 'SCSS', 'i18next', 'React Router', 'EmailJS'],
    description: 'Este portfólio — desenvolvido do zero com React, SCSS e suporte a dois idiomas.',
    about:
      'Site de portfólio pessoal construído com React e SCSS puro, sem frameworks de UI. Conta com internacionalização (PT/EN) via i18next, roteamento com React Router, formulário de contato integrado ao EmailJS e design responsivo com tema escuro. Cada seção — Home, About, Skills, Experience, Projects, Resume e Contact — foi desenvolvida com atenção a performance, acessibilidade e consistência visual.',
    image: '/images/portfolio.png',
    id: 1,
    english: {
      description: 'This portfolio — built from scratch with React, SCSS and bilingual support.',
      about:
        'Personal portfolio site built with React and plain SCSS, no UI frameworks. Features internationalization (PT/EN) via i18next, routing with React Router, contact form integrated with EmailJS, and responsive dark-theme design. Each section — Home, About, Skills, Experience, Projects, Resume and Contact — was crafted with attention to performance, accessibility and visual consistency.',
    },
  },
  {
    name: 'JunkBlog',
    slug: 'https://graphql-nextjs-blog.vercel.app/',
    githubSlug: 'https://github.com/Reflixzinhu/graphql-nextjs-blog',
    technologies: ['Next.js', 'React', 'GraphQL', 'Tailwind CSS'],
    description: 'Um blog com posts recentes, categorias, comentários e artigos em Markdown.',
    about:
      'Aplicação de blog construída com Next.js e GraphQL. Conta com posts recentes, categorias, comentários, informações do autor e artigos escritos em Markdown. Design responsivo com Tailwind CSS.',
    image: '/images/junkblog.png',
    id: 2,
    english: {
      description: 'A blog with recent posts, categories, comments, and Markdown articles.',
      about:
        'Blog application built with Next.js and GraphQL. Features recent posts, categories, comments, author information and Markdown articles. Responsive design with Tailwind CSS.',
    },
  },
  {
    name: 'JM Store',
    slug: 'https://jm-store.vercel.app/',
    githubSlug: 'https://github.com/Reflixzinhu/ecommerce-stripe',
    technologies: ['Next.js', 'React', 'Sanity', 'Stripe', 'Context API'],
    description: 'E-commerce com pagamento funcional via Stripe.',
    about:
      'E-commerce com pagamento funcional via Stripe, feito com Next.js e totalmente responsivo. Inclui rotas por produto, showcase de itens relacionados, carrinho de compras com cálculo de preços e integração direta com o checkout do Stripe.',
    image: '/images/jmstore.png',
    id: 3,
    english: {
      description: 'E-commerce with functional payments via Stripe.',
      about:
        'E-commerce site with functional Stripe payments, built with Next.js and fully responsive. Includes product routes, related items showcase, shopping cart with price calculation and direct Stripe checkout integration.',
    },
  },
];

export const resumeViewLink =
  'https://drive.google.com/file/d/1q9zMsHptYlXArTuTfuSNS41pFG0jKX4W/view?usp=sharing';
export const resumeDownloadLink =
  'https://drive.google.com/u/0/uc?id=1q9zMsHptYlXArTuTfuSNS41pFG0jKX4W&export=download';

export const skillsData = [
  { title: 'React / Next.js', name: 'react', percent: '88%' },
  { title: 'TypeScript', name: 'typescript', percent: '80%' },
  { title: 'Python', name: 'python', percent: '78%' },
  { title: 'Node.js', name: 'nodejs', percent: '72%' },
  { title: 'LangChain / RAG', name: 'langchain', percent: '75%' },
  { title: 'Docker / Kubernetes', name: 'docker', percent: '65%' },
];
