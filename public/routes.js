{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  {
    "navigationFallback": {
      "rewrite": "index.html",
    }
  }
}
