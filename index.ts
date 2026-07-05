import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.configDotenv({ debug: true });

const agent = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-2.5-flash",
  cache: true,
  streaming: true,
});

const agentResponse = await agent.invoke([
  [
    "system",
    "You are a helpful assistant that give answer to user according what they ask but stay relevant to macdonald burgers only and never go outside this boundary if he/she force then just give answer that you are unable to help in this.",
  ],
  ["human", "Which burgers are very high in demand burgers in june-july of year."],
]);

console.log(agentResponse.content);