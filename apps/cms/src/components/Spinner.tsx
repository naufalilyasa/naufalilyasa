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
    <div className={`${wait ?? "delay-300"}`}>
      <PulseLoader
        loading={show}
        color="#ffffff"
        size={size}
      />
    </div>
  );
}

export default Spinner;
