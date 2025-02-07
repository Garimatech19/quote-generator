# Quote Generator

## Project Description
The Quote Generator is a web application built using modern frontend technologies. It allows users to generate random quotes from an external API and displays them in a clean and responsive UI. The project is designed with scalability and maintainability in mind, making it easy to extend and customize.

## Tech Stack Used-

TypeScript: Ensures type safety and better code maintainability.

React.js: Provides a dynamic and efficient UI.

TailwindCSS: Used for styling and ensuring a modern, responsive design.

Vite: Fast build tool for frontend development.

Axios: Handles API requests efficiently.

## Instructions to Run the Project Locally

Follow these steps to run the Quote Generator locally:

1. **Clone the Repository:**
   ```bash
    git clone https://github.com/Garimatech19/quote-generator.git
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
4. **Open the Application:**
   - Navigate to `http://localhost:3000` in your web browser.
  
## Project Structure
quote-generator/
│-- public/            # Static assets
│-- src/
│   │-- styles/        # TailwindCSS styles
│   │-- App.tsx        # Main app component (TypeScript)
│   │-- index.tsx      # Entry point of the application
│-- tsconfig.json      # TypeScript configuration file
│-- package.json       # Project dependencies and scripts
│-- README.md          # Project documentation

## Features
- Displays random quotes fetched from an API.
- Allows users to mark quotes as favorites.
- Implements a dark/light mode toggle.
- Features a sidebar drawer to view and manage favorite quotes.
- Mobile-friendly and responsive design.

## Screenshots
### Light Mode
![Light Mode](https://github.com/user-attachments/assets/79cf2bbc-243e-4fef-be3a-6f2348aa87aa)

### Dark Mode
![Dark Mode](https://github.com/user-attachments/assets/afdc1ed5-77bf-49c8-9323-a39c1ad3b2b2)

### Favorites Drawer
![Favorites Drawer](https://github.com/user-attachments/assets/84633a67-ea26-4ca1-b437-0a26d86aa0cf)

## Additional Notes
- **API Usage:** The application fetches quotes from `https://dummyjson.com/quotes`.
- **Local Storage:** Favorites are stored in local state but reset on page reload.
- **Mobile Adaptation:** The favorite quotes drawer adjusts responsively to avoid overlap.

## Assumptions
- The API will always return valid quotes.
- The user wants to clear favorites on page reload.
- The UI should prioritize accessibility and responsiveness.

---

Feel free to modify the project and contribute!

