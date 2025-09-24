const OfflineNotice = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                background: "#ffffff",
                color: "#333",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                zIndex: 9999,
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h1>⚠️ No Internet Connection</h1>
            <p>Sorry, it seems you are not connected to the internet.</p>
            <p>Please check your connection and try again.</p>
        </div>
    );
};

export default OfflineNotice;