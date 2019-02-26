import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';

import {map, mergeMap, catchError} from 'rxjs/operators'
import {CustomerService} from '../customer.service';
import * as CustomerAction from '../state/customer.actions';
import {Customer} from '../customer.model';