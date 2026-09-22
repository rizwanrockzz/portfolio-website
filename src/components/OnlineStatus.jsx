import { useState, useEffect } from "react";

const OnlineStatus = (
  pingUrl = `${import.meta.env.BASE_URL}ping.txt`,
  interval = 60000
) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    let timer;

    const checkOnline = async () => {
      try {
        const response = await fetch(pingUrl, {
          method: "HEAD",
          cache: "no-cache",
        });

        setIsOnline(response.ok);
      } catch {
        setIsOnline(false);
      }
    };

    const handleOnline = () => checkOnline();
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    timer = setInterval(checkOnline, interval);

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