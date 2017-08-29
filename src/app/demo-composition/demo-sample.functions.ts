//import { Composed } from './compose';
import { Composed } from '../util/compose';
import { composeObject } from '../util/compose';
declare module '../util/compose' {
    export interface Composed {
        /**
         * function that return 'Hi'
         */
        sayHi(): string;

        /**
         * Functions that logs the current instance to the console
         */
        logComponent(): void;
    }
}

export function sayHi() {
    return 'Hi';
}

export function logComponent(state) {
    console.log('the last parameter is the class instance itself', state);
}
