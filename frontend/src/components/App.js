import React, { useState } from 'react';
import Header from '../layout/Header';
import Editor from './Editor';

const App = () => {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const srcDoc = `
  <html> 
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `;

  return (
    <div>
     <Header />
      <div className="pane top-pane">
        <Editor 
          title='HTML'
          value={html}
          language='xml'
          onChange={setHtml}
          />
          <Editor 
          title='CSS'
          value={css}
          language='css'
          onChange={setCss}
          />
          <Editor 
          title='JavaScript'
          value={js}
          language='javascript'
          onChange={setJs}
          />
      </div>
      <div className="pane">
        <iframe 
          srcDoc={srcDoc}
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
