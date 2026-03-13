# 🚀 Wajid Ali - Developer Portfolio

Welcome to my personal developer portfolio! This is a modern, responsive, and performance-optimized 3D portfolio showcasing my work as a **MERN Stack & React Native Developer**. 

Built from the ground up using React, WebGL, and Three.js, it brings an engaging and immersive experience to viewers to highlight my top skills, professional experience, and featured projects.

---

## 🛠️ Built With

This portfolio leverages a modern frontend tech stack geared for 3D interactions and smooth animations:

* **Frameworks & Core**: React 18, Vite, TypeScript
* **3D & Graphics**: Three.js, React Three Fiber, React Three Drei, Rapier (Physics)
* **Animations**: GSAP (GreenSock Animation Platform)
* **Styling**: Modern CSS3

---

## 🏃‍♂️ Getting Started

Want to run this project locally, experiment with the 3D physics, or fork it to build your own? Follow the instructions below to get up and running.

### Prerequisites
Make sure you have Node.js and npm installed on your machine.
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/WAJIDALI0/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: This project relies on `gsap` for animations and `@react-three/fiber` for the WebGL canvas.)*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Enjoy!** Open your browser and navigate to `http://localhost:5173`.

---

## 🧩 Modifying & Customizing the Portfolio

If you are a developer looking to understand how the components work or want to fork this project to make it your own, here's a quick guide to where everything is located:

### Structural Overview
All the magic happens inside the `src/` directory.

- **`src/components/Landing.tsx`**: Controls the hero section and initial name displays. Update this to change the main rotating headings.
- **`src/components/About.tsx`**: Holds the introductory paragraph detailing skills and passions.
- **`src/components/Career.tsx`**: The experience timeline. Edit the JSON-like structure within the component to add or remove professional roles.
- **`src/components/Work.tsx`**: Controls the project carousel. To add new projects, locate the `projects` array at the top of the file and add your custom data, tools, and links.
- **`src/components/TechStack.tsx`**: Responsible for the interactive 3D physics skills sphere. It maps over image textures mapping to different tool logos (`src/assets` or `public/images`).
- **`src/components/Contact.tsx`**: The footer component where you can update phone numbers, emails, degrees, and copyright info.
- **`src/components/SocialIcons.tsx`**: The floating social media bar on the left side. Modify the `href` links for GitHub, LinkedIn, and Instagram here.

### Adding New Tools to the 3D Tech Stack
To add a new skill bubble to the physics environment:
1. Add a `.webp` or `.png` logo of the tool to the `public/images/` folder.
2. In `src/components/TechStack.tsx`, append the path of your newly added image to the `imageUrls` array. The physics engine will automatically generate a new interactive 3D ball for it!

---

## 🤝 Let's Connect!

If you'd like to reach out regarding a project, employment opportunities, or just to say hi:

- **WhatsApp/Phone**: +92 344-2520400
- **Email**: wajidali3520400@gmail.com
- **LinkedIn**: [Wajid Ali](https://www.linkedin.com/in/wajid-ali-47176931a)
- **GitHub**: [WAJIDALI0](https://github.com/WAJIDALI0)

---

*Designed and Developed by Wajid Ali. 2025*
