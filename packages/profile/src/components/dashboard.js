import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Link} from 'react-router-dom';
const Dashboard = () => {
  const cardItem = (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://kristal-prod-backend.s3.ap-southeast-1.amazonaws.com/Images/Generic/LAUNCHER/seatownpvt.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SeaTown Private Capital
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Co-Invest with Temasek in a $1bn+ fund, A once-in-a-lifetime
          opportunity
        </Typography>
      </CardContent>
      <CardActions>
        <Chip label="Closes May 15" />
      </CardActions>
    </Card>
  );

  return (
    <>
      <Grid  sx={{ pt: 2, pl: 20, pr: 20 }}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h4"
            color="text.primary"
            gutterBottom
            sx={{ fontSize: "1.2rem", color: "#999", fontWeight: "800" }}
          >
            Trending
          </Typography>
        </Grid>
      </Grid>
      <Grid
        
        sx={{
          pt: 2,
          pb: 6,
          pl: 20,
          pr: 20,
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((item, index) => (
          <Link to="/profile/kristal-info" key={index} style={{textDecoration: 'none'}}>  
            <Grid item md={6}>
                {cardItem}
            </Grid>
         </Link>   
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
