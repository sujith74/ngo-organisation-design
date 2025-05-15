'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Preview = () => {
  const [searchParams] = useSearchParams();

  const [styles, setStyles] = useState({
    color: "#2563EB",
    radius: "8px",
    size: "16px",
    cardRadius: "12px",
    cardShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cardTextSize: "16px",
  });
const router = useRouter();
  
  useEffect(() => {
    if (router.isReady) {
      const {
        color,
        radius,
        size,
        cardRadius,
        cardShadow,
        cardTextSize,
      } = router.query;

      setStyles((prev) => ({
        ...prev,
        color: color || prev.color,
        radius: radius || prev.radius,
        size: size || prev.size,
        cardRadius: cardRadius || prev.cardRadius,
        cardShadow: cardShadow || prev.cardShadow,
        cardTextSize: cardTextSize || prev.cardTextSize,
      }));
    }
  }, [router.isReady, router.query]);


  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Live Preview</h2>

      <div className="flex-grow border rounded-lg overflow-hidden h-[600px]">
      <iframe
  title="Live Preview"
  src={`/?color=${encodeURIComponent(styles.color)}&radius=${encodeURIComponent(styles.radius)}&size=${encodeURIComponent(styles.size)}&cardRadius=${encodeURIComponent(styles.cardRadius)}&cardShadow=${encodeURIComponent(styles.cardShadow)}&cardTextSize=${encodeURIComponent(styles.cardTextSize)}`}
  className="w-full h-full border-none"
/>

      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Preview reflects the homepage with your current settings.
      </p>
    </div>
  );
};

export default Preview;
