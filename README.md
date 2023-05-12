# Chatbot React App - Step 1
## Objective: Create chat UI & manage messages state

Go into your App.jsx folder and delete everything but the outermost div.

`import @chatscope/chat-ui-kit-styles/dist/default/styles.min.css`

`import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from @chatscope/chat-ui-kit-react`

Add a new div to the App div and styling to it:
	
    position: "relative",
	height: "800px",
	width: "700px"

In that div add a `MainContainer` component. All the other components will be in this main container.

Inside the `MainContainer` add a `ChatContainer` and inside there add a `MessageList` component.

At the top of your App component, before the return, add a useStates. This array will store our messages:

    const [messages, setMessages] = useState([
        {
            message: "Hello, I am ChatGPT!", 
            sender: "ChatGPT"
        }
    ])

In the `MessageList`, map through the messages array and for each message return a `Message` component with a `key={index}` and `model={message}`

After the `MessageList`, add a `MessageInput` component. This is where the user will input text and send messages.

Give the `MessageInput` a `placeholder` of "Type message here" and add an onSend event that will called a function called `handleSend`

After your messages state, create an async arrow function called `handleSend`. Pass the parameter `message`. 

Inside the function create an object called `newMessage` with a `message` equal to message, `sender` equal to “user”, and `direction` equal to “outgoing”

Create an array called `newMessages` with all the old messages in the state and the `newMessage`

    const newMessages = [...messages, newMessage];

Then with that `newMessages` array update the messages state

    setMessages(newMessages)

Now if you `npm run dev` and send a message it will show up in the chat on the right.

Before you move on to actually processing the message to ChatGPT and getting a response you want to set a typing indicator that tells the user that “chatgpt is typing”.

To do that create a new state called typing with an initial state of `false`

    const [typing, setTyping] = useState(false);

Then back in the `handleSend` function after you `setMessage` to newMessage, `setTyping` to true;

    setTyping(false);

When typing is true we want to show a component in the chat

So, down in the `messageList` component set

    typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing”" /> : null}

So while the user is waiting for a response from the API it will say "ChatGPT is typing" in the bottom left corner of the chat. Later when the API request is done you will set typing back to false.

___
### To move to Step 2:
`git checkout step-2`