import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Link} from 'react-router-dom';

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Dashboard = () => {

  const tiers = [
    {
      title: "Free",
      price: "0",
      description: [
        "10 users included",
        "2 GB of storage",
        "Help center access",
        "Email support",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "outlined",
    },
    {
      title: "Pro",
      subheader: "Most popular",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Get started",
      buttonVariant: "contained",
    },
    {
      title: "Enterprise",
      price: "30",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Contact us",
      buttonVariant: "outlined",
    },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, holidingPattern, accountAlias, currency, currentValue, netCashTransferred, Earnings, avilableCashformargin) {
    return { name, holidingPattern, accountAlias, currency, currentValue, netCashTransferred, Earnings, avilableCashformargin };
  }

  const rows = [
    createData("Structured Notes1", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes2", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes3", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes4", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes5", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
  ];

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
        {[1, 2, 3, 4].map((item, index) => (
          <Link to="/dashboard/profile/kristal-info" key={index} style={{textDecoration: 'none'}}>  
            <Grid item md={6}>
                {cardItem}
            </Grid>
         </Link>   
        ))}
      </Grid>

      <Grid container sx={{ pt: 2, pb: 6, pl: 20, pr: 20 }}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h6"
            color="text.primary"
            gutterBottom
            sx={{ fontSize: "1rem", color: "#999", fontWeight: "800" }}
          >
            Account Summary
          </Typography>
        </Grid> 
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{color: '#999'}}>NAME</StyledTableCell>
                  <StyledTableCell sx={{color: '#999'}} align="right">HOLIDING PATTEREN</StyledTableCell>
                  <StyledTableCell sx={{color: '#999'}} align="right">ACCOUNT ALIAS</StyledTableCell>
                  <StyledTableCell sx={{color: '#999'}} align="right">
                    CURRENCY
                  </StyledTableCell>
                  <StyledTableCell sx={{color: '#999'}} align="right">
                    CURRENT VALUE
                  </StyledTableCell>
                  <StyledTableCell sx={{color: '#999'}} align="right">
                    NET CASH TRANSFERRED
                  </StyledTableCell>
                  <StyledTableCell sx={{color: '#999'}} align="right">
                    EARNINGS
                  </StyledTableCell>
                  <StyledTableCell sx={{color: '#999'}} align="right">
                    AVILABLE CASH FOR MARGIN
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <span><img src="https://kristal-ai-staging-ui.s3.amazonaws.com/Images/WealthManagersV2/Structured%20Products.png" style={{width: '30px', height: '30px', position: 'relative', 'left': '-6px', top: '7px'}}/></span>{row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.holidingPattern}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.accountAlias}</StyledTableCell>
                    <StyledTableCell align="right">{row.currency}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.currentValue}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.netCashTransferred}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Earnings}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.avilableCashformargin}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
