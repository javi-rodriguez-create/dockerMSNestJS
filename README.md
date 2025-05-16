# Dockerize Microservices
This project gives the instructions to dockerize the microservices used in Create.

# Requirements

You'll need Docker Desktop installed and running in your computer (https://www.docker.com/), as Docker shell commands will not run If Docker desktop is not running.

# How to install

This Docker container creates the local development environment to work with the NestJS microservices in Create.

You'll need to clone this repository for each microservice, so your final folder structure will be some similar to:

```
my_repositories/
├─ microservice1/
│  ├─ compose.yaml
│  ├─ Dockerfile
│  ├─ nest_microservice_1/
├─ microservice2/
│  ├─ compose.yaml
│  ├─ Dockerfile
│  ├─ nest_microservice_2/
│ ...
```

### How  to

Let's create the develop environment for the microservice 1. Open a terminal and navigate to your code folder, where you want to store all of your repositories. In our example, for the user John Doe who is using Linux or Mac, `/home/JohnDoe/my_repositories`.

Clone this project and change the destiny folder to `microservice1`:

```bash
~/my_repositories$ git clone git@github.com:javi-rodriguez-create/dockerMSNestJS.git microservice1
```

This will copy the repository files into the folder `microservice1`.  Now navigate with the terminal inside the `microservice1` folder:

```bash
~/my_repositories$ cd microservice1
~/my_repositories/microservice1$
```

Let's clone the microservice repository as a Git submodule. For this example we'll use the SKL microservice template: https://github.com/ndcmsl/nest-microservice-template:

```bash
~/my_repositories/microservice1$ git submodule add git@github.com:ndcmsl/nest-microservice-template.git
```

This will clone the repository inside a folder named `nest-microservice-template`. If you want to use another folder name, just use:

```bash
~/my_repositories/microservice1$ git submodule add git@github.com:ndcmsl/nest-microservice-template.git newFolderName
```

The next step is to modify some of those files:

### ./.env.template

Copy this file in the same folder with the name `.env` and modify the data with the folder name, microservice name, ports, and MySQL database configuration (user data and database name). This file `.env` is listed in the `.gitignore` file so it will be keep only on your computer.

### ./.npmrc.template

Copy this file in the same folder with the name `.npmrc`.  This file is used by NPM (Node Package Manager) to authenticate with Github, the repository server.

In Github, you'll need to create a token (Settings → Developer settings → Personal access tokens → Tokens (classic)). Copy the token and paste it into the `.npmrc` file, in `{{CLASSIC GITHUB TOKEN}}`. This file `.env` is listed in the `.gitignore` file so it will be keep only on your computer.

### ./nest-microservice-template/app.settings.example.js

Copy this file in the same folder with the name `app.settings.js`. In the new file, edit the MySQL connection data with the data provided in the `.env` file.

# Creating the containers

Navigate into the Docker folder with the terminal and execute this command:

```bash
~/my_repositories/microservice1$ docker compose up --build -d
```

