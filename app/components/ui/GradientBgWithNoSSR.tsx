import dynamic from "next/dynamic";

// @ts-ignore
const GradientBgWithNoSSR = dynamic(() => import("./GradientBg"), { ssr: false });

export default function Page() {
  return <GradientBgWithNoSSR />;
}
