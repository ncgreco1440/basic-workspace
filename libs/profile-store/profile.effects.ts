import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class ProfileEffects {

  getUserProfileRequest$ = createEffect(() => this.actions$.pipe(
    // Write code to retrieve random user from API here
    // Hint: You will need to use some rxjs operators here
  ));

  constructor(
    private actions$: Actions
  ) {}
}

// FYI: The response from the API will return an object with different properties than the UserProfile model.
