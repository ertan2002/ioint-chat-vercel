# IO Intelligence Chat App

A simple, clean chat application that integrates with the IO Intelligence API, compatible with OpenAI API format. Built for easy deployment on Vercel.

## Features

- Clean, modern chat interface
- Real-time messaging with AI responses
- Loading indicators and error handling
- Mobile-responsive design
- RESTful API endpoint for chat functionality
- Vercel-ready deployment configuration

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: Node.js serverless functions
- **AI Model**: meta-llama/Llama-3.3-70B-Instruct via IO Intelligence API
- **Deployment**: Vercel

## Project Structure

```
ioint-chat-vercel/
├── api/
│   └── chat.js          # API endpoint for chat requests
├── public/
│   ├── index.html       # Main chat interface
│   ├── style.css        # Styling
│   └── script.js        # Frontend functionality
├── package.json         # Dependencies and configuration
├── vercel.json          # Vercel deployment settings
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## API Usage

### Endpoint
`POST /api/chat`

### Request Headers
```
Content-Type: application/json
x-api-key: your_api_key_here  (optional if using environment variable)
```

### Request Body
```json
{
  "prompt": "Hello AI"
}
```

### Response
```json
{
  "response": "AI response text here"
}
```

### Error Response
```json
{
  "error": "Error message"
}
```

## Local Development

### Prerequisites
- Node.js (version 18.x or higher)
- npm or yarn
- Vercel CLI (optional but recommended)

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ioint-chat-vercel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   IO_INTELLIGENCE_API_KEY=your_actual_api_key_here
   ```

4. **Start local development server**
   ```bash
   vercel dev
   ```
   
   The app will be available at `http://localhost:3000`

### Alternative: Using Node.js directly

If you prefer not to use Vercel CLI locally, you can test the API using:

```bash
# Test with curl (replace YOUR_API_KEY)
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"prompt": "Hello AI"}'
```

## Vercel Deployment

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

3. **Set Environment Variables**
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add: `IO_INTELLIGENCE_API_KEY` = `your_actual_api_key_here`
   - Set for all environments (Production, Preview, Development)

4. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add IO_INTELLIGENCE_API_KEY
   ```

## Testing with Postman

### Setup
1. Create a new POST request
2. URL: `http://localhost:3000/api/chat` (local) or `https://your-app.vercel.app/api/chat` (deployed)

### Headers
```
Content-Type: application/json
x-api-key: your_api_key_here
```

### Body (raw JSON)
```json
{
  "prompt": "Explain quantum computing in simple terms"
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `IO_INTELLIGENCE_API_KEY` | Your IO Intelligence API key | Yes |

## API Configuration

The API is configured to use:
- **Model**: `meta-llama/Llama-3.3-70B-Instruct`
- **Max Tokens**: 1000
- **Temperature**: 0.7
- **Endpoint**: `https://api.intelligence.io.solutions/api/v1/chat/completions`

## Troubleshooting

### Common Issues

1. **"API key is required" error**
   - Ensure `IO_INTELLIGENCE_API_KEY` is set in environment variables
   - Or pass the key in `x-api-key` header

2. **"Method not allowed" error**
   - Ensure you're using POST method for `/api/chat`

3. **Recursive invocation error**
   - Don't include `"dev": "vercel dev"` in package.json scripts

4. **CORS issues**
   - The API automatically handles CORS for the frontend

### Local Development Tips

- Use `vercel dev` for the most accurate local environment
- Check browser console for JavaScript errors
- Verify API responses in Network tab

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 