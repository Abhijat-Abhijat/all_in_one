# 🌌 All In One | Minimalist Workspace & Productivity Engine

[](https://www.google.com/search?q=https://opensource.org/licenses/MIT)
[](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[](https://www.google.com/search?q=https://tailwindcss.com/)

**All In One** is a high-performance, single-page productivity suite designed for deep work. It blends a Kanban-style task manager, a reference engine, and a Pomodoro focus system into a unified, glassmorphic interface.

[Live Demo](https://abhijat-abhijat.github.io/all_in_one/) | [Report Bug](https://github.com/Abhijat-Abhijat/all_in_one/issues)

-----

## 🛠️ System Architecture & Engineering

This project was built with a focus on **Zero-Dependency overhead** and **State Persistence**.

  * **State Management:** Utilizes a custom `DB` wrapper around the Web Storage API (`localStorage`) to ensure 100% data persistence without a database backend.
  * **Event-Driven UI:** Implements a reactive rendering pattern—UI components update automatically upon data mutation to ensure a "Single Source of Truth."
  * **Performance:** Optimized for 0ms latency by using Vanilla JS for DOM manipulation and Tailwind CSS for atomic styling, resulting in a near-zero bundle size.
  * **UX/UI Engineering:** Features a "Command Center" pattern using `Ctrl+K` for global fuzzy searching across disparate data types (links and tasks).

-----

## 🔥 Key Features

### 📋 Intelligent Kanban Board

  - **Drag-and-Drop API:** Native implementation for moving tasks between *Backlog* and *Archive*.
  - **Task Lifecycle:** Includes unique timestamping for future velocity analytics.

### 🍅 Deep Work Engine (Pomodoro)

  - **Visual Feedback:** SVG-based circular progress ring with real-time `stroke-dashoffset` calculations.
  - **Session Management:** Built-in "Suspend" and "Initiate" logic to handle context switching.

### 🔗 Reference Engine

  - **Automated Sanitization:** Logic to auto-format URLs (prepending `https://`) and extracting hostnames for a cleaner UI.
  - **Global Search:** Real-time filtering across all saved resources.

-----

## ⌨️ Productivity Shortcuts

| Key | Action |
| :--- | :--- |
| `Ctrl + K` | Global Fuzzy Search |
| `Enter` | (In Task Input) Add new objective |
| `Hover` | Reveals contextual actions (Delete/Complete) |

-----

## 🧪 Testing Suite

All In One includes a built-in **Quality Assurance (QA) Engine** to verify system integrity.

```javascript
// Example Test Case: Verify Link Integrity
test("Link creation works", () => {
    const mockLink = { name: "Test Link", url: "https://test.com" };
    links.push(mockLink);
    assert(links[links.length-1].name === "Test Link");
});
```

To run the internal health check:

1.  Open the dashboard.
2.  Click the **"Run Tests"** button in the header.
3.  Check the browser console for the full Trace Log.

-----

## 🚀 Installation & Contribution

**Prerequisites:** Just a browser. No `npm install` required for core functionality.

1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/Abhijat-Abhijat/all_in_one.git
    ```
2.  **Launch:**
    Simply open `index.html` in your browser.

**Want to contribute?** - Fork the repository.

  - Create a feature branch (`git checkout -b feature/AmazingFeature`).
  - Commit your changes (`git commit -m 'Add AmazingFeature'`).
  - Push to the branch (`git push origin feature/AmazingFeature`).
  - Open a Pull Request.

-----

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

**Developed with ❤️ for high-performance builders.**