# KLJ Merkem Website

The official website for KLJ Merkem (Katholieke Landelijke Jeugd Merkem). This project showcases the youth organization's activities, events, board members, photos, and history.

🌐 **Live Website:** [https://kljmerkem.be](https://kljmerkem.be)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is hosted on GitHub Pages with a custom domain.

## Features

- **Home Page**: Introduction to KLJ Merkem
- **Activities**: Overview of all activities and programs
- **Events**: Upcoming and past events
- **Board Members**: Meet the current board
- **Photo Gallery**: Collection of photos from activities and events
- **History**: Learn about the organization's background

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment to GitHub Pages

This website is hosted on GitHub Pages with a custom domain (kljmerkem.be). Here's how to deploy:

### Prerequisites

1. Install the `gh-pages` package as a dev dependency:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add the following scripts to your `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     },
     "homepage": "https://kljmerkem.be"
   }
   ```

### Deployment Steps

1. **Build and Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

   This command will:

   - Run `npm run build` to create the production build
   - Deploy the build folder to the `gh-pages` branch
   - Make it available at your GitHub Pages URL

2. **Configure Custom Domain:**

   - In your GitHub repository, go to Settings → Pages
   - Under "Custom domain", enter: `kljmerkem.be`
   - Make sure "Enforce HTTPS" is checked
   - GitHub will create a CNAME file in your `gh-pages` branch

3. **DNS Configuration:**
   - Configure your domain's DNS settings to point to GitHub Pages:
     - Create a CNAME record pointing `www.kljmerkem.be` to `your-username.github.io`
     - Create A records for the apex domain pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`

### Automated Deployment (Optional)

For automatic deployment on every push to the main branch, you can set up a GitHub Action:

1. Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v2

         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: "16"

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./build
             cname: kljmerkem.be
   ```

### Manual Deployment Commands

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── activiteit/     # Activity components
│   ├── bestuurslid/    # Board member components
│   ├── event/          # Event components
│   ├── footer/         # Footer component
│   └── navbar/         # Navigation component
├── images/             # Static images and media
├── pages/              # Main page components
│   ├── activiteiten/   # Activities page
│   ├── bestuur/        # Board page
│   ├── evenementen/    # Events page
│   ├── fotos/          # Photos page
│   ├── geschiedenis/   # History page
│   ├── home/           # Home page
│   └── Layout/         # Layout wrapper
├── App.js              # Main app component with routing
└── index.js            # Entry point
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Router** - Declarative routing for React
- **React Helmet Async** - Document head management
- **CSS3** - Styling and animations
- **GitHub Pages** - Static site hosting
- **Custom Domain** - kljmerkem.be

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Troubleshooting

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### GitHub Pages Deployment Issues

- Make sure your repository is public or you have GitHub Pro for private repo Pages
- Check that the `gh-pages` branch exists and contains your built files
- Verify your custom domain DNS settings
- Ensure HTTPS is enforced in repository settings
