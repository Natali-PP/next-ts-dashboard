import React from 'react';
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '@/components/Header/Header';
import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';
import Layout from '@/components/Layout/Layout';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const App = ({ Component, pageProps }: AppProps) => {

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode],
  );
  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode],
  );
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App;
