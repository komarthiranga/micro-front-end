import React from "react";
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import PricingContent from './components/ContainerApp';
// import MarketingApp from "./components/MarketingApp";
ClassNameGenerator.configure((componentName) => `container-${componentName}`);

export default () => {
  return (
    <PricingContent />
  );
};
