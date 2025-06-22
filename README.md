# Smart Login System

A simple front-end login and signup system built with HTML, CSS (Bootstrap), and JavaScript. This project demonstrates basic user authentication using browser localStorage, form validation, and responsive design.
- Live Demo [https://omar-mk-20.github.io/Login-System/]

## Features
- **Sign Up**: Users can create an account with name, email, and password. Input validation is enforced.
- **Login**: Registered users can log in using their email and password.
- **Session Handling**: The system checks for a logged-in user and redirects to the login page if not authenticated.
- **Logout**: Users can log out from the home page.
- **Responsive Design**: Uses Bootstrap and custom CSS for a modern, responsive UI.

## Technologies Used
- HTML5
- CSS3 (Bootstrap 5, custom styles)
- JavaScript (ES6)
- LocalStorage for user data persistence

## File Structure
```
├── index.html        # Login page
├── signup.html       # Signup page
├── home.html         # Home page (after login)
├── js/
│   └── main.js       # Main JavaScript logic
├── css/
│   ├── style.css     # Custom styles
│   ├── media.css     # Responsive styles
│   ├── bootstrap.min.css
│   └── all.min.css   # FontAwesome
├── images/           # Background and other images
├── webfonts/         # FontAwesome fonts
```

## How It Works
- **Sign Up**: User details are validated and stored in `localStorage`.
- **Login**: Credentials are checked against stored users. On success, the username is saved in `localStorage` and the user is redirected to `home.html`.
- **Home Page**: Displays a welcome message. If accessed without login, redirects to the login page.

## Usage
1. Open `index.html` in your browser.
2. Sign up for a new account via `signup.html`.
3. Log in with your credentials.
4. You will be redirected to the home page.

## Notes
- This project is for educational/demo purposes only. Do **not** use for production or with sensitive data.
- All user data is stored in the browser and is not secure.

## License
This project is open source and free to use for learning purposes.
