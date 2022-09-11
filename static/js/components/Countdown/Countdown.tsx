import React, { CSSProperties } from 'react';
import useInterval from 'src/hooks/useInterval';
import cn from 'classnames';

type CountdownProps = {
  timeStamp: number;
  className?: string;
};

const getCountdownValue = (value) => {
  return { '--value': value } as CSSProperties;
};

const Countdown = ({ timeStamp, className }: CountdownProps) => {
  const [duration, setDuration] = React.useState(timeStamp);
  useInterval(
    () => {
      if (!duration) {
        return;
      }
      setDuration(duration - 1);
    },
    1000,
    false,
  );

  React.useEffect(() => {
    setDuration(timeStamp);
  }, [setDuration, timeStamp]);

  let calculateDuration = duration;
  const dayValue = getCountdownValue(Math.floor(calculateDuration / 86400));
  calculateDuration %= 86400;
  const hourValue = getCountdownValue(Math.floor(calculateDuration / 3600));
  calculateDuration %= 3600;
  const minuteValue = getCountdownValue(Math.floor(calculateDuration / 60));
  calculateDuration %= 60;
  const secondValue = getCountdownValue(calculateDuration);

  return (
    <div
      className={cn(
        'grid auto-cols-max grid-flow-col justify-center gap-14 rounded-xl border-2 border-b-dgz-border bg-blue-50 p-2 text-center lg:p-4',
        className,
      )}
    >
      <div className="flex flex-col">
        <span className="font-mono countdown text-base font-bold lg:text-xl">
          <span className="mx-[10px] lg:mx-5" style={dayValue}></span>
        </span>
        <span className="text-[10px] text-secondary lg:text-sm">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="font-mono countdown text-base font-bold lg:text-xl">
          <span className="mx-[10px] lg:mx-5" style={hourValue}></span>
        </span>
        <span className="text-[10px] text-secondary lg:text-sm">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="font-mono countdown text-base font-bold lg:text-xl">
          <span className="mx-[10px] lg:mx-5" style={minuteValue}></span>
        </span>
        <span className="w-[90%] text-[10px] text-secondary lg:text-sm">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="font-mono countdown text-base font-bold lg:text-xl">
          <span className="mx-[10px] lg:mx-5" style={secondValue}></span>
        </span>
        <span className="text-[10px] text-secondary lg:text-sm">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
