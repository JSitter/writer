import React, { useState } from 'react';
import { render } from 'react-dom';
import Preview from './Preview.js';
import Editor from './Editor.js';

const field_id = Backdrop.settings.writer.field_id;

const widgetStyles = {
    margin: '10px 0px'
}

const App = () => {

    const fieldname = Backdrop.settings.writer.field_name;
    let [fieldValue, setFieldValue] = useState(Backdrop.settings.writer.field_value);
    let [editor, setEditor] = useState(false);

    let editorToggle = () => {
        setEditor(!editor);
    }

    return (
        <div style={widgetStyles}>
            {editor ?
                <Editor
                    data={fieldValue}
                    updateData={setFieldValue}
                    editor={editorToggle}
                /> :
                <Preview
                    data={fieldValue}
                    editor={editorToggle}
                />}
            <input name={fieldname} value={fieldValue} type="hidden" />
        </div>
    )
}

render(<App />, document.querySelector("#" + field_id));
