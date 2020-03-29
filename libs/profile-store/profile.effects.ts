import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FormsService } from './profile.service';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ProfileEffects {

    getUserProfileRequest$ = createEffect(() => this.actions$.pipe(
            ofType('[Profile Details Component] Get user profile request'),
            mergeMap(() => this.formsService.getUserProfile().pipe(
                map((user) => {
                    return {
                        type: '[Profile Details Component] Get user profile request Success',
                        payload: user.results[0]
                    }
                }),
                catchError(() => EMPTY)
            ))
        )
    );

  constructor(
    private actions$: Actions,
    private formsService: FormsService
  ) {}
}

// FYI: The response from the API will return an object with different properties than the UserProfile model.
