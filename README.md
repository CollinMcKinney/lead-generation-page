Simple landing page that includes form-submission to
allow visitors to subscribe to a mailing list
via SendInBlue.

Building the Docker image:

    docker build -t my-landing-page .
    
    Replace "my-landing-page" with the name you wish to use for the Docker image.

Running the Docker image:

    docker run -p 8080:8080 -e SENDINBLUE_API_KEY=my_key -e SENDINBLUE_LIST_ID=my_id my-landing-page

    Replace "my_key" and "my_id" with your SendInBlue API Key and the
    SendInBlue Contact List ID you wish to use.

    Note that your API Key should be kept private.