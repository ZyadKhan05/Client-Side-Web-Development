<!DOCTYPE html>
<html>
    <head>
        <title>Welcome</title>
        <script src="script.js"></script>
    </head>
    <header>
        <div id="header"></div>
    </header>
    <body style="font-size: 24px">
        <h1>Welcome: Thank You For Submitting The Form</h1>
        First Name: <?php echo htmlspecialchars($_POST['fname']); ?> <br>
        Last Name: <?php echo htmlspecialchars($_POST['lname']); ?> <br>
        Address: <?php echo htmlspecialchars($_POST['address']); ?> <br>
        City: <?php echo htmlspecialchars($_POST['city']); ?> <br>
        State: <?php echo htmlspecialchars($_POST['state']); ?> <br>
        Zip/Postal Code: <?php echo htmlspecialchars($_POST['zip']); ?> <br>
        Phone Number: <?php echo htmlspecialchars($_POST['phone']); ?> <br>
        Email Address: <?php echo htmlspecialchars($_POST['email']); ?> <br>
        Your message to us: <?php echo htmlspecialchars($_POST['comment']); ?> <br>

        <!-- End of getting the value from the submitted form -->
    </body>
</html>