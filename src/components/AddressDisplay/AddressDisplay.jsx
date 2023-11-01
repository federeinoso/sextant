import { useState, useEffect } from "react";

function AddressDisplay({ url }) {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setIp(data.ip))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="flex-container">
      <p>{ip}</p>
    </div>
  );
}

export default AddressDisplay;
