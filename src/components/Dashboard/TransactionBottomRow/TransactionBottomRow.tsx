import DataChart from '@/components/DataChart/DataChart';
import { doughnutChartData } from '@/components/mockData';
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'

const TransactionBottomRow = () => {
  return (
    <Grid container marginTop={2} gap={2} sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      <Grid >
        <Paper sx={{ padding: '1rem', maxWidth: '100%', width: '100%' }}>
          <Typography>Transactions per user type</Typography>
          <DataChart type='doughnut' data={doughnutChartData} />
        </Paper>
      </Grid>

      <Grid >
        <Paper sx={{ padding: '1rem', maxWidth: '100%', width: '100%' }}>
          <Typography>Transactions per user type</Typography>
          <DataChart type='doughnut' data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid >
        <Paper sx={{ padding: '1rem', maxWidth: '100%', width: '100%' }}>
          <Typography>Transactions per user type</Typography>
          <DataChart type='doughnut' data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper sx={{ padding: '1rem', maxWidth: '100%', width: '100%' }}>
          <Typography>Transactions per user type</Typography>
          <DataChart type='doughnut' data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default TransactionBottomRow;
