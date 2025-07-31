import { PulseLoader } from "react-spinners";

function Spinner({
  show,
  wait,
  size,
}: {
  show?: boolean;
  wait?: `delay-${number}`;
  size: number;
}) {
  return (
    <>
      <PulseLoader
        loading={show}
        className={`${wait ?? "delay-300"}`}
        color="#ffffff"
        size={size}
      />
    </>
  );
}

export default Spinner;
