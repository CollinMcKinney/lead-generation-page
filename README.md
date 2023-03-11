<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <meta property="og:image" content="/public/img/ogp.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <title>Landing Page</title>

    <!-- Link to external stylesheet -->
    <link rel="stylesheet" type="text/css" href="/css/index.css">

    <!-- Favicon properties -->
    <link rel="icon" type="image/svg+xml" href="/public/img/favicon.svg">
    <link rel="icon" type="image/png" href="/public/img/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/public/imgfavicon-32x32.png" sizes="32x32">
    <link rel="shortcut icon" href="/public/img/favicon.ico" type="image/x-icon">
    <!-- Apple touch icon properties -->
    <link rel="apple-touch-icon" sizes="180x180" href="/public/img/apple-touch-icon-180x180.png">
    <!-- Safari pinned tab properties -->
    <link rel="mask-icon" href="/public/img/safari-pinned-tab.svg" color="#071826ff">
    <!-- Other metadata -->
    <meta name="theme-color" content="--color-theme">
    <meta name="description" content="Landing page with SendInBlue mailing list subscription form.">

    <script src="/js/setMetaThemeColor.js"></script>

</head>
<body>
  <div id="main">
    <img src="/public/img/banner.svg">
    <h1>Coming Soon! </h1>
    <h2>Join our mailing List?</h2>
    <form id="subscribe-form">
      <input type="email" name="email" placeholder="Enter your email address" required>
      <button type="submit">Subscribe</button>
    </form>
    <div id="subscribe-result"></div>
    <script src="/js/subscribeForm.js"></script>
  </div>
</body>
</html>
