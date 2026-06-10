// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';

export const projectsData = [
  {
    id: 'adaptive-ai-learning-companion',
    title: 'Adaptive AI Learning Companion',
    category: 'AI Application',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    ProjectHeader: {
      title: 'Adaptive AI Learning Companion',
      publishDate: '2025',
      tags: 'FastAPI / React / PostgreSQL / pgvector',
    },
    description: 'A full-stack learning application engineered with semantic search, automated content validation, and a custom personalization engine leveraging Laplace smoothing metrics. It integrates pgvector for context retrieval, tracking information accuracy through vector similarity calculations and cosine distance matching driven by the Gemini API.'
  },
  {
    id: 'tech-ecommerce-shop',
    title: 'Tech E-commerce Shop (Singitronic)',
    category: 'Web Application',
    img: WebImage1,
    ProjectHeader: {
      title: 'Tech E-commerce Shop (Singitronic)',
      publishDate: '2025',
      tags: 'Next.js / Node.js / MySQL / Prisma / Tailwind',
    },
    description: 'A full-featured eCommerce platform for electronics with a powerful admin dashboard. Built from scratch with authentication, product management, and order handling. Includes advanced testing, real database integration, and full documentation based on real software engineering workflows.'
  },
  {
    id: 'lip-reader-ai',
    title: 'Lip Reader A.I',
    category: 'AI / Computer Vision',
    img: WebImage2,
    ProjectHeader: {
      title: 'Lip Reader A.I',
      publishDate: '2025',
      tags: 'PyTorch / MediaPipe / OpenCV / Python',
    },
    description: 'An A.I.-based lip-reading application that performs silent speech recognition using computer vision. It captures live video from your webcam, analyzes facial and lip movements, and predicts spoken words using a pretrained deep learning model.'
  },
  {
    id: 'ai-link-summarizer',
    title: 'A.I. Link Summarizer',
    category: 'Web Application',
    img: UIImage1,
    ProjectHeader: {
      title: 'A.I. Link Summarizer',
      publishDate: '2025',
      tags: 'Next.js / Node.js / OpenAI API / Tailwind',
    },
    description: 'A modern web tool that takes a URL and returns a short, intelligent summary using OpenAI’s language model. Built with a clean UI using Next.js and integrated with OpenAI’s API for real-time content summarization.'
  }
];
