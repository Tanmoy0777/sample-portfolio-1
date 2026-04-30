"use client";
import dynamic from "next/dynamic";

const PortfolioClient = dynamic(() => import("./PortfolioClient"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  ),
});

export default function ClientWrapper() {
  return <PortfolioClient />;
}
