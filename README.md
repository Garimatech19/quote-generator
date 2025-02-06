# Quote Generator

## Instructions to Run the Project Locally

Follow these steps to run the Quote Generator locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
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

```
📂 project-root
├── 📂 src
│   ├── 📄 App.tsx          # Main component
│   ├── 📄 QuoteGenerator.tsx # Quote generator component
│   ├── 📂 components      # Additional UI components
│   ├── 📂 styles          # Styling files
├── 📄 package.json       # Dependencies and scripts
├── 📄 README.md          # Project documentation
└── 📄 tsconfig.json      # TypeScript configuration
```

## Features
- Displays random quotes fetched from an API.
- Allows users to mark quotes as favorites.
- Implements a dark/light mode toggle.
- Features a sidebar drawer to view and manage favorite quotes.
- Mobile-friendly and responsive design.

## Screenshots
### Light Mode
![Light Mode](screenshots/light-mode.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

### Favorites Drawer
![Favorites Drawer](screenshots/favorites-drawer.png)

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

