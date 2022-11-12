import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.scss'

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          { props.shopName }
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;