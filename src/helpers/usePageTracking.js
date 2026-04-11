import { useEffect } from "react";
import { useLocation } from "react-router";

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        if (!globalThis.gtag) return;

        globalThis.gtag("config", import.meta.env.VITE_GA_ID, {
            page_path: location.pathname + location.search,
        });

    }, [location]);
};

export default usePageTracking;