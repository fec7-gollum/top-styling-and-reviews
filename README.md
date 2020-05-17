# Con Appetit

> This is a redesign of bon appetits recipe page. This project was worked on with two other team mates during Hack Reactor (HRR45).

After you clone this repo you can read these docs by opening docs/index.html in your browser

## Team Gollum Modules & Proxy

  - https://github.com/fec7-gollum/ingredients-carousel-and-equipment-list.git (Max's Module)
  - https://github.com/fec7-gollum/recipe-steps-w-video-carousel.git (Zeke's Module)

  - https://github.com/fec7-gollum/top-styling-and-review-w-proxy.git (Justin's Proxy)

## Table of Contents

1. [Overview](#Overview)
1. [PreReqs](#PreReqs)
1. [Development](#Development)
1. [RunTime!](#RunTime!)


## Overview

> This Module loads on localhost:4000/${#}
Insert a number between 1-100 and see a 'recipe'
This Module Includes the Header with an image of
the recipe and some basic info && at the bottom
a section for reviews.

You MUST signin to leave a review. Check out the
user accounts in mockUsers.js to see how to login.

## PreReqs

- Node 6.13.0
- mySql

## Development

Developed by Justin Paoletta Max Ross and Zeke Deckert-Holscher

### RunTime!

From within the root directory:

Simple Three Step Process to Get This Module Up And Running

1 - npm install
2 - go to db/dbconfig.js and reconfigure the login if you are using a different one other than root user with no password
3 - npm run awesome (this will do everything else for you but you can look at the individual scripts in package.json if you would like)
