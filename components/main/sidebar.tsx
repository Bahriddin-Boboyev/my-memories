import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { requestAxios } from "@/config/requestAxios";

export default function Sidebar() {
  const [load, setLoad]: any = useState([]);

  let token: any = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("tokencha");
    token = JSON.parse(token);
  }

  const imageUpload = (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("name", file?.name);
    formData.append("file", file);

    fetch("https://api.mymemories.uz/api/v1/files", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoad([data.data.id, ...load]);
        }
      });
  };

  const fetchData = (
    title: string | number,
    desc: string | number,
    media: any
  ) => {
    requestAxios
      .post(
        "/memories/",
        {
          title: title,
          desc: desc,
          media: media,
        },
        { headers: { Authorization: `Token ${token}` } }
      )
      .then((data) => {
        console.log(data);
        alert(data.data.message);
      })
      .catch((err) => alert(err));
  };


  const handlerSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    fetchData(e.target[1].value, e.target[3].value, load);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
        borderColor: "#12A7FB",
      },
    },
  });
  return (
    <div className="container">
      <div className="sidebar">
        <h2>
          <span>my</span>memories
        </h2>
        <button className="sidebar_btn">create theme</button>
        <form
          onSubmit={(e) => handlerSubmit(e)}
          className="sidebar_input_block"
        >
          <Button
            aria-required
            color="primary"
            className="sidebar_button"
            variant="contained"
            component="label"
          >
            Chose media
            <input
              required
              hidden
              accept="image/*"
              type="file"
              name="myFile"
              onChange={(e) => imageUpload(e)}
            />
          </Button>
          <br />
          <CssTextField
            className="inputSidebar"
            color="primary"
            required
            id="1"
            label="title"
            variant="outlined"
            InputLabelProps={{
              style: { fontFamily: "nunito", color: "white" },
            }}
            inputProps={{
              style: { fontFamily: "nunito", color: "white" },
              sx: { height: 17 },
            }}
          />
          <CssTextField
            className="inputSidebar"
            required
            autoComplete="off"
            color="primary"
            id="2"
            label="description"
            variant="outlined"
            InputLabelProps={{
              style: { fontFamily: "nunito", color: "white" },
            }}
            inputProps={{
              style: { fontFamily: "nunito", color: "white" },
              sx: { height: 17 },
            }}
          />
          <Button
            type="submit"
            className="sidebar_btn2"
            color="success"
            variant="contained"
            onSubmit={(e) => handlerSubmit(e.target)}
          >
            Submit
          </Button>
        </form>
        <div className="d-flex sidebar_icon_block">
          <Checkbox
            {...label}
            icon={<FavoriteBorderRoundedIcon fontSize="large" />}
            checkedIcon={<FavoriteIcon fontSize="large" />}
          />
          <button>Liked memorise</button>
        </div>
        <div className="d-flex sidebar_icon_block-2">
          <Checkbox
            {...label}
            icon={<FavoriteBorderRoundedIcon fontSize="large" />}
            checkedIcon={<HeartBrokenRoundedIcon fontSize="large" />}
          />
          <button>Disliked memorise</button>
        </div>

        <div className="elps_block">
          <div className="eleps-2"></div>
          <div className="eleps-3">
            <div className="eleps_play d-flex">
              <button className="button-1"></button>
              <button className="button-2"></button>
              <button className="button-3"></button>
            </div>
            <div className="play_liner"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
