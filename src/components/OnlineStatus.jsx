import { useState, useEffect } from "react";

const OnlineStatus = (pingUrl = "/ping.txt", interval = 60000) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  console.log("isOnline OnlineStatus : ", isOnline);

  useEffect(() => {
    let timer;

    const checkOnline = async () => {
      try {
        // try to fetch a tiny resource
        const response = await fetch(pingUrl, { method: "HEAD", cache: "no-cache" });
        setIsOnline(response.ok);
      } catch {
        setIsOnline(false);
      }
    };

    const handleOnline = () => checkOnline();  // trigger when browser thinks it’s online
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // periodic check
    timer = setInterval(checkOnline, interval);

    // initial check
    checkOnline();

    return () => {
      clearInterval(timer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [pingUrl, interval]);

  return isOnline;
};

export default OnlineStatus;
