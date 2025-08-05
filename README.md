# To-Do List App

Live Demo: [https://exquisite-biscotti-dba39b.netlify.app/](https://exquisite-biscotti-dba39b.netlify.app/)

A responsive and minimal **To-Do List application** built with **React 19**, **Tailwind CSS v4**, and **Vite**.  
It allows you to add, edit, mark as completed, and delete tasks, with persistence using `localStorage`.

---

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or due
- Data persistence with `localStorage`
- Responsive design (mobile and desktop)
- Custom dark theme with modern colors
- Fast development with Vite

---

## Tech Stack

- [React 19](https://react.dev/) – UI Library  
- [Vite](https://vitejs.dev/) – Build tool  
- [Tailwind CSS v4](https://tailwindcss.com/) – Styling  
- [Lucide React](https://lucide.dev/) – Icons  
- [ESLint](https://eslint.org/) – Linting  

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Pranay-Gottimukula/todolist.git
   cd todolist
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```
4. Build for production::

   ```bash
   npm run build
   ```

## Project Structure

todolist/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable React components (Navbar, TodoList, ListItems, ToggleForm)
│   ├── App.jsx        # Main App entry
│   ├── index.css      # Tailwind base styles
│   └── main.jsx       # React DOM render
├── package.json
├── tailwind.config.js # Tailwind configuration
└── vite.config.js     # Vite configuration

## Deployment
This project is deployed on Netlify.
Each push to the main branch triggers an automatic deployment.

Live Demo: [https://exquisite-biscotti-dba39b.netlify.app/](https://exquisite-biscotti-dba39b.netlify.app/)

## Author
Built by Pranay Gottimukula