import UrlForm from "../../components/urlForm/UrlForm";
import Item from "../../components/item/item";
import Divider from "../../components/divider/Divider";
import ItemsLayout from "../../Layout/items.layout";
import useFetch from "../../utils/hooks/useFetch";
import { fetchAllLinks } from "../../utils/hooks/API";
import Popup from "../../utils/popups";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/Store";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const [state, dispatch] = useContext(Context);
  const { data } = useFetch(fetchAllLinks);

  const setData = (links) => {
    console.log("Links", links);
    dispatch({ type: "SET_LIST", payload: links });
  };
  useEffect(() => {
    if (data && data.length > 0) {
      setData(data);
    }
  }, [data]);

  let isHidden = state.showPopup === true ? "opacity-0" : "opacity-100";

  return (
    <section>
      <div className={`relative transition-all ${isHidden}`}>
        <Popup />
      </div>
      <Hero />
      <UrlForm />
      <div className="py-12">
        <Divider />
      </div>
      <div>
        <ItemsLayout>
          {state &&
            state.linkList.map((item) => (
              <Item key={item.short} full={item.long} short={item.short} />
            ))}
        </ItemsLayout>
      </div>
    </section>
  );
};

export default Home;
