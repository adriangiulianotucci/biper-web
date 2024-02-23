import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { createPortal } from "react-dom";

export default function Scanner({
  children,
  className = "",
  successCallback = () => {},
}) {
  const [parent, setParent] = useState(undefined);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, showTorchButtonIfSupported: true };
    html5QrCode
      .start({ facingMode: "environment" }, config, successCallback)
      .then(() => {
        setParent(html5QrCode.element);
      });
  }, []);

  return (
    <div id="reader" className={className}>
      {parent && createPortal(children, parent)}
    </div>
  );
}
