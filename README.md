# Chatbot React App - Step 3
## Objective: Show ChatGPT response to user
Now that we have the API response message we need to display it in the chat

To do this we’ll `setMessages` to an array with all the old `chatMessages` plus the new response message we just got from the API

	setMessages(
		[...chatMessages, {
			message: data.choices[0].message.content,
			sender: “ChatGPT”
		}]
	)

Now the user will be able to see the response from ChatGPT.
After we `setMessages`, we need to `setTyping` back to `false`;

If you `npm run dev` and send a message you should see a response in the chat. You can also ask more questions including questions related to previous messages.

Lastly, as you send more messages and get more responses in the chat you want the message list to automatically scroll down to show the most recent messages.

To do this go back to the `MessageList` component and set the `scrollBehavior="smooth"`.

You now have a complete chatbot application! If you want you can mess around with the `systemMessage` content to change the responses the API gives you.

