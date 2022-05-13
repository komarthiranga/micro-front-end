import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function AppConatiner({children, isSignedIn, onSignOut}) {
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/')
  }

  const navigateToLogin = () => {
    if(isSignedIn) {
      history.push('/');
      onSignOut();
    } else {
      history.push('/auth/signin');
    }

  }

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={navigateToHome}>
            <img src="https://staging-portal.kristal.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKristalLogotype.fa9d7057.svg&w=384&q=75" alt="kristal.ai" />
          </Typography>
          {/* <nav>
            <Link
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
              onClick={navigateTo.bind(this, 'marketing')}
            >
              Profile
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Explore
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Bookmarks
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Reports
            </Link>
          </nav> */}
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={navigateToLogin}>
            {isSignedIn ? 'Logout' : 'LogIn' }
          </Button>
        </Toolbar>
      </AppBar>
      
        {/* <MarketingApp /> */}

        {children}

    </React.Fragment>
  );
}

