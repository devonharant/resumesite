import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

export default function ButtonIncrement() {
  const [count, setCount] = useState(0);

  const MAX_LIMIT = 9999999;
  const MAX_LIMIT_BOTTOM = -9999999;

  const schema = yup.object({
    multiply: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value,
      )
      .max(9999, "Too big a number!")
      .min(-9999, "Too small a number!")
      .typeError("Must be a number!")
      .nullable(),
    divide: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value,
      )
      .test("is-zero", "Cannot divide by zero!", (value) => value !== 0)
      .max(9999, "Too big a number!")
      .min(-9999, "Too small a number!")
      .typeError("Must be a number!")
      .nullable(),
  });
  const defaultValues = {
    multiply: "",
    divide: "",
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset: resetForm,
    setError,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

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

  const watchMultiply = watch("multiply");
  const watchDivide = watch("divide");

  const isMultiplyDisabled = !!watchDivide && watchDivide !== "";
  const isDivideDisabled = !!watchMultiply && watchMultiply !== "";

  const multiplyBy = (value) => {
    setCount((prev) => {
      const result = prev * value;
      return result <= MAX_LIMIT_BOTTOM || result >= MAX_LIMIT ? prev : result;
    });
  };

  const divideBy = (value) => {
    setCount((prev) => {
      const result = prev / value;
      return result <= MAX_LIMIT_BOTTOM || result >= MAX_LIMIT ? prev : result;
    });
  };

  const executeOperation = (values) => {
    if (
      values.multiply !== "" &&
      values.multiply !== null &&
      !isMultiplyDisabled
    ) {
      multiplyBy(Number(values.multiply));
    } else if (
      values.divide !== "" &&
      values.divide !== null &&
      !isDivideDisabled
    ) {
      divideBy(Number(values.divide));
    }
    resetForm();
  };
  const reset = () => {
    resetForm();
    setCount(0);
  };

  return (
    <Box display="flex" flexDirection="column" sx={{ paddingBottom: "12px" }}>
      <Box display="flex" flexDirection="row" gap={2}>
        <Button
          onClick={countDown}
          style={{ color: "red", border: "1px solid red" }}
        >
          Count Down
        </Button>
        <Button
          onClick={countUp}
          style={{ color: "green", border: "1px solid green" }}
        >
          Count Up
        </Button>
        <Button onClick={reset} style={{ border: "1px solid" }}>
          Reset Count
        </Button>
        <Typography style={{ paddingTop: "6px" }}>COUNT: {count}</Typography>
      </Box>
      <Box
        display="flex"
        alignItems="flex-end"
        flexDirection="row"
        sx={{ paddingTop: "1rem" }}
        gap={2}
      >
        <Controller
          name="multiply"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Multiply By"
              variant="standard"
              className="custom-green-textfield"
              value={value}
              onChange={onChange}
              error={errors.multiply}
              helperText={errors.multiply ? errors.multiply.message : null}
            />
          )}
        />

        <Controller
          name="divide"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Divide By"
              variant="standard"
              className="custom-green-textfield"
              value={value}
              onChange={onChange}
              error={errors.divide}
              helperText={errors.divide ? errors.divide.message : null}
            />
          )}
        />

        <Button
          onClick={handleSubmit(executeOperation)}
          style={{ color: "green", border: "1px solid green" }}
        >
          EXECUTE
        </Button>
      </Box>
    </Box>
  );
}