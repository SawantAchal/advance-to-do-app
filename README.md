Advanced React To-Do Application with Weather API Integration

## Project Overview


This is an advanced To-Do application built using React, Redux, and Tailwind CSS. The application allows users to add, view, and delete tasks with priority levels. It also integrates with the OpenWeatherMap API to fetch and display weather data for tasks associated with a specific city. The app includes user authentication (mocked) and data persistence using local storage.

## Features
- **Add Task**: Users can add tasks with a priority level (High, Medium, Low) and an optional city name.
- **View Tasks**: Tasks are displayed in a list sorted by priority (High to Low).
- **Delete Task**: Users can delete tasks from the list.
- **Weather Data**: Fetch and display current weather data for tasks with an associated city.
- **User Authentication**: Mocked login/logout functionality using Redux.
- **Persistent Storage**: Tasks and authentication status are saved in local storage.
- **Responsive Design**: The application is fully responsive and mobile-friendly.

## Technologies Used

- React
- Redux (with Redux Toolkit)
- Tailwind CSS
- OpenWeatherMap API
- Local Storage
  

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the Repository**
   - git clone https://github.com/your-username/your-repo-name.git
   - cd your-repo-name
    -npm install or yarn install

2 . **REACT_APP_WEATHER_API_KEY=your_api_key_here**


3. **npm start or yarn start**

## Usage Instructions
- Adding a Task.
  
-Enter a task description.

-Select a priority level.

-Optionally, enter a city name to fetch weather data.

-Click "Add Task" or press Enter.

-Viewing Tasks.

-Tasks are displayed in a list, sorted by priority (High to Low).

-Weather data is displayed for tasks with an associated city.

-Deleting a Task

-Click the "Delete" button next to a task to remove it from the list.

**User Authentication**
-Use the mock login/logout functionality to simulate user authentication.

## Contributing
-Fork the repository.

-Create a new branch (git checkout -b feature/your-feature).

-Make your changes.

-Commit your changes (git commit -m 'Add some feature').

-Push to the branch (git push origin feature/your-feature).

-Open a pull request.
