# Flickr Image Search Web App

This is an image search web app that integrates Flickr API.

## Installation

Note: Some of the packages were not really compatible with the Angular version that is used in this project.
In that case, we need to use these commands:

```bash
cd frontend && npm i --legacy-peer-deps
```

## Running the application

Inside the frontend folder, run this command and go to http://localhost:4200 after it successfully builds:

```bash
ng serve
```

## Building the application for production

Inside the frontend folder, run this command and it will generate a /dist folder that has all the artifacts needed for deployment:

```bash
ng build -c production
```
