# Portfolio Contact Form Backend

This is a Node.js backend using Nodemailer to handle contact form submissions.

## Setup Instructions

1. **Configure Gmail App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Generate an App Password for your Gmail account
   - Copy the generated password

2. **Update .env file**
   ```
   MAIL_USER=your-email@gmail.com
   MAIL_PASS=your-app-password-here
   RECEIVE_TO=your-email@gmail.com
   ```

3. **Install dependencies** (already done if you followed setup)
   ```bash
   npm install
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   Or:
   ```bash
   node server.js
   ```

   Server will run on `http://localhost:5000`

5. **Open your portfolio**
   - Open `index.html` in your browser
   - The contact form will now send emails through this backend

## Testing

1. Start the backend server: `npm start`
2. Open `index.html` in your browser
3. Fill out and submit the contact form
4. Check your email inbox for the submission

## Important Notes

- Keep your `.env` file secure and never commit it to version control
- The `.gitignore` file is already configured to exclude `.env` and `node_modules/`
- Make sure the backend server is running before testing the contact form
