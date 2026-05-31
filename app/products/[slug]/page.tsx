import React from "react";
import { notFound } from "next/navigation";
import AluminumProductDetail from "../aluminum/page";
import UpvcProductDetail from "../upvc/page";
import PanelsProductDetail from "../panels/page";
import ScreensProductDetail from "../screens/page";
import SunflexProductDetail from "../sunflex/page";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  switch (slug) {
    case "aluminum":
      return <AluminumProductDetail />;
    case "upvc":
      return <UpvcProductDetail />;
    case "panels":
      return <PanelsProductDetail />;
    case "screens":
      return <ScreensProductDetail />;
    case "sunflex":
      return <SunflexProductDetail />;
    default:
      notFound();
      return null;
  }
}
