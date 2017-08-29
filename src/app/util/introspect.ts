import { Composed } from './compose';
import { composeObject } from './compose';

declare module './compose' {
    export interface Composed {
        /**
         * Walks up the prototype chain and returns all methods as an string[]
         */
        showMethods(): string[];

        /**
         * Walks up the prototype chain and returns all properties as an string[]
         */
        showProps(): string[];
    }
}

// composeObject(Composed, showMethods, showProps);

export const INTROSPECTS = [showMethods, showProps];

export function showMethods(o) {
    return [...walkPrototypeChain(o)].filter(e => typeof o[e] === 'function');
}

export function showProps(o) {
    return [...walkPrototypeChain(o)].filter(e => typeof o[e] !== 'function');
}

function* walkPrototypeChain(o): Iterable<string> {
    const names = Object.getOwnPropertyNames(o);
    for (const name of names) {
        yield name;
    }
    // walk up the protype chain, but exclude the top level one (object itself)
    if (o.__proto__ && o.__proto__.__proto__) {
        yield* walkPrototypeChain(o.__proto__);
    }
}
