import { useState } from "react";
import Button from "@mui/material/Button";

export default function ButtonMedia({ getLoad }: any) {
  const [load, setLoad]: any = useState([]);
  const [desc, setDesc]: any = useState([])
  const [title, setTitle]: any = useState([])

  let token: any = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("tokencha");
    token = JSON.parse(token);
  }

  const imageUpload = (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("name", file.name);
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
          getLoad(data.data);
        }
      });
  };
  return (
    <Button
      color="primary"
      className="sidebar_button"
      variant="contained"
      component="label"
    >
      Chose media
      <input
        hidden
        accept="image/*"
        type="file"
        name="myFile"
        onChange={(e) => imageUpload(e)}
      />
    </Button>
  );
}
