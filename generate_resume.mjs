import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();
  
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const darkNavy = rgb(0.04, 0.06, 0.11);
  const textDark = rgb(0.12, 0.16, 0.23);
  const textMuted = rgb(0.4, 0.45, 0.55);
  const primaryBlue = rgb(0.15, 0.45, 0.92);

  let y = height - 40;

  // Header Banner Background
  page.drawRectangle({
    x: 0,
    y: y - 50,
    width: width,
    height: 90,
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
  page.drawText('Frontend Developer | CSE (Data Science) Student', {
    x: 40,
    y: y,
    size: 11,
    font: fontRegular,
    color: rgb(0.4, 0.75, 1),
  });
  y -= 16;

  // Location & Contact
  page.drawText('Greater Noida / Delhi NCR, India  |  github.com/pride87  |  linkedin.com/in/abhishek-rathor-dev/', {
    x: 40,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.85, 0.9, 0.95),
  });

  y -= 40;

  function drawSectionHeading(headingText) {
    y -= 10;
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
    "Computer Science & Engineering student specializing in Data Science at ABES Engineering College.",
    "Passionate about frontend development, web technologies, data analysis, and problem solving.",
    "Proven experience building responsive MERN stack and React.js web applications, and actively participating",
    "in competitive programming and Smart India Hackathon (SIH)."
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: 40, y: y, size: 9, font: fontRegular, color: textDark });
    y -= 12;
  }

  // Education
  drawSectionHeading('Education');
  
  // College
  page.drawText('B.Tech in Computer Science & Engineering (Specialization: Data Science)', { x: 40, y: y, size: 9.5, font: fontBold, color: textDark });
  page.drawText('2024 - 2028', { x: width - 110, y: y, size: 9, font: fontRegular, color: textMuted });
  y -= 12;
  page.drawText('ABES Engineering College  |  CGPA: 6.7', { x: 40, y: y, size: 9, font: fontOblique, color: textMuted });
  y -= 16;

  // Class XII
  page.drawText('Class XII (CBSE) - 67%', { x: 40, y: y, size: 9.5, font: fontBold, color: textDark });
  y -= 12;
  page.drawText('Arya Kama Public School, Greater Noida', { x: 40, y: y, size: 9, font: fontOblique, color: textMuted });
  y -= 16;

  // Class X
  page.drawText('Class X (CBSE) - 64%', { x: 40, y: y, size: 9.5, font: fontBold, color: textDark });
  y -= 12;
  page.drawText('Arya Kama Public School, Greater Noida', { x: 40, y: y, size: 9, font: fontOblique, color: textMuted });
  y -= 18;

  // Technical Skills
  drawSectionHeading('Technical Skills');
  const skills = [
    ['Programming Languages:', 'Java, Python, C, C++, JavaScript'],
    ['Web Development:', 'HTML, CSS, JavaScript, React.js, Node.js, Express.js, REST APIs'],
    ['Databases:', 'MongoDB, MySQL'],
    ['Data Science & ML:', 'Pandas, NumPy, Matplotlib, Scikit-learn, Data Analysis'],
    ['Tools & Platforms:', 'Git, GitHub, VS Code, Jupyter Notebook']
  ];
  for (const [category, itemStr] of skills) {
    page.drawText(category, { x: 40, y: y, size: 9, font: fontBold, color: textDark });
    page.drawText(itemStr, { x: 170, y: y, size: 9, font: fontRegular, color: textDark });
    y -= 13;
  }

  // Key Projects
  drawSectionHeading('Projects');
  
  const projects = [
    {
      title: 'ChatApp (MERN Stack)',
      desc: 'MERN stack-based chat application developed for online real-time communication and photo sharing with responsive UI.'
    },
    {
      title: 'College Academic Portal (MERN Stack)',
      desc: 'Academic management portal supporting attendance tracking, assignment management, and centralized academic activities.'
    },
    {
      title: 'AI Resume Builder (React.js, JavaScript, HTML, CSS)',
      desc: 'AI-focused resume builder interface designed to help users create professional, recruiter-ready resumes.'
    },
    {
      title: 'Food Delivery Application (React.js, CSS)',
      desc: 'Responsive food delivery frontend application with food categories, food cards, navigation, and interactive UI.'
    }
  ];

  for (const proj of projects) {
    page.drawText(`• ${proj.title}`, { x: 40, y: y, size: 9.5, font: fontBold, color: primaryBlue });
    y -= 12;
    page.drawText(`  ${proj.desc}`, { x: 45, y: y, size: 8.5, font: fontRegular, color: textDark });
    y -= 15;
  }

  // Leadership & SIH
  drawSectionHeading('Leadership & Activities');
  page.drawText('Smart India Hackathon (SIH) - Frontend Developer', { x: 40, y: y, size: 9.5, font: fontBold, color: textDark });
  y -= 12;
  const sihBullets = [
    "Designed and developed responsive, reusable frontend components using HTML, CSS, JavaScript, and React.js.",
    "Implemented smooth navigation, integrated frontend with backend APIs, and enhanced UI/UX performance across devices."
  ];
  for (const bullet of sihBullets) {
    page.drawText(`• ${bullet}`, { x: 48, y: y, size: 8.5, font: fontRegular, color: textDark });
    y -= 12;
  }

  // Certifications & Achievements
  drawSectionHeading('Certifications & Achievements');
  const certsAndAchievements = [
    "AWS Academy Graduate – Cloud Foundations",
    "Getting Started with Artificial Intelligence  |  Troubleshoot your code using IBM Bob",
    "CodeChef: 183 Problems Solved, 16 Contests (Rating: 931, 1 Star / Rookie League)",
    "LeetCode Profile: leetcode.com/u/58NiGi24S7/"
  ];
  for (const item of certsAndAchievements) {
    page.drawText(`• ${item}`, { x: 40, y: y, size: 8.5, font: fontRegular, color: textDark });
    y -= 13;
  }

  const pdfBytes = await pdfDoc.save();
  fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
  fs.writeFileSync(path.join(process.cwd(), 'public', 'resume.pdf'), pdfBytes);
  console.log('resume.pdf successfully created in public/');
}

generatePDF().catch(console.error);
