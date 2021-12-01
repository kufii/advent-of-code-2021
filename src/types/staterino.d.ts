/* eslint-disable @typescript-eslint/ban-types */
declare module 'staterino' {
  type Selector<S, T = any> = (state: S) => T
  interface StoreHook<S extends object> {
    <T>(selector: Selector<S, T>): T
    <T extends Selector<S>[] | []>(selectors: T): {
      [K in keyof T]: T[K] extends Selector<S> ? ReturnType<T[K]> : never
    }
    set: (patch: import('mergerino').MultipleTopLevelPatch<S>) => void
    get: () => S
  }
  interface Conf<S extends object> {
    merge: import('mergerino').Merge<S>
    hooks: { useReducer: any; useLayoutEffect: any }
    state: S
  }

  interface CreateHook {
    <S extends object>(conf: Conf<S>): StoreHook<S>
  }

  const staterino: CreateHook

  export default staterino
}
