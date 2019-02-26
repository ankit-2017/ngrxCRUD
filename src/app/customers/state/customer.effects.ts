import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';

import {map, mergeMap, catchError} from 'rxjs/operators';
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

  @Effect()
  loadSingleCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<CustomerAction.LoadSingleCustomer>(
      CustomerAction.CustomerActionTypes.LOAD_SINGLE_CUSTOMER
    ),
    mergeMap((action: CustomerAction.LoadSingleCustomer) =>
    this.customerService.getCustomerById(action.payload).pipe(
      map((customer: Customer) =>
        new CustomerAction.LoadSingleCustomerSuccess(customer)
      ),
      catchError(err => of(new CustomerAction.LoadSingleCustomerFail(err)))
    )
    )
  );

  @Effect()
  CreateCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<CustomerAction.CreateCustomer>(
      CustomerAction.CustomerActionTypes.CREATE_CUSTOMER
    ),
    map((action: CustomerAction.CreateCustomer) => action.payload),
    mergeMap((customer: Customer) =>
    this.customerService.createCustomer(customer).pipe(
      map((newCustomer: Customer) =>
        new CustomerAction.CreateCustomerSuccess(newCustomer)
      ),
      catchError(err => of(new CustomerAction.CreateCustomerFail(err)))
    ))
  );

  @Effect()
  UpdateCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<CustomerAction.UpdateCustomer>(
      CustomerAction.CustomerActionTypes.UPDATE_CUSTOMER
    ),
    map((action: CustomerAction.UpdateCustomer) => action.payload),
    mergeMap((customer: Customer) =>
    this.customerService.updateCustomer(customer).pipe(
      map((updateCustomer: Customer) =>
        new CustomerAction.UpdateCustomerSuccess({
          id: updateCustomer.id,
          changes: updateCustomer
        })
      ),
      catchError(err => of(new CustomerAction.UpdateCustomerFail(err)))
    ))
  );

  @Effect()
  DeleteCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<CustomerAction.DeleteCustomer>(
      CustomerAction.CustomerActionTypes.DELETE_CUSTOMER
    ),
    map((action: CustomerAction.DeleteCustomer) => action.payload),
    mergeMap((id: number) =>
      this.customerService.deleteCustomer(id).pipe(
      map(() => new CustomerAction.DeleteCustomerSuccess(id)
      ),
      catchError(err => of(new CustomerAction.DeleteCustomerFail(err)))
    ))
  );
}
