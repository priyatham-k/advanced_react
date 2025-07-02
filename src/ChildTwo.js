import React from 'react';

function ChildTwo({ message }) {
  return (
    <div>
      <h2>Child Two</h2>
      <p>Message from Child One: {message}</p>
    </div>
  );
}

export default ChildTwo;
