import PropTypes from "prop-types";

const ItemsLayout = ({ children }) => {
  return (
    <article className=" p-4">
      <div className="flex items-center gap-4">
        {/* <img
          alt=""
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="size-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-white">Claire Mac</h3>

          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">
                  {" "}
                  Twitter{" "}
                </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">
                  {" "}
                  GitHub{" "}
                </a>
              </li>

              <li className="p-1 leading-none">
                <a href="#" className="text-xs font-medium text-gray-300">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>

      <ul className="mt-4 space-y-2">{children}</ul>
    </article>
  );
};

ItemsLayout.propTypes = {
  children: PropTypes.node,
};

export default ItemsLayout;
