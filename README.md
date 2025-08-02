# react-projects
this repository will contain all react learning projects and corresponding resources


# setting up tailwind with react
- install the dependencies
    npm install tailwindcss @tailwindcss/postcss postcss
- initiate it
    npm tailwind inint -p  // this will create additional config files

- import the followings in main css files


NOTE: when you need to use tailwindcss4 always use vite for project setup. Not configurable with npx create-react-app

# Vite app creation
- npm create vite@latest app-name 
- cd app-name
- npm install
- npm run dev

# Install and configure Tailwind
- npm install tailwindcss @tailwindcss/vite
- Configure vite plugin  ( update this => vite.config)
    import tailwindcss from '@tailwindcss/vite'         // import this 
    plugins: [                  // add tailwind into plugins
        tailwindcss(),
    ]
- npm run dev





