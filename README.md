<h1 align="center">Lead Generation Page</h1>
<p align="center">
Landing page that includes form-submission to allow visitors to subscribe to a SendInBlue mailing list for the purpose of pre-launch lead-generation.
</p>

<div align="center"><img src="https://github.com/CollinMcKinney/lead-generation-page/raw/gh-pages/demo.png"></div>

## Features
- **Easily Customizeable** - *easily configurable to use your own images, logos, text, colors/themes, api-keys, ports, etc.*
- **SendInBlue Contact List Subscription** - *what good is a landing page if you aren't generating leads?*
- **Open Graph Protocol Meta Tags** - *for social media link-sharing previews.*
- **Favicons/Browser Icons** - *icons that show in the browser tab and on mobile devices.*
- **Banner/Logo** - *central page imagery.*
- **Docker** - *includes a Dockerfile for ease of deployment on serverless architecture.*
- **NodeJS** - *uses the NodeJS runtime-environment and NPM package-manager.*



## Requirements
- [SendInBlue](https://www.sendinblue.com/)
  - *A SendInBlue account with a contact list & API key are needed.*
- [Docker](https://docs.docker.com/get-docker) / [NodeJS](https://nodejs.org/en/)
  - *It's better if you install both so you can use both build methods, but if you only want to build with one or the other, only install the one you wish to use.*
  
## Modifying

### 1. Replace Image Files:
- Replace the files in  `./public/img/` with your own images.
  - Name them the same, these are the names most browsers expect.
  - Use the same image format & resolution when possible - *different formats & sizes may display differently or not at all!*

### 2. Modify Colors / Theme:
- Edit the colors in `./public/css/index.css`
  - `--color-bg` is used for the background color.
  - `--color-fg` is used for the text color.
  - `--color-theme` is used for the meta theme color (address bar color on mobile devices.)
  - `--color-accent` is currently unused.

### 3. Personalize Text:
- Edit the text tags in `./public/html/index.html`.
  - Replace "Landing Page" in `<title>Landing Page</title>`.
  - Replace "Coming Soon!" in `<h1>Coming Soon!</h1>`.
  - Replace "Join our mailing List?" in `<h2>Join our mailing List?</h2>`.
  - Replace "Subscribe" in `<button type="submit">Subscribe</button>`.

## Building (Docker)

### 1. Install Docker:

[Get Docker](https://docs.docker.com/get-docker) and follow the installation instructions.

### 2. Build the Docker image:
- Substitute `my-landing-page` with the name you wish to use for the Docker image in the following command:
```bash
docker build -t my-landing-page .
```

- Check that your image was successfully created:
```bash
docker images
```

### 3. Run the Docker image:
- Substitute `my_key` and `my_id` with the SendInBlue API Key and the SendInBlue Contact List ID you wish to use.
Note that your API_Key should **ALWAYS** be kept private.

- `Port 8080` is used internally, the below example maps `Port 8181` from the host to `Port 8080` in the container.
  - Substitute `8181` with the port you wish to use.

- Substitute `my-landing-page` with the name you used in `Step 2` when building the Docker image.
- Run the following command:
```bash
docker run -p 8181:8080 -e SENDINBLUE_API_KEY=my_key -e SENDINBLUE_LIST_ID=my_id my-landing-page
```

- Your Docker container should now be serving the landing page at http://0.0.0.0:8181 (if you used 8181 for the external port.)
  - If you get an error like `Error starting userland proxy: listen tcp4 0.0.0.0:8181: bind: address already in use.`:
    - Try using a port other than `8181`.

### 4. Stop the Docker container:
- The following lists all running containers:
```bash
docker ps
```

- You will see a table with an entry containing `my-landing-page` (or whatever name you chose in `Step 2`).
- Copy the `CONTAINER ID` property for this entry.
- Substitute `CONTAINER ID` and run the following command:
```bash
docker stop <CONTAINER ID>
```


## Building (NPM)

### 1. Install NodeJS & NPM (NPM comes with NodeJS):
[Get NodeJS](https://nodejs.org/en/) and follow the installation instructions.

### 2. Set Environment Variables on the Host Terminal (local/temporary):
- **Windows CMD:**
```bash
set LEAD_GEN_PAGE_PORT=<my_port>  # (defaults to port 8080 if none is set.)
```
```bash
set SENDINBLUE_API_KEY=<my_key>
```
```bash
set SENDINBLUE_LIST_ID=<my_id>
```
- **MacOS Terminal:**
```bash
export LEAD_GEN_PAGE_PORT=<my_port> # (defaults to port 8080 if none is set.)
```
```bash
export SENDINBLUE_API_KEY=<my_key>
```
```bash
export SENDINBLUE_LIST_ID=<my_id>
```
- **Linux Shell:**
```bash
LEAD_GEN_PAGE_PORT=<my_port>  # (defaults to port 8080 if none is set.)
```
```bash
SENDINBLUE_API_KEY=<my_key>
```
```bash
SENDINBLUE_LIST_ID=<my_id>
```

### 3. Install Build Dependencies:
```bash
npm install
```

### 4. Run the Node.JS Server:
```bash
npm start
```

### 5. Stop the Node.JS Server:
- Press the `^C` keyboard-shortcut inside the terminal where the NodeJS server is running.
