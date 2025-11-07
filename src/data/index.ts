import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Home',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Programs',
    href: 'programs',
  },
  {
    title: 'Impact',
    href: 'impact',
  },
  {
    title: 'Partner',
    href: 'partner',
  },
  {
    title: 'FAQ',
    href: 'faq',
  },
  {
    title: 'Blog',
    href: 'blog',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

// Hero Section Data
export const HERO_DATA = {
  title: 'Building Dignity Through Universal Basic Income',
  subtitle: 'Empowering lives in Argentina and Ukraine with predictable support, skills, and opportunity. At 0xMintyn Foundation, we believe financial security fuels dignity and innovation.',
  stats: 'Join 12,450+ lives already transformed through our UBI programs across Argentina and Ukraine.',
  ctaPrimary: 'Join the Movement',
  ctaSecondary: 'Donate Now',
};

// About Section Data
export const ABOUT_DATA = {
  title: 'About Us',
  mission: 'At 0xMintyn Foundation, we believe financial security fuels dignity and innovation. Our mission is to provide Universal Basic Income (UBI) that not only covers essential needs but also sparks creativity, skills, and entrepreneurship in Argentina and Ukraine.',
  vision: {
    title: 'Our Vision',
    text: 'A world where financial security enables human potential and innovation.',
  },
  approach: {
    title: 'Our Approach',
    text: 'Blockchain transparency meets local partnerships for measurable impact.',
  },
  impact: {
    title: 'Our Impact',
    text: 'We support both unskilled and skilled individuals by delivering:',
    points: [
      'Monthly guaranteed stipends for survival and stability',
      '$2,000 one-time UBI to poor unskilled individuals for their transition into skilled professions',
      '$1,000 monthly UBI to skilled individuals to develop digital products like software, ebooks, and courses',
    ],
  },
};

// Programs Data
export const PROGRAMS_DATA = [
  {
    title: 'Monthly Support',
    category: 'Essential Living',
    frequency: 'Monthly',
    description: 'Reliable monthly stipends cover essentials like food, healthcare, and utilities—giving families stability and the dignity to plan ahead.',
    features: [
      'Fixed monthly transfers via secure digital wallets',
      'Financial literacy resources and local partner support',
      'Transparent, auditable distributions on-chain',
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Skills Grant',
    category: 'Career Change',
    frequency: 'One-time',
    amount: '$2,000',
    description: 'Targeted grants help unskilled individuals transition into sustainable professions through accredited training and apprenticeships.',
    features: [
      'Tuition and materials for certified programs',
      'Mentorship and job placement support',
      'Milestone-based disbursement for accountability',
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Digital Creators',
    category: 'Innovation',
    frequency: 'Monthly',
    amount: '$1,000',
    description: 'Supports skilled individuals building digital products—software, ebooks, courses—until completion and launch.',
    features: [
      'Monthly UBI to cover living costs while building',
      'Access to mentors, reviewers, and distribution support',
      'Outcome tracking with demo and release milestones',
    ],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Startup UBI',
    category: 'Entrepreneurship',
    frequency: 'Team Support',
    amount: '$1,000 monthly per founder',
    description: 'Group-based UBI for founders building early-stage ventures—focus on innovation while we help cover essentials.',
    features: [
      'Team eligibility, milestone check-ins, and demo days',
      'Connections to incubators and early customers',
      'Graduation upon launch or revenue targets',
    ],
    number: '04.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Local Hubs & Community Care',
    category: 'Physical Support Centers',
    frequency: 'Ongoing',
    locations: 'Buenos Aires, Córdoba, and Kyiv',
    description: 'Community centers in Buenos Aires, Córdoba, and Kyiv provide digital wallet help, psychosocial care, training access, and community events.',
    features: [
      'On-site support for onboarding and cash-out',
      'Workshops: finance, digital tools, entrepreneurship',
      'Care referrals with trusted local partners',
    ],
    number: '05.',
    classes: 'border-t border-gray-1/50',
  },
];

// Impact Data
export const IMPACT_DATA = {
  title: 'Our Impact',
  subtitle: 'Every number represents a life transformed: children in school, families fed, and new ventures launched. Our measurable impact across Argentina and Ukraine demonstrates the power of Universal Basic Income to create lasting change.',
  metrics: [
    { value: '12,450+', label: 'Lives Transformed' },
    { value: '€85,000', label: 'Monthly Distribution' },
    { value: '1,320+', label: 'Program Graduates' },
    { value: '95%', label: 'Success Rate' },
  ],
  successStories: [
    {
      type: 'Skills Grant Success',
      quote: "Thanks to 0xMintyn, I transitioned from unskilled work to a skilled trade. The $2000 grant was life-changing. Now I'm a certified electrician earning 3x more than before.",
      author: 'Maria Rodriguez',
      location: 'Córdoba, Electrician',
    },
    {
      type: 'Digital Creator Success',
      quote: 'The $1000 monthly support allowed me to finish my first ebook and launch my online course. Now I earn $3,500/month teaching others.',
      author: 'Alex Petrov',
      location: 'Kyiv, Course Creator',
    },
    {
      type: 'Startup Success',
      quote: 'With the monthly UBI support, my team and I could focus on building our app. We just secured $50K in funding and hired 3 more people.',
      author: 'Carlos Mendez',
      location: 'Buenos Aires, Startup Founder',
    },
  ],
};

// Partner Section Data
export const PARTNER_DATA = {
  title: 'Partner With Us',
  subtitle: 'We collaborate with NGOs, local governments, and technology partners to expand access to UBI and entrepreneurship opportunities. Join us in building a more equitable future.',
  opportunities: [
    'Sponsor a UBI program in your region',
    'Provide training, mentorship, or startup incubation',
    'Support through donations or volunteering',
  ],
  engagement: {
    volunteer: 'Mentor digital creators or assist in our hubs',
    subscribe: 'Get monthly updates and impact reports',
    share: 'Help us spread the word about UBI',
  },
  contact: {
    email: 'hello@0xmintyn.org',
    locations: 'Buenos Aires · Córdoba · Kyiv',
    social: '@0xmintyn (Twitter/X), LinkedIn, GitHub',
  },
};

// FAQ Data
export const FAQ_DATA = [
  {
    question: 'Who qualifies for UBI?',
    answer: 'Unskilled individuals below poverty thresholds, skilled individuals developing digital assets, and startup founding teams.',
  },
  {
    question: 'How are payments made?',
    answer: 'Through secure blockchain-powered digital wallets, with cash-out options available via local partners.',
  },
  {
    question: 'What makes 0xMintyn different?',
    answer: 'We combine blockchain transparency with local partnerships, ensuring trust, accessibility, and measurable impact.',
  },
  {
    question: 'Where are your programs available?',
    answer: 'Our programs operate in Argentina (Buenos Aires, Córdoba) and Ukraine (Kyiv), with physical hubs in each location.',
  },
  {
    question: 'How can I apply for a program?',
    answer: 'Visit our local hubs in Buenos Aires, Córdoba, or Kyiv for application assistance and support, or contact us through our website.',
  },
];

// Contact Form Data
export const CONTACT_FORM_FIELDS = [
  { label: 'Name', name: 'name', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Email', name: 'email', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'email', required: true },
  { label: 'Subject', name: 'subject', classes: '', required: true },
];

export const CONTACT_FORM_DEFAULT_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

// Contact Information
export const CONTACT_INFO = {
  email: 'hello@0xmintyn.com',
  social: {
    twitter: '@0xmintyn',
    linkedin: 'linkedin.com/company/0xmintyn',
    github: 'github.com/0xmintyn',
    discord: 'discord.gg/0xmintyn',
  },
  locations: ['Buenos Aires, Argentina', 'Córdoba, Argentina', 'Kyiv, Ukraine'],
};

// Blog Data
export const BLOG_DATA = [
  {
    id: '1',
    title: 'The Future of Universal Basic Income: Lessons from Argentina and Ukraine',
    excerpt: 'How blockchain technology and local partnerships are transforming UBI delivery, creating measurable impact across two continents.',
    content: `# The Future of Universal Basic Income: Lessons from Argentina and Ukraine

Universal Basic Income (UBI) has long been discussed as a potential solution to economic inequality, but implementation has been challenging. At 0xMintyn Foundation, we're proving that UBI can work—and work well—when combined with blockchain technology and strong local partnerships.

## The Challenge

Traditional UBI programs face several obstacles:
- Lack of transparency in fund distribution
- High administrative costs
- Difficulty reaching the most vulnerable populations
- Limited accountability and impact measurement

## Our Solution

By leveraging blockchain technology, we've created a transparent, efficient system that ensures every dollar reaches its intended recipient. Our digital wallet infrastructure allows for:
- Real-time tracking of distributions
- Reduced administrative overhead
- Direct transfers to beneficiaries
- Immutable records of all transactions

## Impact in Argentina

In Buenos Aires and Córdoba, our programs have reached over 8,000 individuals. The results speak for themselves:
- 95% of recipients report improved financial stability
- 1,200+ individuals have transitioned from unskilled to skilled work
- Local businesses report increased economic activity

## Impact in Ukraine

Despite ongoing challenges, our Kyiv hub has supported over 4,000 individuals:
- Digital creators have launched 150+ products
- Startup teams have secured $2M+ in funding
- Community resilience has strengthened

## Looking Forward

The success of our programs demonstrates that UBI, when properly implemented, can:
- Reduce poverty measurably
- Enable career transitions
- Support innovation and entrepreneurship
- Build stronger communities

As we expand, we're committed to sharing our learnings and collaborating with partners worldwide to make UBI a reality for more people.`,
    author: '0xMintyn Foundation Team',
    date: '2025-01-15',
    category: 'Impact',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'From Unskilled to Skilled: How $2,000 Grants Transform Lives',
    excerpt: 'Meet Maria, Carlos, and others who used our Skills Grant program to build new careers and secure their futures.',
    content: `# From Unskilled to Skilled: How $2,000 Grants Transform Lives

Our Skills Grant program provides one-time $2,000 grants to help unskilled individuals transition into sustainable professions. Here are the stories of transformation.

## Maria's Story: From Day Laborer to Certified Electrician

Maria Rodriguez worked as a day laborer in Córdoba, earning barely enough to feed her family. When she heard about our Skills Grant program, she saw an opportunity.

"I always wanted to learn a trade, but I couldn't afford to stop working," Maria explains. "The $2,000 grant covered my training, tools, and living expenses for three months."

Today, Maria is a certified electrician earning three times her previous income. She's now training her daughter in the same trade.

## Carlos's Journey: Construction Worker to Software Developer

Carlos Mendez spent 15 years in construction before applying for our program. With the grant, he enrolled in a coding bootcamp.

"The transition was tough, but the support made it possible," Carlos says. "Now I work remotely for a tech company and earn more than I ever did in construction."

Carlos has since launched his own startup, creating software for construction companies—combining his old knowledge with new skills.

## The Program Structure

Our Skills Grant program includes:
1. **Assessment**: Identifying skills and career goals
2. **Training Selection**: Matching individuals with accredited programs
3. **Milestone-Based Disbursement**: Payments tied to progress
4. **Mentorship**: Ongoing support from industry professionals
5. **Job Placement**: Connections with employers

## Results

- 1,320+ individuals have completed the program
- 95% success rate in career transitions
- Average income increase of 250%
- 80% report improved quality of life

## How to Apply

Visit our local hubs in Buenos Aires, Córdoba, or Kyiv to learn more and start your application. Our team will guide you through the process and help identify the best training path for your goals.`,
    author: 'Impact Team',
    date: '2025-01-10',
    category: 'Success Stories',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    readTime: '6 min read',
  },
  {
    id: '3',
    title: 'Blockchain Transparency: Building Trust in UBI Distribution',
    excerpt: 'How we use blockchain technology to ensure every donation reaches its intended recipient, with full transparency and accountability.',
    content: `# Blockchain Transparency: Building Trust in UBI Distribution

Trust is the foundation of any successful UBI program. At 0xMintyn Foundation, we've built that trust through blockchain technology, ensuring complete transparency in every transaction.

## The Trust Problem

Traditional charity and UBI programs often struggle with:
- Donor skepticism about where funds go
- High administrative costs
- Lack of visibility into impact
- Difficulty tracking individual recipients

## Our Blockchain Solution

Every transaction in our system is recorded on the blockchain, creating an immutable, transparent ledger that anyone can verify.

### How It Works

1. **Digital Wallets**: Each recipient receives a secure digital wallet
2. **Smart Contracts**: Automated distribution based on program rules
3. **Public Ledger**: All transactions are publicly verifiable
4. **Real-Time Tracking**: Donors can see their impact immediately

## Benefits

### For Recipients
- Direct transfers without intermediaries
- Lower fees than traditional banking
- Immediate access to funds
- Privacy protection

### For Donors
- Complete transparency
- Real-time impact tracking
- Reduced administrative overhead
- Confidence in fund usage

### For the Foundation
- Lower operational costs
- Automated compliance
- Enhanced accountability
- Scalable infrastructure

## Real-World Impact

Our blockchain infrastructure has enabled:
- 12,450+ direct transfers
- €85,000 monthly distribution
- 0% fraud rate
- 95% recipient satisfaction

## The Technology

We use a combination of:
- **Ethereum**: For smart contract execution
- **Layer 2 Solutions**: For lower transaction costs
- **Digital Identity**: For secure, privacy-preserving verification
- **Mobile Apps**: For easy access and cash-out

## Looking Forward

As blockchain technology evolves, we're exploring:
- Cross-border payments
- Automated impact measurement
- Integration with traditional banking
- Expanded program offerings

## Join Us

If you're interested in supporting transparent, accountable UBI distribution, consider partnering with us or making a donation. Every contribution is tracked and verified on the blockchain.`,
    author: 'Technology Team',
    date: '2025-01-05',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    readTime: '7 min read',
  },
];
