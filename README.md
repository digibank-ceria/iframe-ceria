## Ceria Web App


## Quick start

- clone the repo: `git clone https://bitbucket.org/bridce/ceria-web-app.git`

- Install dependencies: `npm install` or `yarn`

- copy .env.example to .env `cp .env.example .env` to run this app in development

- Start the server: `npm run start` or `yarn start`

- Views are on: `localhost:3000`


### For Developer

The first line must contain a commit type, an _optional_ scope, and the subject of the commit.

The message body contains a longer description of the change. This is reserved for any information that won't fit inside the subject line of a commit message. Note that each line of the commit message should not be longer than 72 characters.

Footer is optional, and contains any additional information for the commit (e.g. issues fixed, breaking changes).

#### Commit types

We use the following conventional-changelog commit types:

```
feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf:     A code change that improves performance
test:     Adding missing tests or correcting existing tests
build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm, gradle, mvn, etc)
ci:       Changes to our CI configuration files and scripts (example scopes: travis, circle-Ci, jenkins)
chore:    Other changes that don't modify src or test files
revert:   Reverts a previous commit
```

---

## Make easy to deploy
    
creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file. For more information see the production build section.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

- copy folder `build` to web service using `nginx` or `apache web server` by default in folder html or folder public in apache web server `/var/www/public` in nginx `/usr/share/nginx/html`

- runing this page in port 80 or using https in port 443

- copy nginx.conf to /etc/nginx/conf.d/default.conf `cp nginx.conf /etc/nginx/conf.d/default.conf` or using apache web server config in `/etc/httpd/conf/httpd.conf` whatever you want

- using docker for deploy

```docker
    FROM node:14.15.0 as build-stage
    # copy all files to docker image
    COPY . /app
    # directory position
    WORKDIR /app
    RUN cat .env
    # install dependencies
    RUN npm install
    # build  
    RUN npm run build --nomaps
    # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
    FROM nginx:stable
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    COPY --from=build-stage /app/build/ /usr/share/nginx/html
    RUN rm -rf /app
```

### Credits
Team Front End Digital Bank (c) 2020