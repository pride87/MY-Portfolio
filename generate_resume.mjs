import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  
  // Page 1
  let page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();
  
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const darkNavy = rgb(0.04, 0.06, 0.11);
  const textDark = rgb(0.12, 0.16, 0.23);
  const textMuted = rgb(0.4, 0.45, 0.55);
  const primaryBlue = rgb(0.15, 0.45, 0.92);

  let y = height - 35;

  // Header Banner Background
  page.drawRectangle({
    x: 0,
    y: y - 55,
    width: width,
    height: 95,
    color: darkNavy,
  });

  // Name
  page.drawText('ABHISHEK RATHOR', {
    x: 40,
    y: y,
    size: 22,
    font: fontBold,
    color: rgb(1, 1, 1),
  });
  y -= 22;

  // Title
  page.drawText('Aspiring Full Stack MERN Developer | B.Tech CSE (Data Science) 2028', {
    x: 40,
    y: y,
    size: 11,
    font: fontRegular,
    color: rgb(0.4, 0.75, 1),
  });
  y -= 16;

  // Contact / Links
  page.drawText('Greater Noida / Delhi NCR, India  |  rathorabhishek849@gmail.com  |  abhishekratho.me  |  github.com/pride87', {
    x: 40,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.85, 0.9, 0.95),
  });

  y -= 42;

  function drawSectionHeading(headingText) {
    y -= 8;
    page.drawText(headingText.toUpperCase(), {
      x: 40,
      y: y,
      size: 11,
      font: fontBold,
      color: primaryBlue,
    });
    y -= 4;
    page.drawLine({
      start: { x: 40, y: y },
      end: { x: width - 40, y: y },
      thickness: 1,
      color: primaryBlue,
    });
    y -= 14;
  }

  // Summary
  drawSectionHeading('Professional Summary');
  const summaryLines = [
    "Computer Science & Engineering student specializing in Data Science at ABES Engineering College (Graduation: 2028).",
    "Passionate full-stack developer with hands-on proficiency in the MERN stack (React.js, Node.js, Express.js, MongoDB),",
    "RESTful API design, and integrating Python FastAPI microservices with PyTorch deep learning models (EfficientNet, DenseNet).",
    "Delivered freelance client web solutions for ThePhysiFit and competed as a Frontend Developer in Smart India Hackathon.",
    "Seeking a Full Stack MERN Developer Internship to contribute to collaborative, production-grade software teams."
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: 40, y: y, size: 8.8, font: fontRegular, color: textDark });
    y -= 12;
  }

  // Technical Skills
  drawSectionHeading('Technical Skills');
  const skills = [
    ['Frontend Development:', 'React.js, JavaScript (ES6+), HTML5, CSS3, Vite, Responsive Design'],
    ['Backend Development:', 'Node.js, Express.js, RESTful APIs, FastAPI (Python), API Middleware'],
    ['Databases:', 'MongoDB, MySQL, Mongoose ODM'],
    ['Programming Languages:', 'Java & DSA, Python, JavaScript, C, C++'],
    ['AI / Machine Learning:', 'PyTorch, EfficientNet-B0, DenseNet-121, Scikit-learn, Pandas, NumPy, Image Preprocessing'],
    ['Tools & Developer Platforms:', 'Git, GitHub, VS Code, Postman, Jupyter Notebook']
  ];
  for (const [category, itemStr] of skills) {
    page.drawText(category, { x: 40, y: y, size: 8.8, font: fontBold, color: textDark });
    page.drawText(itemStr, { x: 195, y: y, size: 8.8, font: fontRegular, color: textDark });
    y -= 13;
  }

  // Freelance Experience
  drawSectionHeading('Freelance Experience');
  page.drawText('Freelance Web Developer — ThePhysiFit (thephysifit.com)', { x: 40, y: y, size: 9.5, font: fontBold, color: textDark });
  page.drawText('Noida / Greater Noida / Ghaziabad', { x: width - 210, y: y, size: 8.5, font: fontOblique, color: textMuted });
  y -= 13;
  const freelanceBullets = [
    "Contributed to the development, responsive UI styling, and maintenance of the official website for ThePhysiFit clinic.",
    "Structured clear service discovery sections presenting specialized rehabilitation treatments and therapist profiles.",
    "Supported the user-facing online appointment-booking workflow for patients across Delhi NCR.",
    "Ensured cross-browser compatibility, mobile-first responsiveness, and optimized loading performance."
  ];
  for (const bullet of freelanceBullets) {
    page.drawText(`• ${bullet}`, { x: 48, y: y, size: 8.5, font: fontRegular, color: textDark });
    y -= 12;
  }

  // Featured Projects
  drawSectionHeading('Featured Software Projects');
  
  const projects = [
    {
      title: 'AI-Based Plant Disease Detection System (React + Vite, Node.js/Express, FastAPI, PyTorch)',
      bullets: [
        'Architected multi-tier pipeline: React frontend -> Express proxy -> Python FastAPI ML microservice -> PyTorch EfficientNet-B0.',
        'Classifies 38 distinct crop disease categories with 224x224 RGB image preprocessing and standard ImageNet normalization.',
        'Returns real-time diagnosis with confidence gauge, verified symptoms, actionable treatment protocols, and downloadable PDF report.'
      ]
    },
    {
      title: 'AI-Based Chest X-Ray Disease Prediction System (React + Vite, FastAPI, PyTorch DenseNet-121)',
      bullets: [
        'Built full-stack clinical research application inspecting frontal chest radiographs to predict multi-label thoracic pathologies.',
        'Engineered FastAPI backend validating image uploads and loading custom-trained DenseNet-121 checkpoints via MODEL_PATH.',
        'Rendered interactive diagnostic output with pathology probabilities and confidence metrics; built with strict ethical AI principles.'
      ]
    },
    {
      title: 'ChatApp — Real-Time Messaging Platform (MERN Stack: React, Node, Express, MongoDB)',
      bullets: [
        'Developed full-stack web chat application featuring real-time style communication, photo uploading, and user sessions.',
        'Built modular REST APIs for authentication and message history with responsive UI styling for mobile and desktop.'
      ]
    },
    {
      title: 'College Academic Management Portal (MERN Stack: React, Node, Express, MongoDB)',
      bullets: [
        'Designed centralized academic portal for attendance logging, coursework distribution, and assignment management.',
        'Implemented role-based navigation and RESTful data pipelines connecting React components to MongoDB collections.'
      ]
    }
  ];

  for (const proj of projects) {
    page.drawText(`• ${proj.title}`, { x: 40, y: y, size: 9, font: fontBold, color: primaryBlue });
    y -= 12;
    for (const b of proj.bullets) {
      page.drawText(`    - ${b}`, { x: 45, y: y, size: 8.2, font: fontRegular, color: textDark });
      y -= 11;
    }
    y -= 3;
  }

  // Education
  drawSectionHeading('Education');
  page.drawText('B.Tech in Computer Science & Engineering (Specialization: Data Science)', { x: 40, y: y, size: 9.5, font: fontBold, color: textDark });
  page.drawText('2024 – 2028 (Graduation 2028)', { x: width - 170, y: y, size: 8.5, font: fontRegular, color: textMuted });
  y -= 12;
  page.drawText('ABES Engineering College  |  CGPA: 6.7  |  Currently Enrolled', { x: 40, y: y, size: 8.5, font: fontOblique, color: textMuted });
  y -= 14;

  page.drawText('Class XII (Senior Secondary, CBSE) - 67%', { x: 40, y: y, size: 9, font: fontBold, color: textDark });
  page.drawText('Arya Kama Public School, Greater Noida', { x: 260, y: y, size: 8.5, font: fontOblique, color: textMuted });
  y -= 13;

  page.drawText('Class X (Secondary Examination, CBSE) - 64%', { x: 40, y: y, size: 9, font: fontBold, color: textDark });
  page.drawText('Arya Kama Public School, Greater Noida', { x: 260, y: y, size: 8.5, font: fontOblique, color: textMuted });
  y -= 16;

  // Hackathons & Certifications
  drawSectionHeading('Hackathons, Certifications & Problem Solving');
  const achievements = [
    'Smart India Hackathon (SIH): Frontend Developer — Designed responsive React UI components and integrated REST APIs.',
    'Certifications: AWS Academy Cloud Foundations | Troubleshoot Code Using IBM Bob | Getting Started with Artificial Intelligence.',
    'Competitive Programming: CodeChef 183 Problems Solved, 16 Contests (Rating: 931, 1 Star) | Active LeetCode Developer.'
  ];
  for (const item of achievements) {
    page.drawText(`• ${item}`, { x: 40, y: y, size: 8.3, font: fontRegular, color: textDark });
    y -= 12;
  }

  const pdfBytes = await pdfDoc.save();
  fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
  fs.writeFileSync(path.join(process.cwd(), 'public', 'resume.pdf'), pdfBytes);
  console.log('resume.pdf successfully created in public/ (y position ended at: ' + y + ')');
}

generatePDF().catch(console.error);
