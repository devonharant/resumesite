import { Button, Box } from '@mui/material';
import React, { useState } from 'react';

export default function BoxColor(){
    const [color, setColor] = useState('000000')

    const changeColor = () =>{
        const newColor = Math.floor(Math.random()*16777215).toString(16);
        setColor(newColor);
    }

    const reset = () =>{
        setColor('000000');
    }

    return (
        <>
            <Box display="flex" flexDirection="row">
                <Button onClick={changeColor}>click me</Button>
                <Box bgcolor={`#${color}`} style={{maxWidth: '50px', maxHeight: '50px'}}>hello:)</Box>
                <Button onClick={reset}>Reset</Button>
            </Box>
        </>
    )
}