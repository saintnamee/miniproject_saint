import Link from 'next/link'
import styles from "../styles/Index.module.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    }
  }));


const Navbar = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Coffee SaiNt
              
            </Typography>
            <Link href="/"><Button color="inherit">Home</Button></Link> 
            <Link href="/product"><Button color="inherit">Product</Button></Link> 
            <Link href="/login"><Button color="inherit">Login</Button></Link> 
            <Link href="/register"><Button color="inherit">Sing up</Button></Link> 
            <Link href="/logout"><Button color="inherit">Logout</Button></Link>
            <Link href="/cart"><Button color="inherit"> 
            {/* </Button></Link>   */}

            <IconButton aria-label="cart">
            <useStyles badgeContent={4} color="secondary">
            <ShoppingCartIcon />
            </useStyles>
            </IconButton>
            </Button></Link>
      
          </Toolbar>
        </AppBar>
      </div>
    )
}


export default Navbar