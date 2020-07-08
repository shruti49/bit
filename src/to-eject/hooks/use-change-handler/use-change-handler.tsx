import { useRef } from 'react';

/** execute handler immediately(!) when value changes */
export function useChangeHandler<T>(
  value: T,
  handler: (next: T, prev: T) => void,
  cmp: (a: T, b: T) => boolean = defaultEqualityComparer
) {
  const ref = useRef(value);
  const { current: prev } = ref;

  if (!cmp(prev, value)) {
    ref.current = value;
    handler(value, prev);
  }
}

function defaultEqualityComparer<T>(a: T, b: T) {
  return a === b;
}
