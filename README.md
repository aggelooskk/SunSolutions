# SunSolutions

SunSolutions is a modern, responsive website for a solar water heater company. It showcases products, certifications, and allows users to contact the company for more information. Built with React, Vite, and Tailwind CSS, it is optimized for fast performance and easy deployment.

---

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), but is now migrated to Vite for faster builds and modern tooling.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/SunSolutions.git
   cd SunSolutions
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following (replace with your actual EmailJS keys):

   ```
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_PUBLIC_KEY=your_public_key
   ```

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build locally for preview.

---

## Project Structure

```
src/
  Components/      # Reusable UI components (NavBar, Footer, SolarCard, etc.)
  Screens/         # Main pages (HomeScreen, EurostarScreen, EcoScreen, FinoScreen, ContactScreen)
  Images/          # Product and UI images (organized by product)
  App.jsx          # Main app component with routing
  main.jsx         # Entry point
public/
  ...              # Static assets (favicon, robots.txt, etc.)
```

---

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) or any static host.

**To deploy on Vercel:**

1. Push your code to GitHub/GitLab/Bitbucket.
2. Import your repo in Vercel.
3. Set the build command to `npm run build` and output directory to `dist`.
4. Add your environment variables in the Vercel dashboard.
5. Deploy!

---

## Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/).  
Set your EmailJS keys in the `.env` file or in your Vercel environment variables.

---

## Styling

- [Tailwind CSS](https://tailwindcss.com/) is used for all styling.
- Responsive design for mobile, tablet, and desktop.

---

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/)
- [Vercel](https://vercel.com/) (for deployment)

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- Product images and content
