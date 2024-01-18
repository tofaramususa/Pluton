# Pluton Web Project

This project is a showcase of various web development techniques and skills, primarily focusing on the use of Next.js, a popular React framework, and GSAP, a powerful JavaScript animation library.

## Next.js

Next.js is a React framework that enables features such as server-side rendering and generating static websites. This project was bootstrapped with `create-next-app`, a tool provided by Vercel, the creators of Next.js.

The project demonstrates the use of Next.js in various ways:

- The main page of the application is defined in `app/page.tsx`, showcasing the use of React components and hooks.
- The project uses `next/font` for automatic font optimization and loading.

## GSAP (GreenSock Animation Platform)

GSAP is a robust JavaScript animation library that allows for precise control over web animations. This project uses GSAP to create complex animations:

- The `Loader` component uses GSAP to create a loading animation with progress tracking.
- The `Hero` component uses GSAP to animate the main hero section of the website.

## SCSS (Sassy CSS)

This project uses SCSS, a CSS preprocessor, to write more maintainable and scalable styles:

- The project uses SCSS modules, as seen in the `Hero` and `Loader` components.

## React Hooks

React Hooks are a feature of React that allow you to use state and other React features without writing a class. This project uses various hooks:

- The `useLayoutEffect` hook is used to create a GSAP timeline once the component has been rendered.
- The `useState` hook is used to manage the loading state of the application.

## Deployment

The project is ready to be deployed on Vercel, a cloud platform for static sites and Serverless Functions.
