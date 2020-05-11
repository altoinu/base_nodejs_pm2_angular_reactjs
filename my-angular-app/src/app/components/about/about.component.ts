import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  ParamMap
} from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  @Input() someprop;

  superduperparam = null;
  someneatquerystring: string = null;

  private routeParamUpdate: Subscription;
  private queryParamUpdate: Subscription;

  // RouteParams ROUTER_PROVIDERS
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

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
    // https://angular.io/start/start-routing#using-route-information
    this.routeParamUpdate = this.route.paramMap.subscribe(params => {

      this.superduperparam = params.get('superduperparam');
      console.log(this.superduperparam);

    });

    /*
    // https://medium.com/@mvivek3112/reloading-components-when-change-in-route-params-angular-deed6107c6bb
    // https://stackoverflow.com/questions/53680613/reload-component-when-change-parts-routing-in-angular
    this.routeParamUpdate = this.route.params.subscribe(params => {

      this.superduperparam = this.route.snapshot.paramMap.get('superduperparam');
      console.log(this.superduperparam);

    });
    */

    /*
    Observable
    // https://angular.io/guide/router#activated-route-in-action
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log('yay');
        this.superduperparam = params.get('superduperparam');
      })
    );
    */

    this.queryParamUpdate = this.route.queryParams.subscribe(queryParams => {

      this.someneatquerystring = this.route.snapshot.queryParamMap.get('someneatquerystring');

      console.log(this.someneatquerystring);

    });

  }

  ngOnDestroy() {

    console.log('About ngOnDestroy');

    this.routeParamUpdate.unsubscribe();
    this.queryParamUpdate.unsubscribe();

  }

}
