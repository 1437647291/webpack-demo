import React, { useState, useRef } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/theme/idea.css';
// import "codemirror/mode/python/python.js"//代码高亮

// require('codemirror/mode/css/css');
// require('codemirror/addon/hint/css-hint');
require('codemirror/addon/hint/show-hint');
// require('codemirror/mode/python/python');
// require('codemirror/addon/edit/closebrackets');
// require('codemirror/addon/lint/lint');
// require('codemirror/addon/display/autorefresh');

const CodeMirrorPro = () => {
  const [code, setCode] = useState('我是代码');
  const editorRef = useRef();

  return (
    <div>
      <h2>Python Code Editor</h2>
      <CodeMirror
        value='body{ background: red }'
        options={{
          // mode: 'python',
          theme: 'idea',
          lineWrapping: true,
          smartIndent: true,
          lineNumbers: true,
          foldGutter: true,
          autoCloseTags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          autoRefresh:true
        }}
    />
    </div>
  );
}

export default CodeMirrorPro;