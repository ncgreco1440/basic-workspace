import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ProfileActions from '@monofunworkspace/profile-store/profile.actions';
import { FormsService } from '@monofunworkspace/profile-store';
import { UserProfile } from '../models';
import { Observable } from 'rxjs';
import { ProfileState } from '../models/profile-state.model';

interface RESTfulResult {
    results: any[]
}

@Component({
  selector: 'monofunworkspace-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

    constructor(private store: Store<{user: ProfileState}>, private readonly rand: FormsService) {
        this.store.select(state => state.user).subscribe(u => {
            debugger;
        });

        // this.store.pipe(select('user')).subscribe((u: ProfileState) => {
        //     debugger;
        //     this.user = u.userProfile;
        // });

    }

    public ngOnInit(): void {
        this.store.dispatch(ProfileActions.getProfile());
        // this.store.dispatch({ type: '[User Profile] Get Profile' });
    }

    private userProfileFactory(data: RESTfulResult): UserProfile {
        return {
            firstName: data.results[0].name.first,
            lastName: data.results[0].name.last,
            city: data.results[0].location.city,
            state: data.results[0].location.state,
            email: data.results[0].email,
            phone: data.results[0].phone,
            cell: data.results[0].cell,
            pictureUrl: data.results[0].picture.large
        }
    }

    public user: UserProfile;
    public u$: Observable<ProfileState>;
}
