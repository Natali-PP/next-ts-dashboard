import { Box, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export type DataCardProps = {
  title: string,
  value: string,
  description: string
}

const DataCard = ({ title, value, description }: DataCardProps) => {
  return (
    <Paper sx={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyItems: 'center', flexDirection: 'column' }} >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'center', }}>
        <Typography color={"lightslategrey"}>{title}</Typography>
        <Tooltip title={description}>
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant="h5">{value}</Typography>
    </Paper>
  )
}

export default DataCard;
