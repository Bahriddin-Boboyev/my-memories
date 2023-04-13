import { useEffect, useState } from "react";
import { requestAxios } from "@/config/requestAxios";

interface IMethod {
  method: string;
  url: string;
  body?: any;
}

export default function useAxios({ method, url, body }: IMethod) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  const fetchdata = () => {
    requestAxios({ method, url})
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (method && url) {
      fetchdata();
    }
  }, [method, url, body]);

  return { data, error, loading };
}
