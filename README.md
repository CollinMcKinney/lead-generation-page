# Lead Generation Page / SendInBlue Email Subscription / Landing Page
Landing page that includes form-submission to
allow visitors to subscribe to a SendInBlue mailing list
for the purpose of pre-launch lead-generation.

## Features:
- SendInBlue Contact List Subscription
- Docker
- NodeJS
- Open Graph Protocol meta tags / placeholder image.
- Favicon & Banner placeholder images.

# Modifying

## 1. Replace Image Files
- Replace the files in  `./public/img/` with your own images
  - Name them the same, these are the names most browsers expect.
  - Use the same image format & resolution.

## 2. Modify Colors / Theme
- Edit the colors in `./public/css/index.css`
  - `--color-bg` is used for the background color.
  - `--color-fg` is used for the text color.
  - `--color-theme` is used for the meta theme color (address bar color on mobile devices.)
  - `--color-accent` is currently unused.

## 3. Personalize Text
- Edit the text tags in `./public/html/index.html`
  - Replace "Landing Page" in `<title>Landing Page</title>`
  - Replace "Coming Soon!" in `<h1>Coming Soon!</h1>`
  - Replace "Join our mailing List?" in `<h2>Join our mailing List?</h2>`
  - Replace "Subscribe" in `<button type="submit">Subscribe</button>`

# Building (Docker)

## 1. Install Docker:

[Get Docker](https://docs.docker.com/get-docker) and follow the installation instructions.

## 2. Build the Docker image:
- Replace `my-landing-page` with the name you wish to use for the Docker image.
`docker build -t my-landing-page .`

- Check that your image was successfully created.
`docker images`

## 3. Run the Docker image:
- Replace `my_key` and `my_id` with the SendInBlue API Key and the
SendInBlue Contact List ID you wish to use.
Note that your API Key should **ALWAYS** be kept private.

- `Port 8080` is used internally, the below example maps `Port 80`
from the host to `Port 8080` in the container.
You can replace `80` with the port you wish to use.

- Replace `my-landing-page` with the name you used in `Step 2` when building the Docker image.
`docker run -p 80:8080 -e SENDINBLUE_API_KEY=my_key -e SENDINBLUE_LIST_ID=my_id my-landing-page`

- Your Docker container should now be serving the landing page at http://0.0.0.0:80.

## 4. Stop the Docker container:
- The following lists all running containers.
`docker ps`

- You will see a table with an entry containing `my-landing-page` (or whatever name you chose in `Step 2`)
- Copy the `CONTAINER ID` property for this entry.
- Run the following command and substitute the `CONTAINER ID`.
`docker stop <CONTAINER ID>`


# Building (NPM)

## 1. Set Environment Variables on the Host Terminal (local/temporary)
- Windows CMD:
  - `set SENDINBLUE_API_KEY=<my_key>`
  - `set SENDINBLUE_LIST_ID=<my_id>`
- MacOS:
  - `export SENDINBLUE_API_KEY=<my_key>`
  - `export SENDINBLUE_LIST_ID=<my_id>`
- Linux:
  - `SENDINBLUE_API_KEY=<my_key>`
  - `SENDINBLUE_LIST_ID=<my_id>`

## 2. Install Build Dependencies:
- `npm install`

## 3. Run the Node.JS Server
- `npm start`
