import { ChatMessage  } from "./ChatMessage";
import { useAutoScroll } from "./useAutoScroll";
import './ChatMessages.css'

export function ChatMessages({chatMessages}){
  const chatMessagesRef = useAutoScroll(chatMessages);

  if(chatMessages.length === 0){
    return (
      <h3 className="chat-message-container">Welcome to ChatBot project! Send a message using the textbox below.</h3>
    )
  }

  return (
    <div className="chat-message-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message} 
            sender={chatMessage.sender} 
            key={chatMessage.id}
          />
        );
      })}
    </div>
  ) 
}