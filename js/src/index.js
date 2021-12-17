import React from 'react';
import { render } from 'react-dom';

const App = () => {
    let val = Backdrop.settings.writer.textfield;
    return (
        <div>{val}</div>
    )
}

render(<App />, document.querySelector('#writer-block'));
