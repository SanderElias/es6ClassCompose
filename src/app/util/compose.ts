export class Composed {}

export interface ClassLike {
    new (...values: any[]): Object;
    readonly prototype: Object;
    [propName: string]: any;
}

export function ComposeComponent(...fns) {
    return target => composeObject(target, ...fns);
};

/**
 * Composeobject is a way to help using
 * composition on (typescript) classes
 * Also, its makes the methods curried on the way.
 *
 * @param target Object to add pure methods on;
 * @param fns array of pure named functions
 */
export const composeObject = <T extends ClassLike>(
    target: T,
    ...fns: Function[]
): T => {
    fns.forEach(fn => {
        // use falsy on purpose
        if (!fn.name) {
            throw new Error("composeObject can't handle unnamed functions");
        }
        target.prototype[fn.name] = function(...args) {
            const arity = fn.length;
            // const self = this;
            if (arity <= 1) {
                return fn(this);
            }
            // add this as last parameter. in functional programming, that's where the 'data' goes.
            const curryNext = helperArgs =>
                helperArgs.length < arity - 1
                    ? (...curriedArgs) =>
                          curryNext([...helperArgs, ...curriedArgs])
                    : fn(...[...helperArgs, this]);
            return curryNext(args);
        };
    });
    return target;
};
