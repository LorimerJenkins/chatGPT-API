const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion() {
    try {
        const completion = await openai.createCompletion({
            model: "gpt3",
            prompt: 'hey there',
            max_tokens: 60
        });

        console.log(completion.data.choices[0].text);
    } catch (err) {
        console.error(err.response.data);
    }
}

runCompletion();
