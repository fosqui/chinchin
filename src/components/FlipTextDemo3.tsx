import { FlipText } from "./ui/flip-text";

export default function FlipTextDemo3() {
  return (
    <FlipText
      className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem] pb-5"
      word="marketing   digital"
    />
  );
}