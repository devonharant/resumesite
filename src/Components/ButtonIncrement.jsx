import { Button, Typography, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ButtonIncrement() {
  const [count, setCount] = useState(0);

  const MAX_LIMIT = 9999999;
  const MAX_LIMIT_BOTTOM = -9999999;

  const { submit, formState } = useForm();

  const countUp = () => {
    setCount((prev) => {
      if (prev + 1 >= MAX_LIMIT) return prev;
      return prev + 1;
    });
  };
  const countDown = () => {
    setCount((prev) => {
      if (prev - 1 <= MAX_LIMIT_BOTTOM) return prev;
      return prev - 1;
    });
  };

  const multiplyBy = (values) => {};

  const divideBy = (values) => {};

  const reset = () => {
    setCount(0);
  };

  return (
    <Box display="flex" flexDirection="column" sx={{ paddingBottom: "12px" }}>
      <Box display="flex" flexDirection="row">
        <Button onClick={countDown} style={{ color: "red" }}>
          Count Down
        </Button>
        <Typography style={{ paddingTop: "6px" }}>{count}</Typography>
        <Button onClick={countUp} style={{ color: "green" }}>
          Count Up
        </Button>
        <Button onClick={reset}>Reset</Button>
      </Box>
      <Box display="flex" flexDirection="row">
        <TextField
          label="Multiply By"
          variant="standard"
          className="custom-green-textfield"
        />
        <TextField
          label="Divide By"
          variant="standard"
          className="custom-green-textfield"
        />
      </Box>
    </Box>
  );
}
