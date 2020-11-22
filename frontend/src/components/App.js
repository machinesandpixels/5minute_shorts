import React from 'react';
import Header from '../layout/Header';
import Editor from './Editor';

const App = () => {
  return (
    <div>
     <Header />
      <div className="pane top-pane">
        <Editor></Editor>
        <Editor></Editor>
        <Editor></Editor>
      </div>
      <div className="pane">
        <iframe
         title="output"
         sandbox="allow-scripts"
         frameborder="0"
         width="100%"
         height="100%">
        </iframe>
      </div>
    </div>
  );
}

export default App;
