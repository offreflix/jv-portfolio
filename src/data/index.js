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
    name: 'JunkBlog',
    slug: 'https://graphql-nextjs-blog.vercel.app/',
    githubSlug: 'https://github.com/Reflixzinhu/graphql-nextjs-blog',
    technologies: ['Next.Js', 'React.Js', 'GraphQl', 'Tailwind CSS'],
    description:
      'Um blog com posts recentes, categorias, comentários, informação do autor e artigos usando Markdown.',
    about: 'Uma aplicação ',
    image:
      'https://media.discordapp.net/attachments/958055531774361630/989601811637895198/unknown.png',
    id: 1,
    english: {
      description:
        'A blog with recent posts, categories, comments, author information and articles using Markdown.',
      about: '',
    },
  },
  {
    name: 'JM Store',
    slug: 'https://jm-store.vercel.app/',
    githubSlug: 'https://github.com/Reflixzinhu/ecommerce-stripe',
    technologies: ['Next.Js', 'React.Js', 'Sanity', 'Stripe', 'ContextAPI'],
    description: 'Um aplicação de E-commerce com pagamentos utilizando Stripe.',
    about:
      'Um site de E-commerce com pagamento funcional utilizando Stripe. O projeto foi feito com Next.Js, para estilizar utilizei Tailwind e é totalmente responsivo, funcionando em todas os tamanhos de tela. Rotas para os produtos, showcase de produtos relacionados, função de adicionar um ou vários e carrinho de compras que calcula os preços e envia automaticamente para o Stripe e assim proceder com o pagamento.',
    image:
      'https://cdn.discordapp.com/attachments/958055531774361630/989563861315248218/unknown.png',
    id: 2,
    english: {
      description: 'An E-commerce application with payments using Stripe.',
      about:
        'An E-commerce site with functional payment using Stripe. The project was made with Next.Js, for styling I used Tailwind to style it and make it fully responsive, working on all screen sizes. Routes to products, showcase of related products, function to add one or several products and shopping cart that calculates prices and automatically sends them to Stripe to proceed with the payment.',
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
