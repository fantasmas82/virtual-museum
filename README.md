# Virtual Museum

A web-based virtual museum project developed as a university project.

The project provides an interactive way to explore museum sections through images, descriptions, and audio narration.

## Features

* Museum introduction and overview
* Interactive museum sections
* Section detail pages
* High-quality section images
* Audio narration for each section
* Custom audio player with playback progress
* Animated and responsive user interface
* Persian / RTL content support
* Django REST API
* Next.js frontend

## Technologies

### Backend

* Python
* Django
* Django REST Framework
* SQLite
* Pillow
* django-cors-headers

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion

## Project Structure

```text
virtual-museum/
│
├── backend/
│   ├── config/
│   ├── media/
│   ├── museum/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── services/
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

## API Endpoints

The Django backend provides the following API endpoints:

```text
GET /api/museums/
GET /api/sections/
GET /api/sections/<id>/
```

## Getting Started

### Backend

Navigate to the backend directory:

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Run the Django development server:

```bash
python manage.py runserver
```

The API will be available at:

```text
http://127.0.0.1:8000/
```

### Frontend

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000/
```

## Development

This project was developed as a university project with the goal of creating an interactive digital museum experience.

The frontend communicates with the Django REST API to retrieve museum and section information, images, and audio files.

## Status

Completed as a university project.

## Author

Ghazal
