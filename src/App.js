import { ChatEngine } from "react-chat-engine"

import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from "./components/LoginForm";

const projectID = 'bef08aa9-c265-432e-b730-c6d017e1dac8';

const App = () => {

    if(!localStorage.getItem('userName')) return <LoginForm />;

    return <ChatEngine
        height='100vh'
        projectID={projectID}
        userName={localStorage.getItem('userName')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
    />
}

export default App;