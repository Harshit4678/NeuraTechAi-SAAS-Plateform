import { Player } from "@lottiefiles/react-lottie-player";

export default function LottieAnimation({ src, className }) {
  return <Player autoplay loop src={src} className={className} />;
}
