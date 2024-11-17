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