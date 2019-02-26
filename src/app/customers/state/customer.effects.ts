import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';

import {map, mergeMap, catchError} from 'rxjs/operators'
import {CustomerService} from '../customer.service';
import * as CustomerAction from '../state/customer.actions';
import {Customer} from '../customer.model';

@Injectable()
export class CustomerEffect {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType<CustomerAction.LoadCustomers>(
      CustomerAction.CustomerActionTypes.LOAD_CUSTOMER
    ),
    mergeMap((action: CustomerAction.LoadCustomers) =>
    this.customerService.getCustomers().pipe(
      map((customers: Customer[]) =>
        new CustomerAction.LoadCustomersSuccess(customers)
      ),
      catchError(err => of(new CustomerAction.LoadCustomersFail(err)))
    )
    )
  );
}
