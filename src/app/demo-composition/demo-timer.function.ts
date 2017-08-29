import { Observable } from 'rxjs/Observable';
import { Composed } from '../util/compose';
declare module '../util/compose' {
    export interface Composed {
        /**
         * Returns an observable that produces new date on an interval (default:500 ms)
         */
        timer(): Observable<Date>;
    }
}
export const timer = () =>
    new Observable(observer => {
        let clear;
        function tick() {
            observer.next(new Date());
            clear = setTimeout(tick, 500);
        }
        tick(); // get it going;
        // sure it does not complete. yet...
        return () => clearTimeout(clear);
    });
