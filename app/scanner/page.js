"use client";

import Scanner from "./scanner";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();

  const qrCodeSuccessCallback = (decodedText) => {
    router.push(`/order/${decodedText}`);
  };

  return (
    <>
      <Scanner
        className="flex relative rounded overflow-hidden justify-center items-center"
        successCallback={qrCodeSuccessCallback}
      >
        <h1 className="absolute ">Hola</h1>
      </Scanner>
    </>
  );
}
