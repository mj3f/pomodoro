# Pomodoro - with notes!

This is a simple tomodoro productivity timer application, with the additional capability of adding optional 'tasks' to-do for each pomorodo 'session'.

### Why build this?
This was a simple hobby project built in a few days (excuse any bugs!) mainly to learn TailwindCSS and HeadlessUI.
I'm looking to branch out from purely using Bootstrap for front-ends, and have really enjoyed using Tailwind, I highly recommend!
(Other tools used - React (create-react-app) & TypeScript).

### How do I run this?
(Eventually I'll host this live and update this, until then you'll have to clone this repo and run locally).

If you have cloned this repo and are wanting to run it locally, there are two ways:
- `npm i; npm run start`, or
- `docker build -t ${IMAGE_NAME} . && docker run -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}` 

### Screenshots

![Alt text](./screenshots/add-note.png?raw=true "Adding a new note")
![Alt text](./screenshots/countdown.png?raw=true "Working")