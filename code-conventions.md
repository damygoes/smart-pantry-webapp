# Code Convention

[TOC]

Code conventions are a set of guidelines and best practices that help ensure that our code is readable, understandable, and maintainable by all members of the team. Especially new members will have an easier time onboarding.

## File Structure

Structuring your project files and directories in a consistent and logical manner can make it easier for developers to navigate and maintain the codebase.

```
    ├── helm                          # Helm chart for k8s deployment
    ├── src
    │   ├── assets
    │   ├── components
    │   │   ├── ui                    # UI components
    │   │   ├── shared                # Shared components used globally
    │   ├── hooks                     # Custom hooks
    │   ├── utils                     # Utility functions
    │   ├── lib                       # Common libraries and reusable modules
    │   ├── pages                     # Application pages/views
    │   ├── locales                   # i18n
    │   ├── features                  # Feature-specific code (isolated)
    │       ├── components
    │       ├── utils
    │       ├── hooks
    │       ├── views
    │       ├── constants.ts
    │       ├── requests.ts
    │       ├── store.ts
    │       └── types.ts
    │   ├── services                  # Third-party services and data fetching logic (e.g axios)
    │   ├── styles                    # Global and feature-specific styles
    │   ├── tests
    │   │   ├── e2e                   # End-to-end tests
    │   │   ├── unit                  # Unit tests
    │   │   ├── component-tests       # Component-specific tests
    │   ├── App.tsx                   # Application entrypoint
    │   ├── Main.tsx                  # Main application setup
    │   └── router.tsx                # Application router setup


```

---

## Features

Features should follow a structured approach.

- Dividing our code into small and consistent features along domain scopes makes it easy to locate and understand specific parts of the system.
- Each feature is designed to be independent of other features, allowing for easier and more targeted refactoring without affecting the rest of the system.

---

## Rules

### 1. Naming Conventions

Establishing consistent naming conventions for variables, functions, and classes can improve code readability and maintainability.

- **PascalCase**: Use for components, classes, enums, type aliases, and interfaces.

  ```tsx
  class ExampleClass { ... }
  function ExampleComponent() { ... }
  type ExampleType = { ... }
  interface ExampleInterface { ... }
  enum ExampleEnum { ... }
  ```

- **camelCase**: Use for JavaScript data types such as variables, objects, functions, and arrays.

  ```tsx
  const someVariable = 'foo';
  const someArray = [1, 2, 3];
  function doSomething() {}
  ```

> **Use short kebab-case notation for folders**  
> Example: `feature-example`, `button-group`

> **Use PascalCase notation for component files**  
> Example: `ButtonGroup.tsx`, `UserProfile.tsx`

### 2. Unused Code

- No unused variables and component props.
  - Enforce with pre-commit hooks.

### 3. ClassName Usage

- `className` should be written in quotes for static values.
- For dynamic values, use brackets `{}`.

  ```tsx
  <div className="static-class" />
  <div className={dynamicClass ? 'dynamic' : 'default'} />
  <div className={cn('static classes', { dynamicClasses})} />
  ```

### 4. Functions

- Favor arrow functions over traditional function declarations.

  ```tsx
  // Prefer
  const doSomething = () => { ... }

  // Avoid
  function doSomething() { ... }
  ```

### 5. Exports

- Always use **default exports** except for primitive components in `src/components/ui`.

  ```tsx
  export default ExampleComponent;
  ```

### 6. Icon Management

- Never use icons directly from `@tabler-icons`.
- Always import them in the `icons.tsx` file and re-export them with appropriate styles.
-

### 7. Empty Props

- Avoid declaring empty props

  ```tsx
  // Prefer
  const ExampleComponent = () => { ... }
  export default ExampleComponent

  // Avoid
  export interface ExampleComponentProps {}
  export const ExampleComponent: FunctionComponent<ExampleComponentProps> = () => { ... }
  ```

---

#### Additional Rules

1. **Strict Typing**: Avoid using type `any` and suppressing errors with `@ts-nocheck` or disabling eslint for code lines or files, except if absolutely necessary.
2. **Consistent Error Handling**: Always endeavour to handle errors when implementing features
3. **Code Comments**: Use comments for non-obvious logic or complex sections of code. Avoid redundant comments.
4. **interface vs types**: Use `interfaces` to describe component props and `types` for types (especially utility files and hooks).
