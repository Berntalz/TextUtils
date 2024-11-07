import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpper = () => {
        let updatedText = text.toUpperCase();
        setText(updatedText);
        props.showAlert('Converted to Upper Case', 'success');
    };

    const handleLower = () => {
        let updatedText = text.toLowerCase();
        setText(updatedText);
        props.showAlert('Converted to Lower Case', 'success');
    };

    const clearText = () => {
        let updatedText = '';
        setText(updatedText);
        props.showAlert('Cleared the text', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard', 'success');
    };

    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="form-group mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#313438',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        rows="10"
                    ></textarea>
                </div>
                <div>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpper}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLower}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear Text</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy to Clipboard</button>
                </div>
                <div>
                    <h2 className='mt-3'>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(/\s+/).length} Minutes to read</p>
                </div>
                <div>
                    <h2 className='mt-3'>Preview</h2>
                    <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
                </div>
            </div>
        </>
    );
}
