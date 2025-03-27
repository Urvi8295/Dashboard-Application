# Live Dashboard App

This project is a live dashboard application built with Next.js, focusing on a clean and maintainable design perspective.

## Project Structure

The project is organized to promote code readability and maintainability. Here's a breakdown of the key directories:

* **`src/app/`**: Contains the main application code.
    * **`components/`**: Houses reusable UI components.
    * **`layouts/`**: Stores different layout components, such as `AdminLayout`. Future layouts (e.g., `StaticSiteLayout`) can be added here.
    * **`common/`**: Contains commonly used components that are shared across various parts of the application.
    * **`ui/`**: Stores predefined UI components for consistent design elements.
* **`src/app/page.js`**: The main page component of the application.
* **`src/app/layout.js`**: The root layout component that wraps all pages.
* **`public/`**: Contains static assets like images, SVGs, and fonts.
* **`package.json`**: Lists project dependencies and scripts.
* **`package-lock.json`**: Records the exact versions of installed dependencies.

## Key Concepts

* **Component-Based Architecture:** The application is built using reusable components to enhance modularity and maintainability.
* **Layout Management:** Different layouts are used to provide consistent structures for various sections of the application.
* **Common Components:** Frequently used components are centralized in the `common` folder for easy reuse.
* **UI Library:** The `ui` folder allows for the creation of a predefined UI library, ensuring consistent design across the application.

If we have more types than we can create types.d.ts files and also we can manage json data in diffrent folder for whole project.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project-directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser and navigate to `http://localhost:3000` to view the application.**

## Running the Application

* **`npm run dev`**: Starts the development server.


## Dependencies

This project uses the following key dependencies:

* Next.js
* React
* TypeScript
* Tailwind CSS





