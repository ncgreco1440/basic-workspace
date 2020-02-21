# Monofunworkspace

- This project was generated using [Nx](https://nx.dev).
- This project was generated with Angular CLI version 8.3.10.
- 🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

<p align="center"><img src="https://res.cloudinary.com/brandpad/image/upload/v1574454881/3483/lockup2x.png" width="450"></p>

## Development server
Run ng serve for a dev server. Navigate to http://localhost:8888/. The app will automatically reload if you change any of the source files.

## Code scaffolding
We suggest using the Nx Console to generate new components

## Available routes:
home page (default route: `/`)
user profile page (route: `/profile-details`)

## Assignment details
Instructions:
Fork this repo and complete the following task. Please do not spend more than 3 hours on this project. Please submit a pull request with your work once finished.

## Task
One of the goals of this task is to measure your understanding of ngrx and the redux pattern.
Use ngrx and create or modify appropriate actions, reducers, effects and selectors.

* The user profile page currently has no data. Use the public API at [Random User Generator](https://randomuser.me) to pull in a random user and populate the profile page (`/profile-details`). You should query the relevant data from the API and add it to the `ProfileStore`.
  * A link to API documentation is in the profile service.

* Create a new page, a profiles grid. This page should accomplish the following:
      
* Use the table component from the `/libs/ui` folder.

* Pull in 15 profiles to populate this grid.

* Store these results in the state.
  * Each profile row item should have a link to the specific detail page of that user.

* Upon clicking a profile row link, the user should be sent to the profile details page with that user data.
      
* The user profile details page route should be adjusted to take an optional id param.
  * Routing is located in app.module.

* If the optional id param is missing, query a random user to show from the api.

The UI is up to you, although it is recommended to use Angular Material components.
