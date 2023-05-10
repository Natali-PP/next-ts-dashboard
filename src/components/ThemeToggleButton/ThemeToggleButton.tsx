import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import { useTheme } from '@mui/system';
import { Typography, useMediaQuery } from "@mui/material";

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{
    toggleColorMode: () => void;
  }>
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery('(min-width: 500px)')
  const theme = useTheme();
  const { ColorModeContext } = props
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      {mobileCheck ?
        <Typography>{theme.palette.mode}</Typography>
        : null
      }

      <IconButton sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
        title={theme.palette.mode + ' mode'}
        aria-label={theme.palette.mode + ' mode button'}

      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>

  )
}

export default ThemeToggleButton;
