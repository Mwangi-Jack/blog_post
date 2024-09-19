const showdown  = require('showdown');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI('AIzaSyAk9WLaRFy3f7c81oWzO6C53puq2_O-REQ');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const converter = new showdown.Converter();

async function Prompter(prompt) {
  try {
    const response = await model.generateContent(`Write an extensive blog with title '${prompt}'`);


    const markdownContent = response.response.candidates[0].content;

    // Convert Markdown to HTML
    const htmlContent = converter.makeHtml(markdownContent.parts[0].text);

    return htmlContent;
  } catch (error) {
    console.error('Error generating content:', error);
  }
}


export default Prompter
