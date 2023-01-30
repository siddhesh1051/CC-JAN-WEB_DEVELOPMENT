import './App.css';
import React from 'react'
import Message from './components/Message';
import MessageForm from './components/MessageForm';
import { useMessage } from './hooks/useMessage';

function App() {
  const { messages, resStatus } = useMessage();
  
  return (
    <div className="wrapper">
      <h1 className='title'>Online Notice Board</h1>

      <MessageForm/>
      
      {
        messages.map((message, i) => {
          return <Message key={i}
                  title={messages[i]["title"]}
                  author={messages[i]["author"]}
                  body={messages[i]["body"]}
                  date={messages[i]["date"].slice(0, 10)}
                  />
        })
      }

      <p className="response__status">{ resStatus }</p>

      
    </div>
  );
}

export default App;
