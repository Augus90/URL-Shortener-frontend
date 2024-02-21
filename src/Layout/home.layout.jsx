import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PropTypes from "prop-types";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl  py-8 sm:px-6 sm:py-12 lg:px-8">
          {children}
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
