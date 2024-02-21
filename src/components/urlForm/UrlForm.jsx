import { useRef } from "react";
import { useState } from "react";
import { postNewLink } from "../../utils/hooks/API";

const UrlForm = () => {
  const [fullURL, setFullURL] = useState();
  const url = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewLink(url.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-5">
        <label
          htmlFor="website-admin"
          className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div className="flex w-full max-w-full">
          <span className="inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            ref={url}
            className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="URL"
          />
        </div>
        <button
          type="submit"
          className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UrlForm;
