# 📘 Quiz App

![Quiz Banner](https://github.com/viveksingh2904/Today_Pay_Quiz/blob/main/src/components/public/banner1.png)

A clean, user‑friendly **Quiz Application** built with **React** as part of an assignment to demonstrate front‑end fundamentals, state management, and responsive design.

---

## 🚀 Objective

The goal of this project is to create an interactive Quiz App that:

* Presents one question at a time with multiple‑choice options.
* Tracks user progress and score.
* Displays detailed results with correct/incorrect answers.
* Offers a smooth, responsive UI/UX.

---

## 🖼️ Screenshots

Here are some previews of the application:

| Home                                                                                                  | Quiz                                                                                                  | Results                                                                                                  | Responsive View                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![Home](https://github.com/viveksingh2904/Today_Pay_Quiz/blob/main/src/components/public/banner1.png) | ![Quiz](https://github.com/viveksingh2904/Today_Pay_Quiz/blob/main/src/components/public/banner2.png) | ![Results](https://github.com/viveksingh2904/Today_Pay_Quiz/blob/main/src/components/public/banner3.png) | ![Responsive](https://github.com/viveksingh2904/Today_Pay_Quiz/blob/main/src/components/public/banner4.png) |

---

## ✨ Features

### 🎨 UI/UX

* Clean, mobile‑first responsive design.
* Prominent navigation (Next, Previous/Skip, Submit/Finish).
* Progress indicator with score visibility.

### 🧩 Core Functionality

* Load 5–10 multiple‑choice questions (from **Open Trivia DB API** or local JSON).
* Render one question at a time with 4 options.
* Score tracking and result summary at the end.
* Restart Quiz option.

### ⚡ Bonus Enhancements

* Timer per question.
* Progress bar (e.g., “Question 3 of 10”).
* Difficulty levels (easy/medium/hard).
* Persistent high scores using `localStorage`.
* Smooth animations & transitions.
* Accessibility support (keyboard navigation, ARIA labels).

---

## 🛠️ Tech Stack

* **React** (Functional Components + Hooks)
* **React Router** (for `/quiz` and `/results` routes)
* **CSS / Styled Components** for styling
* **Open Trivia DB API** or local JSON as data source

---

## ⚙️ Installation & Setup

Clone the repository and run the following commands:

```bash
# Clone repo
git clone https://github.com/viveksingh2904/Today_Pay_Quiz.git

# Navigate into folder
cd Today_Pay_Quiz

# Install dependencies
npm install

# Start development server
npm start
```

The app will run at `http://localhost:3000/`

---

## 🎮 Usage

* Start the quiz by clicking **Begin Quiz**.
* Select an answer before moving to the next question.
* View your final score and detailed results.
* Restart quiz anytime.

---

## 🧪 Testing

* Edge cases: No internet, empty data, rapid clicks, page refreshes.
* Prevent progress without selection (unless Skip enabled).
* Verified mobile responsiveness.

---

## 📂 Folder Structure

```
Today_Pay_Quiz/
 ├── public/
 ├── src/
 │   ├── components/
 │   │   ├── Quiz.js
 │   │   ├── Results.js
 │   │   └── ...
 │   ├── data/
 │   │   └── questions.json
 │   ├── App.js
 │   └── index.js
 └── package.json
```

---

## 🌐 Live Demo

🚀 Deployed on **Netlify/Vercel** → [Demo Link Here](#) *(Replace with actual URL)*

---

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🏢 Assignment Note

This project was completed as part of a **TodayPay Frontend Assignment** to evaluate proficiency in React, state management, and building clean user interfaces.

---

🎉 *Thank you for reviewing this project!*
