import "dotenv/config";
import { tavily } from "@tavily/core";

const tvly = tavily({
    apiKey: process.env.TAVILY_API_KEY
});

export async function run({query}) {
    const response = await tvly.search(query);
    console.log(response);
    return "Response Data send sucessfully !"
}
