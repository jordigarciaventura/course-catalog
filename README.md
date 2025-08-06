# Astro Template: Course Catalog

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/jordigarciaventura/course-catalog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/jordigarciaventura/course-catalog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jordigarciaventura/course-catalog)

Or run it locally on VS Code with Dev Containers:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect?url=vscode://file/Users/jordigarciaventura/Documents/GitHub/course-catalog)

## 🚀 Quickstart

To run this project locally, you'll need:

- **[Node.js](https://nodejs.org/)** (version 18 or higher)
- **[npm](https://www.npmjs.com/)** (comes with Node.js)

1. Clone the repository:

   ```bash
   git clone https://github.com/jordigarciaventura/course-catalog.git
   cd course-catalog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open [http://localhost:4321/course-catalog](http://localhost:4321/course-catalog) in your browser.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lint`            | Run ESLint to check for code issues              |
| `npm run format`          | Format code with Prettier                        |
| `npm run type-check`      | Run TypeScript type checking                     |

## 📚 Resources

- Emojis:
  - [Emojipedia](https://emojipedia.org/)

- Archive of Icons:
  - **[Streamline Icons](https://www.streamlinehq.com/free) _(Top choice)_**
  - **[iconify](https://icon-sets.iconify.design/) _(Top choice)_**
  - [icons8](https://icons8.com/icons/set/)
  - [Iconfinder](https://www.iconfinder.com/)

- Icon Sets:
  - [Simple Icons](https://simpleicons.org/)
  - [Devicon](https://devicon.dev/)
  - [Phosphor Icons](https://phosphoricons.com/)
  - [Icofont](https://icofont.com/)
  - [Lucide Icons](https://lucide.dev/)
  - [Remix Icon](https://remixicon.com/)
  - [Google Material Icons](https://fonts.google.com/icons)
  - [Bootstrap Icons](https://icons.getbootstrap.com/)

## 🎨 Customization Guide

This comprehensive guide will help you personalize the course catalog to fit your own learning journey. Follow these steps in order for the best experience.

### 1. Basic Project Configuration

#### App Configuration (`app.config.js`)

Start by updating the basic app configuration:

```javascript
// Update the base path for your deployment
export const APP_BASE_PATH = "/your-project-name"; // For subdirectory deployment
// or
export const APP_BASE_PATH = ""; // For root deployment

// Update your site URL
export const APP_SITE_URL = "https://yourusername.github.io";
```

#### Main Configuration (`src/config.ts`)

Update the main configuration file:

```typescript
// Change the creator name
export const creator = "Your Name" as const;

// Modify supported languages (currently supports English, Spanish, Catalan)
export const languages = ["en", "es", "ca"] as const;

// Change default language
export const defaultLanguage = "en" as const;
```

### 2. Customizing Categories

#### Adding New Categories

1. **Update Types** (`src/types.ts`):

   ```typescript
   // Add your new category to the courseCategories array in src/config.ts first
   export const courseCategories = [
     "data-science",
     "cloud-devops",
     "programming",
     // Add your new category here
     "your-new-category",
   ] as const;
   ```

2. **Define Category Details** (`src/content/categories.tsx`):

   ```tsx
   import { YourIcon } from "lucide-react"; // Import your icon

   // Add to the categories array
   {
     id: "your-new-category",
     label: {
       en: "Your Category Name",
       es: "Nombre de tu Categoría",
       ca: "Nom de la teva Categoria",
     },
     icon: <YourIcon />, // Use Lucide React icons
     color: "emerald", // Choose from available colors
   }
   ```

3. **Available Colors**: `emerald`, `sky`, `violet`, `blue`, `purple`, `orange`, `pink`, `red`, `yellow`, `slate`

#### Removing Categories

1. Remove the category from `courseCategories` array in `src/config.ts`
2. Remove the category definition from `src/content/categories.tsx`
3. Delete or reassign any courses using that category

### 3. Managing Courses

#### Adding New Courses

1. **Create or Edit Category File** (`src/content/courses/`):
   - Files are named by category (e.g., `programming.tsx`, `web-development.tsx`)
   - If adding a new category, create a new `.tsx` file

2. **Course Structure**:

   ```tsx
   import type { Course } from "@/types";

   const courses: Course[] = [
     {
       id: "unique-course-id", // Must be unique across all courses
       title: {
         en: "Course Title in English",
         es: "Título del Curso en Español",
         ca: "Títol del Curs en Català",
       },
       description: {
         en: "Course description in English",
         es: "Descripción del curso en español",
         ca: "Descripció del curs en català",
       },
       date: "DD/MM/YYYY", // Format: day/month/year
       duration: "X", // Duration in hours
       iconUrl: "/icons/your-icon.svg", // Path to icon in public/icons/
       category: "your-category", // Must match a category from config.ts
     },
   ];

   export default courses;
   ```

#### Course Icons and Media

**Icon Location**: All course icons should be placed in `public/icons/`

**Supported Formats**:

- **SVG** (recommended): Vector graphics that scale perfectly
- **PNG/JPG**: Raster images work but may not scale as well

**Icon Guidelines**:

- SVG files are preferred for crisp display at all sizes
- Recommended size: 64x64px or scalable SVG
- Use consistent style across all icons

**Adding New Icons**:

1. Place your icon file in `public/icons/`
2. Reference it in your course definition: `iconUrl: "/icons/your-icon.svg"`
3. The path is relative to the `public` directory

### 4. Customizing Appearance

#### Favicon and Browser Tab

**Favicon**: Replace `public/favicon.svg` with your own icon

**Tab Title Translations**: The main page titles are in `src/i18n/translations.tsx`:

```tsx
index: {
  title: {
    en: "Your Learning Journey",
    es: "Tu Viaje de Aprendizaje",
    ca: "El Teu Viatge d'Aprenentatge",
  }
}
```

### 5. Internationalization and Translations

#### Main Translations File (`src/i18n/translations.tsx`)

Update all text content for your languages:

```tsx
export const ui = {
  index: {
    title: {
      en: "Your Title",
      es: "Tu Título",
      ca: "El Teu Títol",
    },
    subtitle: {
      en: "Your subtitle description",
      es: "Tu descripción de subtítulo",
      ca: "La teva descripció de subtítol",
    },
    // ... more translations
  }
};
```

#### Adding New Languages

1. **Update Language Configuration** (`src/config.ts`):

   ```typescript
   export const languages = ["en", "es", "ca", "fr"] as const; // Add French
   ```

2. **Update Type Definition** (`src/types.ts`):
   The `MultilingualText` type will automatically include your new language

3. **Add Translations**: Update all `MultilingualText` objects throughout the project:
   - `src/i18n/translations.tsx`
   - `src/content/categories.tsx`
   - All course files in `src/content/courses/`

#### Removing Languages

1. Remove from `languages` array in `src/config.ts`
2. Remove translations from all multilingual text objects
3. TypeScript will help you find missing translations

### 6. Type Checking and Development

#### TypeScript Configuration

The project uses strict TypeScript checking. Key type files:

- `src/types.ts`: Main type definitions
- `src/config.ts`: Configuration types and constants

#### Common Type Errors and Solutions

**Category Not Found**:

- Ensure your category is added to `courseCategories` in `src/config.ts`

**Missing Translations**:

- All `MultilingualText` objects must include all languages from the `languages` array

**Invalid Course Structure**:

- Follow the `Course` interface exactly as defined in `src/types.ts`

### 7. Deployment Configuration

#### GitHub Pages (Subdirectory)

If deploying to `yourusername.github.io/repository-name`:

**app.config.js**:

```javascript
export const APP_BASE_PATH = "/repository-name";
export const APP_SITE_URL = "https://yourusername.github.io";
```

### 8. Best Practices

#### Organization

- Keep courses organized by category in separate files
- Use consistent naming conventions for course IDs
- Group related courses together

#### Performance

- Optimize images before adding them to `public/icons/`
- Use SVG icons when possible for better scalability
- Keep course descriptions concise but informative

#### Maintenance

- Regularly update course completion dates
- Keep categories balanced (not too many courses in one category)
- Test the site after adding new languages or categories

#### SEO and Accessibility

- Use descriptive course titles and descriptions
- Ensure proper alt text for any custom images
- Test with screen readers if adding complex content

### 9. Troubleshooting

#### Common Issues

**Build Errors**:

- Run `npm run type-check` to identify TypeScript issues
- Ensure all required translations are present
- Check that category IDs match between config and course files

**Missing Icons**:

- Verify icon files exist in `public/icons/`
- Check file paths in course definitions
- Ensure proper file extensions (.svg, .png, .jpg)

**Translation Errors**:

- All `MultilingualText` objects must include every language from `src/config.ts`
- Use TypeScript errors to identify missing translations

**Deployment Issues**:

- Verify base path configuration matches your deployment setup
- Check that asset URLs are correctly generated with the `asset()` function

This guide should help you fully customize the course catalog to showcase your own learning journey. Remember to test thoroughly after making changes, and use the TypeScript compiler to catch potential issues early!
