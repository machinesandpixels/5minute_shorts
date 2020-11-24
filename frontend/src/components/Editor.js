import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/yonce.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled } from 'react-codemirror2';
import { 
    BsArrowsAngleExpand, 
    BsArrowsAngleContract 
} from "react-icons/bs";

const Editor = ({ title, value, language, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <div 
            className={`editor--container
            ${open ? '' : 'collapsed'}`}
        >
            <div className="editor-title">
                { title }
                <button
                    className="expand-btn"
                    type="button" 
                    onClick={() => setOpen(prevOpen => ! prevOpen)}
                >
                { open ? <BsArrowsAngleExpand  /> : <BsArrowsAngleContract /> }
                </button>
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
                    theme: "yonce"
                }}
            />
        </div>
    )
}

export default Editor;