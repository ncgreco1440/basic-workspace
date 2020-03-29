import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from '@monofunworkspace/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoComponent } from './info.component';

import { reducer } from '@monofunworkspace/profile-store/profile.reducers';
import { ProfileEffects } from '@monofunworkspace/profile-store/profile.effects';

@NgModule({
  declarations: [AppComponent, InfoComponent],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          component: InfoComponent
        },
        {
          path: 'profile-details',
          pathMatch: 'full',
          loadChildren: () =>
            import('@monofunworkspace/feature-profile-details').then(
              module => module.FeatureProfileDetailsModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(
      {
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([
        ProfileEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
