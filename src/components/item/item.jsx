import PropTypes from "prop-types";
import { deleteLink } from "../../utils/hooks/API";
import { useContext } from "react";
import { Context } from "../../utils/Store";

const Item = ({ short, full, category }) => {
  const [state, dispatch] = useContext(Context);

  const handleDelete = async () => {
    try {
      await deleteLink(short);
      dispatch({
        type: "SET_LIST",
        payload: state.linkList.filter((item) => item.short !== short),
      });
    } catch (err) {
      console.log("Error deleting link", err);
    }
  };

  return (
    <li className="group block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-500">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-link self-center text-gray-600"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h32v32H0z" fill="none" />
            <path d="M9 15l6 -6" />
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
          </svg>
          <a href={`/${short}`} className="">
            <strong className="font-medium text-slate-800">{short}</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">{full}</p>
          </a>
        </div>
        {/* <strong>{category}</strong> */}
        <div className="relative -right-8 space-x-4 opacity-0 transition-all duration-500 group-hover:right-0 group-hover:opacity-100">
          <button id="edit-link" className="rounded-lg bg-gray-100 px-1 py-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-edit  text-teal-600 hover:text-teal-600/75"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
              <path d="M16 5l3 3" />
            </svg>
          </button>
          <button
            id="delete-link"
            className="rounded-lg bg-gray-100 px-1 py-1 "
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash text-teal-600 hover:text-pink-600/75"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  short: PropTypes.string,
  full: PropTypes.string,
  category: PropTypes.string,
};
export default Item;
