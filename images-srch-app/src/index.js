import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import os from 'os';

console.warn(`serving app from ${os.hostname()}`);

ReactDOM.render(<App/>, document.getElementById('imagesSrchAppRoot'));
