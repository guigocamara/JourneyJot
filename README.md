# JourneyJot

JourneyJot is an open-source traveling app that helps users discover the best food spots along their journey. The app gathers data from multiple sources such as Yelp, Google, and Reddit, and displays recommended food places from point A to point B. Whether you're planning a road trip or simply exploring new places, JourneyJot will help you find delicious food along the way!

## Features
- Discover food spots based on your route.
- Data is gathered from popular platforms such as **Yelp**, **Google**, and **Reddit**.
- Interactive interface to easily visualize recommendations.

## Tech Stack
- **Backend**: FastAPI (Python)
- **Database**: MongoDB (optional for storing user data and favorites)
- **Frontend**: React (coming soon)
- **APIs**: Google Places API for food spot data

## Installation

### Prerequisites
- Python 3.8+ 
- Node.js (for React frontend)
- MongoDB (optional, for local development)

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/JourneyJot.git
cd JourneyJot

### 2. Set Up Backend

1. **Create a virtual environment**:

    ```bash
    python3 -m venv venv
    ```

2. **Activate the virtual environment**:

    * On MacOS/Linux:
    
    ```bash
    source venv/bin/activate
    ```
    
    * On Windows:
    
    ```bash
    .\venv\Scripts\activate
    ```

3. **Install dependencies**:

    ```bash
    pip install -r backend/requirements.txt
    ```

### 3. Set Up MongoDB (Optional)

If you're using MongoDB, you'll need to set up your connection string:

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and set up a database cluster.
2. Get your **MongoDB connection string**.
3. Update `backend/utils/database.py` with your connection string:
    
    ```python
    client = MongoClient("your_mongo_connection_string")
    db = client.your_database_name
    ```

### 4. Run the Backend (FastAPI)

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Run the FastAPI app**:

    ```bash
    uvicorn main:app --reload
    ```

    This will start the FastAPI server on `http://127.0.0.1:8000`.

3. **Access the API docs**:

    Open your browser and go to [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) to interact with the API.

### 5. Set Up Frontend (React)

The frontend is under development, but you can set up React:

1. **Navigate to the frontend directory** (if set up):

    ```bash
    cd frontend
    ```

2. **Install React dependencies**:

    ```bash
    npm install
    ```

3. **Run the React app**:

    ```bash
    npm start
    ```

    This will start the React development server on `http://localhost:3000`.

### 6. Testing

Test your backend and frontend by interacting with the FastAPI docs or using the React app.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. We welcome contributions that improve the functionality, add new features, or fix bugs.

### Steps to Contribute:

1. Fork the repository.
2. Create a branch for your feature or bug fix.
3. Make your changes and commit them.
4. Submit a pull request with a description of what you've changed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

