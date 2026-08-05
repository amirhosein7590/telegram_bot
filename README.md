# Telegram Business Assistant Bot


Telegram Business automation bot built with TypeScript and grammY.


## Features

- Telegram Business Account automation
- Automatic response to private messages
- Job opportunity assistant
- Inline keyboard navigation
- Static JSON based content management
- Clean architecture


## Architecture

The project follows layered architecture:

- handlers
- services
- data
- keyboards
- types


## Tech Stack

- Node.js
- TypeScript
- grammY
- Telegram Bot API


## Configuration

Create `.env`

BOT_TOKEN=your_token


## Development

Install dependencies:

npm install


Run:

npm run dev


Build:

npm run build


## Data Management

Job information is stored in:

src/data/jobs.json


No database is required because content is static.


## Future Extensions

Possible improvements:

- CRM integration
- Resume collection
- Candidate scoring
- Admin dashboard
- Database persistence
