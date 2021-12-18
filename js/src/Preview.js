import React from 'react';

const previewStyle = {
    width: '100%',
    minHeight: '400px',
    margin: '30px 0px'
}

const Preview = ({ data, editor }) => {
    return (
        <div
            style={previewStyle}
            onClick={editor}
        >
            {data}
        </div>
    );
}

export default Preview;
