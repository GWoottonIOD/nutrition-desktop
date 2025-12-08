import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useColorScheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';

export default function ProfileModeIconDropdown(props) {
    const { mode, systemMode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    if (!mode) {
        return (
            <Box
                data-screenshot="toggle-mode"
                sx={(theme) => ({
                    verticalAlign: 'bottom',
                    display: 'inline-flex',
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: (theme.vars || theme).shape.borderRadius,
                    border: '1px solid',
                    borderColor: (theme.vars || theme).palette.divider,
                })}
            />
        );
    }
    const resolvedMode = systemMode || mode;
    const icon = {
        light: <LightModeIcon />,
        dark: <DarkModeIcon />,
    }[resolvedMode];
    return (
        <>
            <IconButton onClick={handleOpenUserMenu}>
                <PersonIcon fontSize="small" />
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
