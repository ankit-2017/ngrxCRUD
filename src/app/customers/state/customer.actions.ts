import {Action} from '@ngrx/store';
import { Update } from "@ngrx/entity";
import {Customer} from '../customer.model';

export enum CustomerActionTypes {
    LOAD_CUSTOMER = '[Customer Load Customers]',
    LOAD_CUSTOMER_SUCCESS = '[Customer Load Customers Success]',
    LOAD_CUSTOMER_FAIL = '[Customer Load Customers Fail]',

    // get single customer

    LOAD_SINGLE_CUSTOMER = '[Customer] Load single Customer',
    LOAD_SINGLE_CUSTOMER_SUCCESS = '[Customer] Load single Customer Success',
    LOAD_SINGLE_CUSTOMER_FAIL = '[Customer] Load single Customer Fail',

    // create customer

    CREATE_CUSTOMER = '[Customer] Create Customer',
    CREATE_CUSTOMER_SUCCESS = '[Customer] create Customer Success',
    CREATE_CUSTOMER_FAIL = '[Customer] Create Customer Fail',

    // update customer

    UPDATE_CUSTOMER = '[Customer] Update Customer',
    UPDATE_CUSTOMER_SUCCESS = '[Customer] Update Customer Success',
    UPDATE_CUSTOMER_FAIL = '[Customer] Update Customer Fail',

    // delete customer
    DELETE_CUSTOMER = '[Customer] Delete Customer',
    DELETE_CUSTOMER_SUCCESS = '[Customer] Delete Customer Success',
    DELETE_CUSTOMER_FAIL = '[Customer] Delete Customer Fail',
}

export class LoadCustomers implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMER;
}

export class LoadCustomersSuccess implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;

    constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMER_FAIL;

    constructor(public payload: string) {}
}

export class LoadSingleCustomer implements Action {
  readonly type = CustomerActionTypes.LOAD_SINGLE_CUSTOMER;
  constructor(public payload: number) {}
}

export class LoadSingleCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_SINGLE_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class LoadSingleCustomerFail implements Action {
  readonly type = CustomerActionTypes.LOAD_SINGLE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}
// create customer

export class CreateCustomer implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER;
  constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class CreateCustomerFail implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}

// update customer

export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER;
  constructor(public payload: Customer) {}
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;

  constructor(public payload: Update<Customer>) {}
}

export class UpdateCustomerFail implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}

// delete customer

export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER;
  constructor(public payload: number) {}
}

export class DeleteCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteCustomerFail implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}


export type Action =
  LoadCustomers
| LoadCustomersSuccess
| LoadCustomersFail
| LoadSingleCustomer
| LoadSingleCustomerSuccess
| LoadSingleCustomerFail
| CreateCustomer
| CreateCustomerSuccess
| CreateCustomerFail
| UpdateCustomer
| UpdateCustomerSuccess
| UpdateCustomerFail
| DeleteCustomer
| DeleteCustomerSuccess
| DeleteCustomerFail
;
