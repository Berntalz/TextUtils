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
                    <button className='btn btn-primary mx-1' onClick={handleUpper}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-1' onClick={handleLower}>Convert to LowerCase</button>
                    <button className='btn btn-primary mx-1' onClick={clearText}>Clear Text</button>
                    <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy to Clipboard</button>
                </div>
                <div>
                    <h2 className='mt-3'>Your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes to read</p>
                </div>
                <div>
                    <h2 className='mt-3'>Preview</h2>
                    <p>{text.length > 0 ? text : 'Your text will be shown here'}</p>
                </div>
            </div>
        </>
    );
}
