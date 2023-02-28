import { Button, Typography, Box } from '@mui/material';
import React, {useState} from 'react';

export default function ButtonIncrement(){
    const [count, setCount] = useState(0);

    const countUp = () =>{
        setCount(count + 1);
    }
    const countDown = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    return (
        <>
            <Box display="flex" flexDirection="row">
                <Button onClick={countDown}>Count Down</Button>   
                <Typography style={{paddingTop:'6px'}}>{count}</Typography>
                <Button onClick={countUp}>Count Up</Button>
                <Button onClick={reset}>Reset</Button>
            </Box>
        </>
    )
}