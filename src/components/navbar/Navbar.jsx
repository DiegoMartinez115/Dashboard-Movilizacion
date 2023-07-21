import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'

export default function Navbar({navArrayLinks}) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: {xs:'flex', sm:'none'} }}
                        edge='start'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                        DASHBOARD MOVILIZACIÓN
                    </Typography>
                    <Box sx={{ display: { xs:'none', sm:'block' } }}>
                        {navArrayLinks.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: {xs:'flex', sm:'none'} }}
            >
                <NavListDrawer 
                    navArrayLinks={navArrayLinks} 
                    NavLink={NavLink}
                    setOpen={setOpen}
                />
            </Drawer>
        </>
    )
}