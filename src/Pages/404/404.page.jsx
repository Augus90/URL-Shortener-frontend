import {
  Link,
  Navigate,
  json,
  redirect,
  useNavigate,
  useParams,
} from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import { fetchLong } from "../../utils/hooks/API";
import { useEffect } from "react";

const NotFound = () => {
  const { short } = useParams();
  const navigate = useNavigate();
  const { data } = useFetch(fetchLong, short);

  useEffect(() => {
    console.log("Data", data);
    // navigate(data.url, { replace: true });
    window.location.replace(`${data.url}`);
  }, [data]);

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="uppercase tracking-widest text-gray-500">
        404 | Not Found
      </h1>
    </div>
  );
};

export default NotFound;
