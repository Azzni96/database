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
-- User creation examle, replace name and password with your own
-- real credentials are stored in a "secure" location (.env file)
CREATE USER 'media'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON `MediaSharingApp`.* TO 'username'@'localhost';
FLUSH PRIVILEGES;

-- Drop the user if it already exists
DROP USER IF EXISTS 'mediasharingapp'@'localhost';

-- Create the user with a new password
CREATE USER 'media'@'localhost' IDENTIFIED BY '1234';

-- Grant all privileges to the user
GRANT ALL PRIVILEGES ON `MediaSharingApp`.* TO 'mediasharingapp'@'localhost';

-- Apply the changes
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

📡 API Endpoints for Media, Users, Likes, Comments, and Ratings
1. Media Endpoints
1.1 POST: Add Media
URL: http://127.0.0.1:3000/api/media
Method: POST
Description: Adds a new media item to the MediaItems table.
1.2 GET: Fetch All Media
URL: http://127.0.0.1:3000/api/media
Method: GET
Description: Retrieves all media items.
1.3 DELETE: Remove Media
URL: http://127.0.0.1:3000/api/media/:id
Method: DELETE
Description: Deletes a specific media item by its ID.
2. Users Endpoints
2.1 POST: Add User
URL: http://127.0.0.1:3000/api/users
Method: POST
Description: Adds a new user to the Users table.
2.2 GET: Fetch All Users
URL: http://127.0.0.1:3000/api/users
Method: GET
Description: Retrieves all users.
3. Likes Endpoints
3.1 POST: Add Like
URL: http://127.0.0.1:3000/api/likes
Method: POST
Description: Adds a new like to the Likes table.
3.2 GET: Fetch Likes by Media
URL: http://127.0.0.1:3000/api/likes/media/:media_id
Method: GET
Description: Retrieves all likes for a specific media item.
4. Comments Endpoints
4.1 POST: Add Comment
URL: http://127.0.0.1:3000/api/comments
Method: POST
Description: Adds a new comment to the Comments table.
4.2 GET: Fetch Comments by Media
URL: http://127.0.0.1:3000/api/comments/media/:media_id
Method: GET
Description: Retrieves all comments for a specific media item.
5. Ratings Endpoints
5.1 POST: Add Rating
URL: http://127.0.0.1:3000/api/ratings
Method: POST
Description: Adds a new rating to the Ratings table.
5.2 GET: Fetch Ratings by Media
URL: http://127.0.0.1:3000/api/ratings/media/:media_id
Method: GET
Description: Retrieves all ratings for a specific media item.
5.3 DELETE: Remove Rating
URL: http://127.0.0.1:3000/api/ratings/:id
Method: DELETE
Description: Deletes a specific rating by its ID.

📂 Project Structure:
src/
├── controllers/
├── models/
├── routes/
├── utils/
├── index.js
└── .env

🛠 Technologies:
- Node.js
- Express.js
- MariaDB
- dotenv
- mysql2
- multer

📬 Contact:
For any inquiries or to report issues, please contact the project maintainer.

