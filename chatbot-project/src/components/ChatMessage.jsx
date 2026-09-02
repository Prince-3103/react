import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'

export function ChatMessage(props){
  // const message = props.message;
  // const sender = props.sender;
  const { message, sender } = props;

  // if(sender === "robot"){
  //   return (
  //     <div>
  //       <img src="robot.png" width="50" />
  //       {message}
  //     </div>
  //   )
  // }

  return (
    <div className={sender === 'user' ? 'user-message' : 'robot-message'}>
      { sender === 'robot' && <img src={RobotProfileImage} className="img-profile" /> }
      <div className="text-message">
        {message}
      </div>
      { sender === 'user' && <img src={UserProfileImage} className="img-profile" />}
    </div>
  )
}