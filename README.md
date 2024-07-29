# Ticketing App

A full-stack ticket management application built with Next.js, MongoDB, and a variety of frontend technologies. This app allows users to create, update, and delete tickets, track their progress, and manage ticket priorities and statuses.

## Features

- **Create Tickets:** Add new tickets with title, description, category, priority, progress, and status.
- **Update Tickets:** Edit existing tickets to update details and track changes.
- **Delete Tickets:** Remove tickets from the system.
- **Track Progress:** Visualize the progress of each ticket with a progress bar.
- **Display Priorities:** Show ticket priority using color-coded icons.
- **Status Indicators:** Display ticket status with different color-coded tags.
- **Responsive Design:** Adaptable UI to different screen sizes for better user experience.

## Technologies

- **Frontend:** Next.js, React, Tailwind CSS, FontAwesome
- **Backend:** Next.js API routes
- **Database:** MongoDB with Mongoose

## Installation

1. **Clone the repository:**
   
   ```
    git clone https://github.com/AvikNayak22/ticketing-app.git
   ```
2. **Navigate to the project directory:**
   
   ```
   cd ticketing-app
   ```
3. **Install dependencies:**

   ```
   npm install
   ```
4. **Create a `.env` file in the root directory and add your MongoDB URI:**

   ```
   MONGO_URI=your_mongodb_connection_string
   ```
5. **Run the development server:**

   ```
   npm run dev
   ```
   - The app will be available at `http://localhost:3000`.

## Usage

1. **Create a Ticket:** Navigate to the ticket creation page and fill out the form to add a new ticket.
2. **View Tickets:** Tickets are listed on the dashboard. Click on a ticket to view its details.
3. **Update a Ticket:** Edit the details of an existing ticket by accessing the edit form.
4. **Delete a Ticket:** Remove a ticket by clicking the delete button on the ticket card.

## API Endpoints

- **GET /api/Tickets:** Retrieve a list of all tickets.
- **POST /api/Tickets:** Create a new ticket.
- **GET /api/Tickets/[id]:** Retrieve a specific ticket by ID.
- **PUT /api/Tickets/[id]:** Update a specific ticket by ID.
- **DELETE /api/Tickets/[id]:** Delete a specific ticket by ID.

## Contributor
- **@AvikNayak22** 
