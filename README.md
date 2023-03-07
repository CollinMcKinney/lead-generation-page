# Landing Page / SendInBlue Email Subscription
Landing page that includes form-submission to
allow visitors to subscribe to a SendInBlue mailing list
for the purpose of pre-launch lead-generation.

## Features:
- SendInBlue Contact List Subscription
- Docker
- NodeJS
- Open Graph Protocol meta tags / placeholder image.
- Favicon & Banner placeholder images.

# Building

## 1. Install Docker:

[Get Docker](https://docs.docker.com/get-docker) and follow the installation instructions.

## 2. Build the Docker image:
- Replace `my-landing-page` with the name you wish to use for the Docker image.

```bash
docker build -t my-landing-page .
```

- Check that your image was successfully created.
```bash
docker images
```

## 3. Run the Docker image:
- Replace `my_key` and `my_id` with the SendInBlue API Key and the
SendInBlue Contact List ID you wish to use.
Note that your API Key should **ALWAYS** be kept private.

- `Port 8080` is used internally, the below example maps `Port 80`
from the host to `Port 8080` in the container.
You can replace `80` with the port you wish to use.

- Replace `my-landing-page` with the name you used in `Step 2` when building the Docker image.

```bash
docker run -p 80:8080 -e SENDINBLUE_API_KEY=my_key -e SENDINBLUE_LIST_ID=my_id my-landing-page
```

- Your Docker container should now be serving the landing page at http://localhost:80.

## 4. Stop the Docker container:
- The following lists all running containers.
```bash
docker ps
```
- You will see a table with an entry containing `my-landing-page` (or whatever name you chose in `Step 2`)
- Copy the `CONTAINER ID` property for this entry.
- Run the following command and substitute the `CONTAINER ID`.
```bash
docker stop <CONTAINER ID>
```
