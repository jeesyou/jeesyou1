# Blueprint: Interactive Info Dashboard

## Overview

This is an interactive web application that provides users with useful and fun information. It started as a lottery number generator and has been expanded to include real-time information like weather and stock market data, and a contact form. The application features a modern, cool blue, frosted glass design theme.

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

### 3. Contact Form
- **Functionality**:
    - Provides a form for users to submit partnership inquiries.
    - Uses Formspree (`https://formspree.io/f/xbdaoqod`) to handle form submissions without backend code.
- **UI**:
    - Fields for Name, Email, Company (optional), and Message.
    - A submit button with a clear call to action.
    - Styled to integrate seamlessly with the blue frosted glass theme.

### Design System
- **Layout**: A centered, multi-container layout on a blue, textured background. The layout is responsive and stacks vertically on smaller screens.
- **Theme**: Cool blue, with blurred, semi-transparent "frosted glass" containers.
- **Color Palette**:
    - Background: Blue gradient (`linear-gradient(to right top, #d4eaf7, #a4c9e4, #75aace, #478cb8, #006da1)`)
    - Text: Dark gray blue (`#2D3748`, `#1A202C`)
    - Containers: Light, semi-transparent white (`rgba(255, 255, 255, 0.6)` or `rgba(255, 255, 255, 0.4)`)
    - Lotto Button: Green/Teal gradient (`linear-gradient(45deg, #20bf55, #01baef)`)
    - Info Buttons: Blue/Purple gradient (`linear-gradient(45deg, #3762E2, #6F42C1)`)
    - Submit Button: Blue gradient (`linear-gradient(45deg, #007bff, #0056b3)`)
    - Info Box Titles: Blue (`#005A9C`)
- **Typography**: `Pretendard` sans-serif font.
- **Interactivity**: Buttons have hover and focus effects (scaling, shadow glow).

## Current Task: Add Contact Form and Refactor Theme

### Plan & Steps (Completed)
1.  **Add Formspree contact form to `index.html`**: Integrated a new container with a contact form, including input fields for name, email, company, and message, linked to the provided Formspree endpoint.
2.  **Style the new contact form in `style.css`**: Added comprehensive CSS rules for the form elements to ensure visual consistency with the blue frosted glass theme.
3.  **Refactor theme to cool blue**: Modified `style.css` to change the entire website's theme from dark to a cool blue "frosted glass" style, updating background colors, container styles, and button gradients.
4.  **Update `blueprint.md` with new features and theme changes**: Documented the addition of the contact form and the global theme refactoring.
