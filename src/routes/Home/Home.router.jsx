import UrlForm from "../../components/urlForm/UrlForm";
import Item from "../../components/item/item";
import Divider from "../../components/divider/Divider";
import ItemsLayout from "../../Layout/items.layout";
import useFetch from "../../utils/hooks/useFetch";
import { fetchAllLinks } from "../../utils/hooks/API";
import Popup from "../../utils/popups";

const Home = () => {
  const { data } = useFetch(fetchAllLinks);

  return (
    <section>
      {/* <div className="relative">
        <Popup />
      </div> */}
      <UrlForm />
      <div className="py-8">
        <Divider />
      </div>
      <div>
        <ItemsLayout>
          {data &&
            data.map((item) => (
              <Item key={item.short} full={item.long} short={item.short} />
            ))}
          <Item
            full={"http://www.google.com"}
            short={"12314"}
            category={"none"}
          />
        </ItemsLayout>
      </div>
    </section>
  );
};

export default Home;
