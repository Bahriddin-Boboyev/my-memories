import React from "react";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import theme from "../../img/theme.png";
import icon1 from "../../img/icon1.svg";
import icon2 from "../../img/icon2.svg";
import icon3 from "../../img/icon3.svg";

export default function Main() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="main_box">
      <ul className="list">
        <li className="item">
          <div className="box-main3">
            <div className="main_text-block">
              <h3>Shamollarda qolgan...</h3>
              <p>
                Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                ketadi. Lekin jangda ishtirok...
              </p>
            </div>
          </div>
          <div className="main-absolute">
            <button>
              <Image src={icon1} alt="icon" />
            </button>
            <button>
              <Image src={icon2} alt="icon" />
            </button>
            <button>
              {" "}
              <Image src={icon3} alt="icon" />
            </button>
          </div>
          <div className="main_like-block">
            <button className="main_like">
              <div>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorderRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
            <button className="main_dislike">
              <div>
                <Checkbox
                  {...label}
                  icon={<HeartBrokenRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
          </div>
        </li>
        <li className="item">
          <div className="box-main3">
            <div className="main_text-block">
              <h3>Shamollarda qolgan...</h3>
              <p>
                Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                ketadi. Lekin jangda ishtirok...
              </p>
            </div>
          </div>
          <div className="main-absolute">
            <button>
              <Image src={icon1} alt="icon" />
            </button>
            <button>
              <Image src={icon2} alt="icon" />
            </button>
            <button>
              {" "}
              <Image src={icon3} alt="icon" />
            </button>
          </div>
          <div className="main_like-block">
            <button className="main_like">
              <div>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorderRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
            <button className="main_dislike">
              <div>
                <Checkbox
                  {...label}
                  icon={<HeartBrokenRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
          </div>
        </li>
        <li className="item">
          <div className="box-main3">
            <div className="main_text-block">
              <h3>Shamollarda qolgan...</h3>
              <p>
                Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                ketadi. Lekin jangda ishtirok...
              </p>
            </div>
          </div>
          <div className="main-absolute">
            <button>
              <Image src={icon1} alt="icon" />
            </button>
            <button>
              <Image src={icon2} alt="icon" />
            </button>
            <button>
              {" "}
              <Image src={icon3} alt="icon" />
            </button>
          </div>
          <div className="main_like-block">
            <button className="main_like">
              <div>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorderRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
            <button className="main_dislike">
              <div>
                <Checkbox
                  {...label}
                  icon={<HeartBrokenRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
          </div>
        </li>
        <li className="item">
          <div className="box-main3">
            <div className="main_text-block">
              <h3>Shamollarda qolgan...</h3>
              <p>
                Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                ketadi. Lekin jangda ishtirok...
              </p>
            </div>
          </div>
          <div className="main-absolute">
            <button>
              <Image src={icon1} alt="icon" />
            </button>
            <button>
              <Image src={icon2} alt="icon" />
            </button>
            <button>
              {" "}
              <Image src={icon3} alt="icon" />
            </button>
          </div>
          <div className="main_like-block">
            <button className="main_like">
              <div>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorderRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
            <button className="main_dislike">
              <div>
                <Checkbox
                  {...label}
                  icon={<HeartBrokenRoundedIcon />}
                  checkedIcon={<FavoriteIcon />}
                />
              </div>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
