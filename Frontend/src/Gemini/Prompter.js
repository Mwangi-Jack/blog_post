const showdown  = require('showdown');
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Google Generative AI
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
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
