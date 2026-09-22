import { Routes, Route } from "react-router";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import OfflineNotice from "./components/OfflineNotice";
import OnlineStatus from "./components/OnlineStatus";
import usePageTracking from "./helpers/usePageTracking";

const App = () => {
  usePageTracking();

  const isOnline = OnlineStatus();

  if (!isOnline) {
    return <OfflineNotice />;
  }

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;