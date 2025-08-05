# CloudOps Portfolio

This is a personal portfolio website for CloudOps, a Cloud & DevOps Engineer. It showcases expertise in cloud platforms, containerization, CI/CD, network architecture, and the intersection of infrastructure with AI/LLM technologies.

## Features

- **Responsive Design**: Optimized for various devices.
- **About Section**: Detailed description of skills and interests.
- **Projects Section**: Showcase of relevant projects.
- **Skills Section**: Overview of technical proficiencies.
- **Contact Form**: Easy way to get in touch.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd minimal-pro-display
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or yarn install
    # or bun install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or yarn dev
    # or bun dev
    ```

    The application will be accessible at `http://localhost:8080/` (or another port if 8080 is in use).

## Project Structure

```
.gitignore
README.md
package.json
...
src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ui/
└── pages/
    ├── Index.tsx
    └── NotFound.tsx
```

## Customization

- **Personal Information**: Update `src/pages/Index.tsx`, `src/components/Hero.tsx`, `src/components/Footer.tsx`, and `src/components/Navigation.tsx` with your details.
- **Projects**: Modify the `projects` array in `src/components/Projects.tsx`.
- **Skills**: Adjust the `skills` data in `src/components/Skills.tsx`.
- **Styling**: Customize the look and feel using `tailwind.config.ts` and `src/index.css`.

## License

This project is open source and available under the MIT License.