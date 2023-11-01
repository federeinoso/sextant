import { useEffect, useState } from "react";

const PylonConnector = () => {
  const [latency, setLatency] = useState("");

  useEffect(() => {
    const client = new WebSocket("ws://localhost:55455");

    client.onopen = () => {
      console.log("Establishing a new connection with client");
    };

    client.onmessage = (event) => {
      setLatency(new Date().getTime() - event.data);
    };

    client.onclose = (event) => {
      if (event.wasClean) {
        console.log(
          `Connection closed cleanly, code=${event.code}, reason=${event.reason}`
        );
      } else {
        console.error("Connection closed abruptly");
      }
    };

    client.onerror = (error) => {
      console.error(`Connection error: ${error.message}`);
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div className="flex-container">
      <p>{latency} ms</p>
    </div>
  );
};

export default PylonConnector;
