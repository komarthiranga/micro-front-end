import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import Landing from './components/Landing';

ClassNameGenerator.configure((componentName) => `marketing-${componentName}`);

export default () => {
    return <div>
             <BrowserRouter>
                <Route exact path='/' component={Landing} />
             </BrowserRouter>
    </div>
}