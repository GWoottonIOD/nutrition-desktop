import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme.jsx';
import AppAppBar from './AppAppBar.jsx';
import Hero from './Hero.jsx';
import LogoCollection from './LogoCollection.jsx';
import Highlights from './Highlights.jsx';
import Pricing from './Pricing.jsx';
import Features from './Features.jsx';
import Testimonials from './Testimonials.jsx';
import FAQ from './FAQ.jsx';
import Footer from './Footer.jsx';

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <div>
        {/* <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ /> */}
        <Divider />
        {/* <Footer /> */}
      </div>
    </>
  );
}
