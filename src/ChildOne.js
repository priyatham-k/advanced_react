import React from 'react';

function ChildOne({ message, onMessageChange }) {
  return (
    <div>
      <h2>Child One</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        placeholder="text here"
      />
    </div>
  );
}

export default ChildOne;
