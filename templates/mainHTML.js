function mainHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=Nunito|Raleway&display=swap" rel="stylesheet">
        <title>Team Profiles</title>
        <style>
            body {
                background-color: whitesmoke;
            }
            header {
                color: white;
                background-color: darkblue !important;
                padding: 30px 60px;
            }
            .profile {
                padding: 20px 0 20px 35px;
                border: 2px solid darkgray;
            }
            h2 {
                font-weight: bolder;
            }
            h3 {
                font-decoration: underline;
            }
            .manager {
                color: white;
                background-color: maroon;
            }
            .engineer {
                color: white;
                background-color: steelblue;
            }
            .intern {
                color: white;
                background-color: teal;
            }
            ul {
                font-weight: bolder;
            }
        </style>
    </head>
    <body>
        <header class="jumbotron text-center">
            <h1 class=""><i class="fab fa-codepen"></i> Development Team</h1>
        </header>
        <main class="d-flex flex-column">
            ${data}
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"></script>
    </body>
    </html>`
}

module.exports = mainHTML;