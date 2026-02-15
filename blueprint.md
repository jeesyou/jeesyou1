# Blueprint: Interactive Info Dashboard

## Overview

This is an interactive web application that provides users with useful and fun information. It started as a lottery number generator and has been expanded to include real-time information like weather and stock market data. The application features a modern, dark, and glassy design theme.

## Features & Design

### 1. Lotto Number Generator
- **Functionality**: Generates 6 unique random numbers between 1 and 45.
- **UI**:
    - A button labeled "번호 생성" triggers the generation.
    - The generated numbers are displayed in colorful, animated circles.
    - Each number range (1-10, 11-20, etc.) has a distinct background color.

### 2. Real-time Information
- A dedicated section for displaying fetched data.

#### a. Seoul Weather
- **Functionality**:
    - Fetches current weather information for Seoul from a public API (`wttr.in`).
    - Triggered by the "서울 날씨" button.
- **UI**:
    - Displays the current weather status (in Korean), temperature, and feels-like temperature.
    - Shows a "loading..." message while fetching.
    - The information is presented in a clean, card-like box.

#### b. KOSDAQ Index
- **Functionality**:
    - Displays summary information for the KOSDAQ index.
    - Triggered by the "코스닥 지수" button.
    - **Note**: Uses static placeholder data as real-time financial APIs require authentication.
- **UI**:
    - Displays the index value, change, and percentage change.
    - Includes a disclaimer that the data is for demonstration purposes.
    - The information is presented in a card-like box.

### Design System
- **Layout**: A centered, multi-container layout on a dark, textured background. The layout is responsive and stacks vertically on smaller screens.
- **Theme**: Dark, with blurred, semi-transparent "glassmorphism" containers.
- **Color Palette**:
    - Background: `#1a1a1a`
    - Containers: `rgba(42, 42, 42, 0.8)`
    - Lotto Button: Red gradient (`#ff4757` to `#ff6348`)
    - Info Buttons: Blue/Purple gradient (`#4776E6` to `#8E54E9`)
    - Info Box Titles: Light blue (`#47A8F2`)
- **Typography**: `Pretendard` sans-serif font.
- **Interactivity**: Buttons have hover and focus effects (scaling, shadow glow).

## Current Task: Add Weather and KOSDAQ Features

### Plan & Steps (Completed)
1.  **Plan the implementation**: Outlined the steps to add the two new features.
2.  **Modify `index.html`**: Added two buttons ("서울 날씨", "코스닥 지수") and two `div` containers for the output.
3.  **Implement Weather Feature**: In `main.js`, added a `fetch` call to the `wttr.in` API to get and display Seoul's weather.
4.  **Implement KOSDAQ Feature**: In `main.js`, added a feature to display static, placeholder KOSDAQ data, including a disclaimer.
5.  **Add Styling**: In `style.css`, added styles for the new buttons, containers, and text to match the existing dark theme. Also updated the body layout to support multiple containers.
6.  **Update Blueprint**: Created this document to reflect the new project structure and features.
