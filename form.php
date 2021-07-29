<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>Form Page</title>
</head>
<body>
    <div class="man">
        <div class="center">
            <h1 class="text-center mb-5">Fill This Form To Continue</h1>
            <form>
                <div class="mb-3">
                  <label for="fullname" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="fullname" required>
                </div>
                <div class="mb-4">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                  <label class="form-check-label" for="exampleCheck1">I Agree</label>
                </div>
                <div class="text-center">
                  <button type="submit" class="hero-btn px-5">Submit</button>
                </div>
            </form>
        </div>
    </div>

    <script src="js/jquery-3.6.0.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>