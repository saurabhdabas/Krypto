import { React, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChatRoom from './ChatRoom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { textAlign } from '@mui/system';
const ChatRooms = () => {
  const [room, setRoom] = useState("");
  const theme = createTheme();
  const button = () => {
    console.log('this is the value of room', room)
    if (room === "") {
      return (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '90vh' }}>
            <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: 'url(/Login.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Grid item xs={12} sm={8} md={5}>
              <Grid container spacing={2}>

                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 300 , height: 280 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="trending.jpeg"
                      alt="green iguana"
                    />
                    <CardContent>
                      {/* <Typography gutterBottom variant="h5" component="div">
                        # TRENDING
                      </Typography> */}
                      <Typography variant="body2" color="text.secondary">
                        Join the Room to talk about what's hot in the crypto market.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium" variant="contained" onClick={()=> {setRoom('trending')} } >Join Room</Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 300 , height: 280 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/investment.jpeg"
                      alt="green iguana"
                    />
                    <CardContent>
                      {/* <Typography gutterBottom variant="h5" component="div">
                        # INVESTMENTS
                      </Typography> */}
                      <Typography variant="body2" color="text.secondary">
                      Join the Room to talk about what's hot in the crypto market.
                      </Typography>
                    </CardContent>
                    <CardActions >
                      <Button size="medium" variant="contained" onClick={()=> {setRoom('investments')}} >Join Room</Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 300 , height: 280 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/crypto.jpeg"
                      alt="green iguana"
                    />
                    <CardContent>
                      {/* <Typography gutterBottom variant="h5" component="div">
                      # GENERAL
                      </Typography> */}
                      <Typography variant="body2" color="text.secondary">
                        Join the Room to share your thoughts and talk crypto in general.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium" variant="contained" onClick={()=> {setRoom('general')}} >Join Room</Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 300 , height: 280 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/bitcoin.jpeg"
                      alt="green iguana"
                    />
                    <CardContent>
                      {/* <Typography gutterBottom variant="h5" component="div">
                        # EVENTS
                      </Typography> */}
                      <Typography variant="body2" color="text.secondary">
                        Join the Room to talk about various crypto events happening around the globe.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium" variant="contained" onClick={()=> {setRoom('events')}} >Join Room</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </ThemeProvider>
      );
    } else {
      return (
        <Box>

          <Button variant="contained"onClick={()=> {setRoom('')}}>Leave Room</Button>
          <ChatRoom roomId={room}/>
        </Box>
      );
    }
  }

  return (
    <div>
      {/* <Header/> */}
      <Navigation/>
      {button()}
      
    </div>
  )
}

export default ChatRooms;
