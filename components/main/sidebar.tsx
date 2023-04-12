import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Sidebar() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="container">
      <div className="sidebar">
        <h2>
          <span>my</span>memories
        </h2>
        <button className="sidebar_btn">create theme</button>

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
            icon={<HeartBrokenRoundedIcon fontSize="large" />}
            checkedIcon={<FavoriteIcon fontSize="large" />}
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
