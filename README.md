# Yara Coding Assignment
A baseline for Yara Coding Assignment. 

## Getting started
Clone the repo with
```https://github.com/nirru/yara-coding-assignemnt.git```

Install dependencies with
```yarn intsall```

First start the rest API server
```yarn server```
it will start the server on port 3000
and you will see the message ```Server started on 3000```

Second start the Client side application
```yarn dev-client```

it will start the server on port 8080


Run test  with

```yarn test```



Now open the browser and navigate to `http://localhost:8080` and you get your client rendered React app. You can inspect the page source and see that the html coming from your local server has all the nodes defined in the React app.

### A few notes
* I tried to complete all the feature whatever provided in the assignment 
* I am starting the rest-api server with the `server.js` file which is in the server folder. This file loads the babel-register and sets up the babel plugins needed to run JSX and ESModules on the server.
