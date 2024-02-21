import { Link, Navigate, json, redirect, useParams } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import { fetchLong } from "../../utils/hooks/API";
import { useEffect } from "react";

const NotFound = () => {
  const { short } = useParams();
  const { data } = useFetch(fetchLong, short);

  useEffect(() => {
    redirect("/");
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
