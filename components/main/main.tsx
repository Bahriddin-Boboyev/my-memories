import React from "react";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import HeartBrokenRoundedIcon from "@mui/icons-material/HeartBrokenRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar } from "@mui/material";
import theme from "../../img/theme.png";
import icon1 from "../../img/icon1.svg";
import icon2 from "../../img/icon2.svg";
import icon3 from "../../img/icon3.svg";

export default function Main({ data }: any) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  console.log(data);

  return (
    <div className="main_box">
      <ul className="list">
        {data.map((item: any) => (
          <li className="item" key={item.id}>
            <div className="box-main3">
              <div className="main_text-block">
                <div className=" j-flex main_img_block">
                  <div>
                    <Avatar
                      className="img"
                      alt="Remy Sharp"
                      src={item.files[0]?.url}
                      sx={{ width: 70, height: 70 }}
                    />
                  </div>
                  <div className="main_text_block-2">
                    <h3>
                      {item.title?.length >= 22
                        ? item.title.slice(0, 22) + "..."
                        : item.title}
                    </h3>
                    <p>
                      {item.desc?.length >= 103
                        ? item.desc?.slice(0, 103) + "..."
                        : item.desc}
                    </p>
                  </div>
                </div>
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
                <Image src={icon3} alt="icon" />
              </button>
            </div>
            <div className="d-flex date_items_block">
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
                      icon={<FavoriteBorderRoundedIcon />}
                      checkedIcon={<HeartBrokenRoundedIcon />}
                    />
                  </div>
                </button>
              </div>
              <div className="main_items_date">
                <p>{item.created_at.slice(0, 10)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*         <li className="item">
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
          <div className="d-flex date_items_block">
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
                    icon={<FavoriteBorderRoundedIcon />}
                    checkedIcon={<HeartBrokenRoundedIcon />}
                  />
                </div>
              </button>
            </div>
            <div className="main_items_date">
              <p>01/01/2023</p>
            </div>
          </div>
        </li>
 */
