# Chatbot React App - Step 2
## Objective: Set up ChatGPT API & process messages
___

Go to https://platform.openai.com/ and login or sign up

Then go to the top right, click on your profile then and click “View API keys”

Create a new key.

**It will not show the key to you again so make sure to copy the key it gives you.**

Go back to your project and after your imports, add an `API_KEY` variable and make it equal to your key.

After the `handleSend` function, create a new async function called `processMessageToChatGPT` with the parameter chatMessages

In the handleSend function, after you setTyping to true, called the process function by putting:
await processMessageToChatGPT(newMessages);

The structure of our chat messages object is different from the API’s message object so we’ll have to “translate” our messages into a format that the API will accept

Our message object:
{sender: “user” or “ChatGPT”, message: “The message content here”}

API’s message object:
{role: “user” or “assistant”, content: “The message content here”}

So, inside the processMessage function we’ll make an apiMessages array by mapping through each message object in our chatMessages array.

For each messageObject:
let role = “”;
Then if the messageObject sender === “ChatGPT”, make role = “assistant”. If not, make role = “user”
Then return { role: role, content: messageObject.message }

So, this map will format your chat messages in a way the API can understand and then store all those objects in the apiMessages array.

After you make the apiMessages array, you need to make an apiRequestBody object. The model must be “gpt-3.5-turbo” and make messages equal to an array with all your apiMessages:
const apiRequestBody = {
	“model”: “gpt-3.5-turbo”,
	“messages”: [
		...apiMessages
	]
}

We also need to tell the API how we want ChatGPT to talk and respond to the user. For example we can make ChatGPT explain all concepts like you are a software engineer with 10 years of experience or make it speak like a pirate.

To do this, before the apiRequestBody object, make an object called systemMessages with a role of “system” and content equal to however you want ChatGPT to talk
For example:
const systemMessage = {
	role = “system”,
	content: “Explain all concepts like I am 10 years old.”
}

Now go back to your apiRequestBody and before “...apiMessages” add systemMessage, so that it will always be in the message array and ChatGPT will always respond how you want it to respond.

Then, after your systemMessages and apiRequestBody, you will send a request to the API’s chat endpoint.
To do that type:
await fetch(“https://api.openai.com/v1/chat/completions”, {
method: “POST”,
headers: {
		“Authorization”: “Bearer “ + API_KEY,
		“Content-Type”: “application/json”
},
body: JSON.stringify(apiRequestBody)
})

Then you will get the data that the API returns and then get the JSON response.

await fetch(“https://......”, {
	// method, headers, body
}).then((data) => {
	return data.json();
}).then((data) => {
	console.log(data)
});

Now you can npm run dev and if you send a message, in the console you’ll see the response from the API. The actual message that you want is nested inside this response object. 
To see it go inside the “choices” array, inside the first array, inside the message object, in content.

To console just this response message add:
content.log(data.choices[0].message.content)

Now if you send a message, in the console you’ll see the message string that you can display to the user in the next step.
