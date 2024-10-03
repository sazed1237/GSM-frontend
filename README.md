**GSM SMS Receiver**

This project allows you to receive SMS messages via a GSM modem using Node.js on the backend, and display them in real-time in a Vite-powered React frontend using WebSockets.

**Prerequisites**
Make sure you have the following installed:

* Node.js (v14 or higher)
* npm or Yarn
* GSM Modem with proper drivers installed
* Vite (installed automatically via npm during frontend setup)

---------------------------------------------------------------------

1. Clone the repository:
2. Navigate to the frontend folder:
3. Install dependencies:
* npm install
3. Configure Tailwind CSS (if necessary):
* Tailwind is already set up, but you can adjust the configuration in  tailwind.config.js.
4. Run the development server:
* npm run dev


**Usage**
* Receiving SMS: The backend will receive SMS messages from the GSM modem and transmit them via WebSockets to the frontend.
* Displaying SMS: The frontend will display incoming messages in real-time, using a clean interface built with Tailwind CSS.


Ensure the GSM modem is properly connected, and that the port and baud rate are configured correctly in the backend.
