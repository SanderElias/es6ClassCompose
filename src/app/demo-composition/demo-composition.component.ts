import { Component, OnInit } from '@angular/core';
import { ComposeComponent, Composed } from '../util/compose';
import { INTROSPECTS } from '../util/introspect';
import { sayHi, logComponent } from './demo-sample.functions';

@Component({
    selector: 'app-demo-composition',
    template: `
    <p>
      Object composition. This components has:
    </p>
    <ul>
        <li *ngFor="let name of methods">{{name}}</li>
    </ul>
    <ul>
        <li *ngFor="let name of props">{{name}}</li>
    </ul>

  `,
    styles: []
})
@ComposeComponent(sayHi, logComponent, ...INTROSPECTS)
export class DemoCompositionComponent extends Composed implements OnInit {
    methods: string[] = this.showMethods();
    props = [''];
    private hi = '';

    constructor() {
        super();
    }

    ngOnInit() {
        this.logComponent();
        this.hi = this.sayHi();
        this.props = this.showProps();
    }
}
