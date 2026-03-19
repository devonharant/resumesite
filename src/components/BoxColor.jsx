import { Button, Box } from '@mui/material';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function BoxColor(){
    const [color, setColor] = useState('000000')

    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const timerRef = useRef(null); 
  
    const changeColor = () => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      setColor(randomColor);
    };
  
    useEffect(() => {
      if (isAutoPlaying) {
        const runTimer = () => {
          changeColor();
          timerRef.current = setTimeout(runTimer, 1000);
        };
        
        runTimer();
      } else {
        clearTimeout(timerRef.current);
      }
  
      return () => clearTimeout(timerRef.current);
    }, [isAutoPlaying]); 

    const reset = () =>{
        setIsAutoPlaying(false)
        setColor('000000');
    }

    return (
            <Box display="flex" flexDirection="row">
                <Button onClick={changeColor}>click me</Button>
                <Box bgcolor={`#${color}`} style={{maxWidth: '50px', maxHeight: '50px', color: 'black'}}>hello:)</Box>
                <Button onClick={() => setIsAutoPlaying(!isAutoPlaying)}>rainbow-ish?</Button>
                <Button onClick={reset}>Reset</Button>
            </Box>
    )
}