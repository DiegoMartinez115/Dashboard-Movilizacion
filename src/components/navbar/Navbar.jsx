import { useState } from "react"
import NavListDrawer from "./NavListDrawer"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Drawer } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'

export default function Navbar({ navArrayLinks }) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
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
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
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
