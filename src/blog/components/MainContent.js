import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import WebDeveloper from '../../assets/blue_web_developer.jpg';
import MusicStaff from '../../assets/music_staff.jpg';
import Adventure from '../../assets/adventure.jpeg';
import Creative from '../../assets/creative.jpeg';
import { NavLink } from 'react-router';
import '../styles/MainContent.css';

const menuData = [
  {
    img: WebDeveloper,
    title: 'Web Developer'
  },
  {
    img: MusicStaff,
    title: 'Music Teacher',
  },
  {
    img: Creative,
    title: 'Creator'
  },
  {
    img: Adventure,
    title: "Adventurer",
  }
];

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  // const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const [focusedMenuIndex, setFocusedMenuIndex] = React.useState(0);

  const handleMouseOver = (index) => {
    setFocusedMenuIndex(index);
  };

  // const handleFocus = (index) => {
  //   setFocusedCardIndex(index);
  // };

  // const handleBlur = () => {
  //   setFocusedCardIndex(null);
  // };

  // const handleClick = () => {
  //   console.info('You clicked the filter chip.');
  // };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', height: '100%' }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Mina Parastaran
        </Typography>
        {/* <Typography>Web developer, music teacher, food lover, travel enthusiast</Typography> */}
          {/* <Typography variant="h2" gutterBottom >
            Web developer
          </Typography>
          <Typography variant="h2" gutterBottom>
            Music teacher
          </Typography>
          <Typography variant="h2" gutterBottom>
            Creator
          </Typography>
          <Typography variant="h2" gutterBottom>
            Adventurer
          </Typography> */}
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          width: '100%',
          height: '100%'
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
          <ButtonGroup variant="text" aria-label="Basic button group" orientation="vertical" size="large">
            <Button onMouseOver={() => handleMouseOver(0)}  variant="h2" gutterBottom sx={{textAlign: "left"}} component={NavLink} to="/websites">
              <Typography variant="h2" gutterBottom>
                Web Developer
              </Typography>
            </Button>
            <Button onMouseOver={() => handleMouseOver(1)} variant="h2" gutterBottom sx={{textAlign: "left"}}>
              <Typography variant="h2" gutterBottom>
                Music Teacher
              </Typography>
            </Button>
            <Button onMouseOver={() => handleMouseOver(2)} variant="h2" gutterBottom sx={{textAlign: "left", justifyContent: "left"}}>
              <Typography variant="h2" gutterBottom>Creator</Typography>
            </Button>
            <Button onMouseOver={() => handleMouseOver(3)} variant="h2" gutterBottom sx={{textAlign: "left"}}>
              <Typography variant="h2" gutterBottom>
                Adventurer
              </Typography>
            </Button>
          </ButtonGroup>
          
        </Box> 
        <Box sx={{width: '100%', height: '100%'}}>
            <img src={menuData[focusedMenuIndex].img} alt={menuData[focusedMenuIndex].title} className="mainImage"/>
        </Box>      
      </Box>

      {/* <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <div>
          </div>
        
      </Box> */}
    </Box>
  );
}
