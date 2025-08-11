const Toastify = () => {

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "#28a745",
        padding: "10px 20px",
        color: "#fff",
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: "16px",
        borderRadius: "6px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        animation: "fadeIn 0.3s ease-in-out",
      }}
      >
          Copied
    </div>
  );
};

export default Toastify;
