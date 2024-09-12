import Text from "./components/text";
import data from "./components/assets/data.json";
import Image from "./components/image";
import Footer from "./components/footer";
import Slider from "./components/slider";

function App() {
  return (
    <>
      <Image src={data[0].img} />
      <Slider />
      <Text data={data} />
      <Footer />
    </>
  );
}

export default App;
