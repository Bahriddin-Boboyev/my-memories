import Image from "next/image";
import loginImg from "../../img/Vector.png";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { requestAxios } from "@/config/requestAxios";
import Link from "next/link";

/* interface IRegister {
  name: string | number;
  username: string | number;
  password: string | number;
  email: string | number | any;
} */

export default function Register() {
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

  const fetchData = (
    name: string | number,
    username: string | number,
    email: string | number | any,
    password: string | number,
  ) => {
    requestAxios
      .post("/users/register", {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((data) => {
        console.log(data.data);

        if (data.data.success) {
          let token = data.data.token;
          localStorage.setItem("tokencha", JSON.stringify(token));
          alert(data.data.message);
          window.location.replace("/");
        } else {
          alert(data.data.message);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  function handlerSubmit(e: React.FormEvent<HTMLFormElement> | any) {
    e.preventDefault();
    fetchData(
      e.target[0].value,
      e.target[2].value,
      e.target[4].value,
      e.target[6].value
    );
  }

  return (
    <div className="container">
      <div className="login d-flex">
        <div className="login-block-1">
          <div className="login-img-block">
            <Image className="login-image-1" src={loginImg} alt="login img" />
          </div>
          <h3>mymemories</h3>
          <p>
            No matter how much suffering you went through, you never wanted to
            let go of those memories.
          </p>
        </div>
        <div className="login-block-2">
          <h2>
            <span>my</span>memories
          </h2>

          <div>
            <div className="d-flex login-sign-bnts">
              <h3>LOGIN</h3>
              <div className="login_line"></div>
              <h3 className="active_btn">SIGN UP</h3>
            </div>

            <form onSubmit={handlerSubmit}>
              <div className="boxspan">
                <CssTextField
                  className="input"
                  required
                  autoComplete="off"
                  color="primary"
                  id="1"
                  label="enter your name"
                  variant="outlined"
                  InputLabelProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                    sx: { height: 17 },
                  }}
                />
              </div>
              <div className="boxspan">
                <CssTextField
                  type={"text"}
                  className="input"
                  required
                  autoComplete="off"
                  color="primary"
                  id="2"
                  label="enter your username"
                  variant="outlined"
                  InputLabelProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                    sx: { height: 17 },
                  }}
                />
              </div>
              <div className="boxspan">
                <CssTextField
                  type={"email"}
                  className="input"
                  required
                  autoComplete="off"
                  color="primary"
                  id="2"
                  label="enter your email"
                  variant="outlined"
                  InputLabelProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                    sx: { height: 17 },
                  }}
                />
              </div>
              <div className="boxspan">
                <CssTextField
                  type={"password"}
                  className="input"
                  required
                  autoComplete="off"
                  color="primary"
                  id="2"
                  label="enter your password"
                  variant="outlined"
                  InputLabelProps={{
                    style: { fontFamily: "nunito", color: "white" },
                  }}
                  inputProps={{
                    style: { fontFamily: "nunito", color: "white" },
                    sx: { height: 17 },
                  }}
                />
              </div>
              <div className="btn_block">
                <button className="btn register_btn" type="submit">
                  LOGIN
                </button>

                <div className="btn2_block">
                  <Link href={"/page/login"}>
                    <button className="btn2">register again</button>{" "}
                  </Link>
                  <div></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
