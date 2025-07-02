import React, { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildOne message={message} onMessageChange={setMessage} />
      <ChildTwo message={message} />
    </div>
  );
}

export default App;
