import { Routes, Route } from "react-router";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import OfflineNotice from "./components/offlineNotice";
import OnlineStatus from "./components/OnlineStatus";

const App = () => {
  const isOnline = OnlineStatus();
  // console.log("isOnline : ", isOnline);

  if (!isOnline) {
    return <OfflineNotice />;
  }

  return <>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>

}

export default App