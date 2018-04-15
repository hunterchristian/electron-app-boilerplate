declare global {
    type Maybe<T> = T | null | undefined;
  
    // Helper type for nullable values that's more strict than `Maybe`.
    // Use this in scenarios where you'd like to rely on explict null checks.
    // (You might does this to avoid boolean casting, which yields a performance
    // benefit in critical situations).
    type Nullable<T> = T | null;
  
    type ImmutableRecord<K extends string, V> = Readonly<Record<K, V>>;
  }
  
  export { };