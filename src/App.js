import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed'
import './App.css';
import Modal from './components/SignInForm/Modal';

const App = () => {
  if(!localStorage.getItem('username')) return <Modal/>

  return (
    // <Modal/>
    <ChatEngine
    height = "100vh"
    projectID = "5635ea4b-c3f1-4872-ad1f-fcd6b181581c"
    userName = {localStorage.getItem('username')}
    userSecret = {localStorage.getItem('password')}
    renderChatFeed = {(chatProps)=> <ChatFeed {...chatProps}/>}
    />
  );
}

export default App;
