import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar.js';
import MainContent from './components/MainContent.js';
import Latest from './components/Latest';
import Footer from './components/Footer.js';
import Websites from './components/Websites.js';
import { Routes, Route } from "react-router-dom";

export default function Blog(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="main" element={<MainContent />} />
          <Route path="websites" element={<Websites />} />
          {/* <Route path="music" element={<Music />} /> */}
        </Routes>
        {/* <Latest /> */}
      </Container>
      <Footer />
    </AppTheme>
  );
}
