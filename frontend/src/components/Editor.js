import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled } from 'react-codemirror2';

const Editor = ({ title, value, language, onChange }) => {

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <div className="editor--container">
            <div className="editor-title">
                { title }
                <button>X</button>
            </div>
            <Controlled 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror--container"
                options={{
                    lineWrapping: true,
                    lint: true,
                    lineNumbers: true,
                    mode: language,
                }}
            />
        </div>
    )
}

export default Editor;