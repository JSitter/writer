import React from 'react';

const buttonStyle = {
    backgroundColor: '#333',
    color: '#efefef',
    cursor: 'pointer',
    margin: '15px',
    padding: '15px',
    borderRadius: '5px',
    userSelect: 'none'
}

const editorStyle = {
    width: '100%',
    minHeight: '400px',
    margin: '30px 0px'
}

const menuStyle = {
    userSelect: 'none'
}

const PreviewEdit = ({ editor }) => {
    return (
        <div style={menuStyle}>
            <span style={buttonStyle} onClick={editor}>Preview</span>
        </div >
    );
}

const Editor = ({ data, updateData, editor }) => {
    const updateDate = (e) => {
        updateData(e.target.value);
    }
    return (
        <div>
            <textarea
                onChange={updateDate}
                style={editorStyle}
                value={data}
            />
            <PreviewEdit editor={editor} />
        </div>

    );
}

export default Editor;
