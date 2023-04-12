import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import glas from "../../img/glass-solid.svg";

export default function Navbar() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#c1c3c4",
      },
    },
  });

  const inputStyles = {
    color: "white",
    paddingLeft: "15px",
    fontSize: "18px",
    placeholder: "white",
  };
  const inputLabelStyles = {
    color: "#ffffff",
    textTransform: "capitalize",
  };

  return (
    <div className="container">
      <div className="navbar d-flex">
        <form className="login_form">
          <CssTextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            inputProps={{
              sx: {
                ...inputStyles,
              },
            }}
            InputLabelProps={{
              sx: {
                ...inputLabelStyles,
              },
            }}
          />
          <button>
            <Image src={glas} alt="img" />
          </button>
        </form>
        <button className="navbar_btn">LOGOUT</button>
      </div>
    </div>
  );
}
