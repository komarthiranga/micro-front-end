import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Landing = () => {
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
    createData("Structured Notes", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
    createData("Structured Notes", 'Single', 'KSGN001058', 'USD', '53,853.04', '53,853.04', '53,853.04', '53,853.04'),
  ];

  return (
    <>
      <Grid containe sx={{ pt: 2, pb: 6, pl: 20, pr: 20 }}>
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
export default Landing;
