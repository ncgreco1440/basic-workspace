import { Component } from '@angular/core';

@Component({
  selector: 'monofunworkspace-intro',
  template: `
    <h2>The tasks for the test are the following: </h2>
    <ol>
    <li>
        The user profile page currently has no data. Use the public API at Random User Generator to pull in a random user and populate the profile page (<em>/profile-details</em>).
        You should query the relevant data from the API and add it to the ProfileStore.
        <ul>
          <li>Link to API documentation is in the profile service.</li>
        </ul>
    </li>
    <li>
        Create a new page, a profiles grid. This page should accomplish the following:
        <ul>
          <li>Use the table component from the <em>/libs/ui</em> folder.</li>
          <li>Pull in 15 profiles to populate this grid.</li>
          <li>Store these results in the state.</li>
          <li>Each profile row item should have a link to the specific detail page of that user.</li>
        </ul>
      </li>
      <li>
        Upon clicking a profile row link, the user should be sent to the profile details page with that user data.
        <ul>
          <li>The user profile details page route should be adjusted to take an optional id param.
            <ul>
              <li>Routing is located in app.module.</li>
            </ul>
          </li>
          <li>If the optional id param is missing, query a random user to show from the api.</li>
        </ul>
      </li>
    </ol>
  `
})
export class InfoComponent {
}
