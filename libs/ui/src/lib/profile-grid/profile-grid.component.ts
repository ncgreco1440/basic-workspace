import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UserProfile } from '@monofunworkspace/feature-profile-details/src/lib/models';

@Component({
  selector: 'monofunworkspace-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileGridComponent {
  @Input() users: UserProfile[];

  displayedColumns: string[] = ['pictureUrl', 'name', 'email'];

  constructor() { }

  goToProfile() {
    // Write code to navigate to the profile details page
  }

}
