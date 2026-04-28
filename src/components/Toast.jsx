import { useEffect } from "react";

function Toast({ message, show, setShow }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#ef4444",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: "8px",
      boxShadow: "0 0 15px rgba(0,0,0,0.5)",
      zIndex: 9999
    }}>
      {message}
    </div>
  );
}

export default Toast;