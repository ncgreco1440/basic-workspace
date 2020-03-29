import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { UiModule } from '@monofunworkspace/ui';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProfileDetailsComponent
      }
    ])
  ],
  declarations: [ProfileDetailsComponent],
  providers: []
})
export class FeatureProfileDetailsModule {}
