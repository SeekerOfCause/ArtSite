import type { Metadata } from "next";
import "./globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import { Box, ThemeProvider } from "@mui/material";
import Header from "./header";
import { theme } from "./theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box component='html'>

        <Box component='body'>
      <AppRouterCacheProvider>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
          <Header>
          {children}
          </Header>
      </ThemeProvider>
      </AppRouterCacheProvider>
        </Box>
        
    </Box>
  );
}
