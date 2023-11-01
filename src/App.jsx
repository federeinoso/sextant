import AddressDisplay from "./components/AddressDisplay/AddressDisplay";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Banner title="Sextant Dashboard" />
      <div>
        <Exhibit name="Public IPv4 Address">
          <AddressDisplay url="https://api.ipify.org?format=json" />
        </Exhibit>
        <Exhibit name="Public IPv6 Address">
          <AddressDisplay url="https://api64.ipify.org?format=json" />
        </Exhibit>
      </div>
    </div>
  );
};

export default App;
