import DataChart from "@/components/DataChart/DataChart";
import { lineChartData } from "@/components/mockData";
import { Card, Grid, Paper, Typography, useTheme } from "@mui/material";

const TransActionsPerDay = () => {
  const theme = useTheme()
  return (
    <Grid sx={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '4fr 1fr' }} gap={2}>
      <Paper sx={{ maxWidth: '100%', width: '100%' }}>
        <DataChart type="line" data={lineChartData} />
      </Paper>
      <Grid gap={2}>
        <Card variant={"outlined"} sx={{ textAlign: 'center', padding: '1.75rem 0rem', marginBottom: '1rem' }}>
          <div >
            <Typography fontSize={20}>Total Products</Typography>
          </div>
          <div>
            <Typography fontSize={16}>1.275</Typography>
            <Typography color={theme.palette.success.main} fontSize={14}>
              428.7%
            </Typography>
          </div>
        </Card>

        <Card variant={"outlined"} sx={{ textAlign: 'center', padding: '1.75rem 0rem', marginBottom: '1rem' }}>
          <div >
            <Typography fontSize={20}>Buy-to-detail</Typography>
          </div>
          <div>
            <Typography fontSize={16}>4.40%</Typography>
            <Typography color={theme.palette.success.main} fontSize={14}>
              899.4%
            </Typography>
          </div>
        </Card>
        <Card variant={"outlined"} sx={{ textAlign: 'center', padding: '1.75rem 0rem' }}>
          <div >
            <Typography fontSize={20}>Refunds</Typography>
          </div>
          <div>
            <Typography fontSize={16}>0</Typography>
            <Typography color={theme.palette.success.main} fontSize={14}>
              0
            </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>

  )
}
export default TransActionsPerDay;
