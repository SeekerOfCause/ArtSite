import { AppBar, Paper, Toolbar, IconButton, Box, Button, Typography } from "@mui/material";


export default function Header({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <Box>
        <AppBar sx={{height: '1rem'}}>
        <Paper square={true} elevation={1}>
          <Toolbar sx={{height: '1rem', minHeight: '1rem'}}>
            <IconButton disableRipple={true} aria-label="home" href="/" sx={{padding: '0'}}>
              <img
                width="46"
                height="46"
                src="https://img.icons8.com/color/48/modern-statue.png"
                alt="modern-statue"
              />
            </IconButton>
            <Box
              display="flex"
              width="100%"
              gap='8rem'
              justifyContent='center'
            >
              <Box>
                <Button href="/gallery" color="secondary">
                  <Typography>Gallery</Typography>
                </Button>
              </Box>
              <Box>
                <Button href="/biography" color="secondary">
                  <Typography>Biogaphy</Typography>
                </Button>
              </Box>
              <Box>
                <Button href="contact" color="secondary">
                  <Typography>Contact</Typography>
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Paper>
      </AppBar>
      <Box paddingTop='5rem'>
      {children}
      </Box>
      </Box>
    )
}