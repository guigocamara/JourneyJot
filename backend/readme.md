# 🧠 JourneyJot Backend

This is the FastAPI backend for **JourneyJot**, powering API endpoints for travel-based food discovery.


## ⚙️ Setup Instructions
### 🔑 Add API Keys to Environment Variables

Retrieve API key from Google Cloud.



#### On **Linux / macOS**:

```bash
Run  sed -i 'a\export GOOGLE_PLACES_KEY=YOUR_API_KEY' ~/.bashrc to add a new line to the end of the file.
```
 Replace  `YOUR_API_KEY`  with your actual API key value.

```bash
After using `sed` to edit the file, run `source ~/.bashrc` to reload the file and define the `GOOGLE_PLACES_KEY` variable.

Run echo $GOOGLE_PLACES_KEY to ensure that the variable is set correctly
```
#### On **Windows**:

```bash

In the command line, run setx GOOGLE_PLACES_KEY "your_api_key_here"

Confirm it's set by running echo %GOOGLE_PLACES_KEY%

```

