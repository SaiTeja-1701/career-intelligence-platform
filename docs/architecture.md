# System Architecture

The AI-Powered Career Intelligence Platform follows a modular, service-oriented architecture that separates user interaction, backend orchestration, and machine learning intelligence.

## Components

### Frontend (React)
- User interface and dashboards
- Resume upload and visualization
- AI chatbot interaction

### Backend API (Node.js + Express)
- Acts as API gateway
- Handles validation, pagination, caching (ETag), and idempotency
- Manages database interactions
- Communicates with ML service

### ML Service (FastAPI)
- Resume parsing and NLP
- Skill extraction and embeddings
- Forecasting models
- Vector search for similarity

### Database (MongoDB Atlas)
- User profiles
- Parsed resumes
- Job descriptions
- Skill taxonomy
- Analytics data
