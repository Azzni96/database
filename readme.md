MediaSharingApp

MediaSharingApp is a Node.js application that uses a MariaDB database for sharing media. The application is built following the MVC (Model-View-Controller) architecture and includes API endpoints for users, media, likes, comments, and ratings.

📑 Table of Contents:
- Features
- Setup
- Environment Variables
- API Endpoints
- Project Structure
- Technologies
- Contact

🛠 Features:
- Users can perform CRUD (Create, Read, Update, Delete) operations on:
  - Users
  - Media
  - Likes
  - Comments
  - Ratings
- File upload functionality with Multer.
- Integration with MariaDB for data storage and management.
- Clean MVC-based architecture.

🚀 Setup:
1. Clone this repository:
   git clone https://github.com/Azzni96/database.git
   cd MediaSharingApp

2. Install dependencies:
   npm install

3. Add a .env file in the project root with the following values:
   DB_HOST=localhost
   DB_USER=mediasharingapp
   DB_PASSWORD=securepassword123
   DB_NAME=MediaSharingApp
   PORT=3000

4. Run the database initialization script:
   mysql -u root -p
   SOURCE path/to/media-db.sql;

- User creation examle, replace name and password with your own
- real credentials are stored in a "secure" location (.env file)
- CREATE USER 'media'@'localhost' IDENTIFIED BY '1234';
- GRANT ALL PRIVILEGES ON `MediaSharingApp`.* TO 'username'@'localhost';
- FLUSH PRIVILEGES;

- Drop the user if it already exists
DROP USER IF EXISTS 'mediasharingapp'@'localhost';

- Create the user with a new password
CREATE USER 'media'@'localhost' IDENTIFIED BY '1234';

- Grant all privileges to the user
GRANT ALL PRIVILEGES ON `MediaSharingApp`.* TO 'mediasharingapp'@'localhost';

- Apply the changes
FLUSH PRIVILEGES;


5. Start the server:
   npm run dev
   The application will be available at: http://localhost:3000

🌍 Environment Variables:
The application uses the following environment variables configured in the .env file:
- DB_HOST: Database server address (e.g., localhost)
- DB_USER: MariaDB username (e.g., mediasharingapp)
- DB_PASSWORD: MariaDB password (e.g., securepassword123)
- DB_NAME: Name of the database (e.g., MediaSharingApp)
- PORT: Port for the server (e.g., 3000)

📡 API Endpoints:
1. Users
   - GET /api/users: Fetch all users
   - GET /api/users/:id: Fetch user by ID
   - POST /api/users: Create a new user
   - PUT /api/users/:id: Update user by ID
   - DELETE /api/users/:id: Delete user by ID

2. Media
   - GET /api/media: Fetch all media
   - GET /api/media/:id: Fetch media by ID
   - POST /api/media: Upload new media
   - PUT /api/media/:id: Update media by ID
   - DELETE /api/media/:id: Delete media by ID
3. Likes
   - GET /api/likes/media: Fetch all likes
   - GET /api/likes/media/:id: Fetch likes by ID
   - POST /api/likes: Upload new likes
   - DELETE /api/likes/:id: Delete likes by ID
4. Comments
   - GET /api/comments/media: Fetch all comments
   - GET /api/comments/media/:id: Fetch comments by ID
   - POST /api/comments: Upload new comments
   - DELETE /api/comments/:id: Delete comments by ID
5. Rating
   - GET /api/rating/media: Fetch all rating
   - GET /api/ rating /media/:id: Fetch rating by ID
   - POST /api/ rating: Upload new rating
   - DELETE /api/ rating /:id: Delete rating by ID


📂 Project Structure:
- src/
-  ├── controllers/
-  ├── models/
-  ├── routes/
-  ├── utils/
-  ├── index.js
-  └── .env

🛠 Technologies:
- Node.js
- Express.js
- MariaDB
- dotenv
- mysql2
- multer

📬 Contact:
For any inquiries or to report issues, please contact the project maintainer.

