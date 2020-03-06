import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
    // styleUrls: ''
})
export class AboutComponent implements OnInit, OnDestroy {

    @Input() someprop;

    superduperparam = null;

    private routeParamUpdate: Subscription;

    // RouteParams ROUTER_PROVIDERS
    constructor(private route: ActivatedRoute, private router: Router) {

        // data passed from route
        // https://yakovfain.com/2015/11/11/angular-2-passing-data-to-routes/
        console.log('---', route);
        console.log('---', route.snapshot);

    }

    ngOnInit() {

        console.log('About ngOnInit');

        // @Input... need to think of better way
        this.someprop = this.route.snapshot.data.someprop;

        // refresh when route params change
        // https://medium.com/@mvivek3112/reloading-components-when-change-in-route-params-angular-deed6107c6bb
        // https://stackoverflow.com/questions/53680613/reload-component-when-change-parts-routing-in-angular
        this.routeParamUpdate = this.route.params.subscribe(params => {

            this.superduperparam = this.route.snapshot.paramMap.get('superduperparam');

        });

    }

    ngOnDestroy() {

        console.log('About ngOnDestroy');

        this.routeParamUpdate.unsubscribe();

    }

}
