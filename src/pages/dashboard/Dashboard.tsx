import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import scss from './Dashboard.module.scss';
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransActionsPerDay from "@/components/Dashboard/TransactionPerDay/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow/TransactionBottomRow";

const Dashboard = () => {
  return (
    <Box>
      <DataRibbon />
      <TransActionsPerDay />
      <TransactionBottomRow />
      {/*
      <Grid container gap={2} className={scss.topCardsContainer}>
        <Grid item >
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid item >
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
        <Grid item >
          <Paper className={scss.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={scss.dataCard}>xs=12</Paper>
      </Grid>
      */}
    </Box>
  )
}

export default Dashboard;
