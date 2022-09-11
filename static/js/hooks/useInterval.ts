import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number | null, preFetch: boolean) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
    if (preFetch) {
      callback();
    }
  }, [callback, preFetch]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
