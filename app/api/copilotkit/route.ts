/** @format */

import { NextRequest, NextResponse } from "next/server";
import { resumeData } from "@/app/data/resume";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const lastMessage = messages[messages.length - 1];
    const userMessage = lastMessage.content.toLowerCase();

    // create a comprehensive context about the resume
    const resumeContext = `
You are ${
      resumeData.personalInfo.name
    }'s AI assistant. You have access to their complete resume and can answer questions about their background, skills, experience, and projects.

RESUME INFORMATION:
- Name: ${resumeData.personalInfo.name}
- Title: ${resumeData.personalInfo.title}
- Summary: ${resumeData.summary}

TECHNICAL SKILLS: ${resumeData.skills.technical.join(", ")}
SOFT SKILLS: ${resumeData.skills.soft.join(", ")}
TOOLS: ${resumeData.skills.tools.join(", ")}

EXPERIENCE:
${resumeData.experience
  .map(
    (exp) =>
      `- ${exp.position} at ${exp.company} (${exp.duration})
   Location: ${exp.location}
   Technologies: ${exp.technologies.join(", ")}
   Key responsibilities: ${exp.description.join("; ")}`
  )
  .join("\n\n")}

EDUCATION:
${resumeData.education
  .map(
    (edu) =>
      `- ${edu.degree} from ${edu.institution} (${edu.duration})${
        edu.gpa ? `, GPA: ${edu.gpa}` : ""
      }`
  )
  .join("\n")}

PROJECTS:
${resumeData.projects
  .map(
    (proj) =>
      `- ${proj.name}: ${proj.description}
   Technologies: ${proj.technologies.join(", ")}
   Highlights: ${proj.highlights.join("; ")}
   ${proj.github ? `GitHub: ${proj.github}` : ""}
   ${proj.live ? `Live Demo: ${proj.live}` : ""}`
  )
  .join("\n\n")}

${
  resumeData.certifications
    ? `CERTIFICATIONS:
${resumeData.certifications
  .map((cert) => `- ${cert.name} from ${cert.issuer} (${cert.date})`)
  .join("\n")}`
    : ""
}

CONTACT INFORMATION:
- Email: ${resumeData.personalInfo.email}
- Location: ${resumeData.personalInfo.location}
${
  resumeData.personalInfo.linkedin
    ? `- LinkedIn: ${resumeData.personalInfo.linkedin}`
    : ""
}
${
  resumeData.personalInfo.github
    ? `- GitHub: ${resumeData.personalInfo.github}`
    : ""
}
${
  resumeData.personalInfo.website
    ? `- Website: ${resumeData.personalInfo.website}`
    : ""
}

Based on this information, provide helpful, accurate, and professional responses about ${
      resumeData.personalInfo.name
    }'s background, skills, experience, and projects. Be conversational but professional.
`;

    // generate contextual response based on user message
    let response = "";

    if (
      userMessage.includes("skill") ||
      userMessage.includes("technology") ||
      userMessage.includes("tech")
    ) {
      response = `I have expertise in various technologies and skills:

<b>Technical Skills:</b> ${resumeData.skills.technical.join(", ")}
<b>Tools & Platforms:</b> ${resumeData.skills.tools.join(", ")}
<b>Soft Skills:</b> ${resumeData.skills.soft.join(", ")}

I'm particularly strong in modern web development with React, Next.js, and TypeScript. I also have experience with backend technologies like Node.js and Python. What specific skills or technologies would you like to know more about me?`;
    } else if (
      userMessage.includes("experience") ||
      userMessage.includes("work") ||
      userMessage.includes("job")
    ) {
      response = `Here's my professional experience:

${resumeData.experience
  .map(
    (exp) =>
      `<b>${exp.position} at ${exp.company}</b> (${exp.duration})
  Location: ${exp.location}
  Technologies: ${exp.technologies.join(", ")}
   
  Key responsibilities:
  ${exp.description.map((desc) => `• ${desc}`).join("\n")}`
  )
  .join("\n\n")}

I've worked on various projects involving web development, UI/UX design, and full-stack applications. Would you like to know more about any specific role or project?`;
    } else if (
      userMessage.includes("project") ||
      userMessage.includes("portfolio")
    ) {
      response = `Here are some of my key projects:

${resumeData.projects
  .map(
    (proj) =>
      `<b>${proj.name}</b>
  ${proj.description}
   
  Technologies: ${proj.technologies.join(", ")}
   
  Key features:
  ${proj.highlights.map((highlight) => `• ${highlight}`).join("\n")}
   
  ${proj.github ? `GitHub: ${proj.github}` : ""}
  ${proj.live ? `Live Demo: ${proj.live}` : ""}`
  )
  .join("\n\n")}

I'm particularly proud of my portfolio website which features AI chat integration and modern design principles. Would you like to know more about any specific project?`;
    } else if (
      userMessage.includes("education") ||
      userMessage.includes("degree") ||
      userMessage.includes("university")
    ) {
      response = `My educational background:

${resumeData.education
  .map(
    (edu) =>
      `<b>${edu.degree}</b> from ${edu.institution}
  Duration: ${edu.duration}
  ${edu.gpa ? `GPA: ${edu.gpa}` : ""}`
  )
  .join("\n\n")}

${
  resumeData.certifications
    ? `<b>Certifications:</b>
${resumeData.certifications
  .map((cert) => `• ${cert.name} from ${cert.issuer} (${cert.date})`)
  .join("\n")}`
    : ""
}

My education has provided me with a strong foundation in computer science and software development principles.`;
    } else if (
      userMessage.includes("contact") ||
      userMessage.includes("email") ||
      userMessage.includes("reach")
    ) {
      response = `You can reach me through:

<b>Email:</b> ${resumeData.personalInfo.email}
<b>Location:</b> ${resumeData.personalInfo.location}
${
  resumeData.personalInfo.linkedin
    ? `<b>LinkedIn:</b> ${resumeData.personalInfo.linkedin}`
    : ""
}
${
  resumeData.personalInfo.github
    ? `<b>GitHub:</b> ${resumeData.personalInfo.github}`
    : ""
}
${
  resumeData.personalInfo.website
    ? `<b>Website:</b> ${resumeData.personalInfo.website}`
    : ""
}

I'm always open to new opportunities and collaborations. Feel free to reach out!`;
    } else if (
      userMessage.includes("hello") ||
      userMessage.includes("hi") ||
      userMessage.includes("hey")
    ) {
      response = `Hello! I'm ${resumeData.personalInfo.name}'s AI assistant. I'm here to help you learn more about my background, skills, experience, and projects.

I can tell you about:
• My technical skills and expertise
• My work experience and roles
• My projects and portfolio
• My education and certifications
• How to get in touch

What would you like to know about?`;
    } else {
      response = `I understand you're asking about "${userMessage}". Based on my background as ${resumeData.personalInfo.title}, I can help you with information about:

• <b>Skills & Technologies:</b> My technical expertise and tools I use
• <b>Experience:</b> My work history and professional roles
• <b>Projects:</b> My portfolio and key projects I've worked on
• <b>Education:</b> My academic background and certifications
• <b>Contact:</b> How to get in touch with me

Could you be more specific about what you'd like to know? I'm here to help!`;
    }

    const aiResponse = {
      role: "assistant",
      content: response,
    };

    // simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json([aiResponse]);
  } catch (error) {
    console.error("CopilotKit API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
