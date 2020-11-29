---
title: Setup
description: ''
position: 1.1
category: Guide
---

## Prerequisites
Make sure you have installed all of the prerequisites:
* [Docker CE](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Node.js 10.x LTS](https://nodejs.org/en/)
* Install the required programs for [node-gyp](https://github.com/nodejs/node-gyp)

## Installation for local development

1. Clone the Repository

  <code-group>
    <code-block label="HTTPS" active>

    ```bash
    git clone https://github.com/DumondaMe/DumondaMe.git
    ```

    </code-block>
    <code-block label="SSH">

    ```bash
    git clone git@github.com:DumondaMe/DumondaMe.git
    ```

    </code-block>
    <code-block label="GitHub CLI">

    ```bash
    gh repo clone DumondaMe/DumondaMe
    ```

    </code-block>
  </code-group>

2. Change to the web application code

  ```bash
  cd DumondaMe/dumondaMe
  ```

3. Install the node.js dependencies

  ```bash
  npm run installDev
  ```

4. Install the [apoc](https://neo4j.com/developer/neo4j-apoc/) library

  ```bash
    mkdir -p dockerCompose/neo4j/plugins
    curl -L https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/download/3.5.0.11/apoc-3.5.0.11-all.jar > dockerCompose/neo4j/plugins/apoc-3.5.0.11-all.jar
  ```

5. Start all local services with docker-compose

  ```bash
    docker-compose up
  ```

6. Enter http://127.0.0.1:7474/ into your browser to connect to the neo4j database. Change the standard password from neo4j to 123456

7. Todo: download standard images for cdn

8. Todo: create fake data

9. Todo: Start application