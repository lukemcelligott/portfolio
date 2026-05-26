import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderButtonProps {
    to: string;
    children: React.ReactNode;
}

function HeaderButton({ to, children } : HeaderButtonProps) {
    const location = useLocation();
    const [isSelected, setIsSelected] = useState(location.pathname === to);

    useEffect(() => {
        setIsSelected(location.pathname === to);
    }, [location.pathname, to]);

    return (
        <span className={`app-bar-btn ${isSelected ? 'selected' : ''}`}>
            <Link to={to} className='button'>
                <Button sx={{ my: 2, color: isSelected ? '#4ECCA3' : '#EEEEEE', display: 'block' }}>
                    <Typography variant="body1">
                        {children}
                    </Typography>
                </Button>
            </Link>
        </span>
    );
}

export default HeaderButton;
