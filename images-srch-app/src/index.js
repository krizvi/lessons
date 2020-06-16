import React from "react";
import ReactDOM from 'react-dom';
import ImagesSrchApp from "./components/images-srch-app";
import os from 'os';

console.warn(`serving app from ${os.hostname()}`);

ReactDOM.render(<ImagesSrchApp/>, document.getElementById('imagesSrchAppRoot'));
