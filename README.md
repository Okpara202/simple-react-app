# Simple React App

## Overview

This project is a small multi-page React TypeScript application that provides a dynamic dashboard based on user roles. It incorporates authentication, protected routes, and conditional rendering to control user access and experience.

## Features

- **User Authentication**: Simulated login system with user role selection.
- **Role-Based Access Control**: Users see different content based on their roles.
- **Protected Routes**: Restricts access to pages based on authentication and role.
- **Navigation Bar**: Displays user information and allowed routes.
- **Persistent session storage**: Uses localstorage to persist/support state where necessary to prevent session loss on refresh.
- **Logout Functionality**: Allows users to log out and clear their session.

## Pages

| Route        | Description                                    |
| ------------ | ---------------------------------------------- |
| `/`          | Login page where users select their role.      |
| `/dashboard` | Main dashboard page with role-based content.   |
| `/profile`   | Profile page, accessible only when logged in.  |
| `/settings`  | Settings page, accessible only to Admin users. |

## User Roles

- **Admin**: Has full access, including admin controls in the dashboard and access to settings.
- **Editor**: Can access the dashboard and edit content.
- **Viewer**: Can access the dashboard and view read-only reports.

## Application Behavior

### Authentication

- Uses `useState` to manage user authentication (username + role).
- After login, stores user data in context or state for global access.
- Uses localstorage to persist/support state where necessary to prevent session loss on refresh.

### Routing

- Uses **React Router** to manage navigation.
- Protects routes to ensure:
  - `/dashboard` and `/profile` are only accessible when logged in.
  - `/settings` is only accessible to Admin users.
  - Unauthorized users are redirected to `/` to `login` first.

### Conditional Rendering

- The `/dashboard` page renders different components based on user roles:
  - **Admin**: Shows admin controls.
  - **Editor**: Displays a content editor panel.
  - **Viewer**: Presents read-only reports.

### Navigation

- Authenticated pages include a **navbar** showing:
  - Logged-in user's name and role.
  - Links to allowed routes (hides `/settings` for non-admins).
  - A logout button that clears user data and redirects to `/`.

## Setup Instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/Okpara202/simple-react-app.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173/`.

## Technologies Used

- **React** with **TypeScript**
- **React Router** for navigation
- **useState & Context API** for state management
- **Vanilla css** for styling

## Future Enhancements

- Implement real authentication with JWT.
- implement real persistent session storage.

## License

This project is open-source and available under the MIT License.

---

Feel free to contribute by submitting issues or pull requests!
