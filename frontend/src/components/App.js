import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import Editor from './Editor';

const App = () => {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(()=> {
      setSrcDoc( `
      <html> 
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `);
    },250);

    return () => clearTimeout(timeout);
    
  }, [html, css, js]);

  
  return (
    <div>
     <Header />
      <div className="pane top-pane">
        <Editor 
          title='H T M L'
          value={html}
          language='xml'
          onChange={setHtml}
          />
          <Editor 
          title='C S S'
          value={css}
          language='css'
          onChange={setCss}
          />
          <Editor 
          title='J a v a S c r i p t'
          value={js}
          language='javascript'
          onChange={setJs}
          />
      </div>
      <div className="pane bottom-pane">
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
