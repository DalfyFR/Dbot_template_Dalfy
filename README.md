# Discord Bot template from Dalfy

> [!NOTE]
> Using the following :
>
> - commandKit [event/command Handler](https://commandkit.js.org/)
> - typeScript (can be easily switched to js by editing extension and only a few types specifications & guards to remove)
> - dotenv

## Version 0.9.0

---

## Features :

## Coming

- TBD

## Under review

- commands template & ping example
- bot errors handler
- bot setup & custom status

## Released

- package.json & needed modules
- commandKit config & scripts

---

# How to use :

## Create the Discord Bot :

- Create an application on [the discord dev portal](https://discord.com/developers/applications)
- Create a bot in your new application and store your bot TOKEN safely (bot tab)
- Create a invite link with necessary permissions to get the bot on your server (OAuth2 tab)

## Create the Discord Bot :

- Read [commandKit documentation](https://commandkit.js.org/) (really shot tbh)
- c/c or clone this repo
- run `npm install`
- add your commands & events (use the [command template](src/utils/command_example.ts) if needed)
- use `npm run dev` to start the local dev execution (with restart on saves)
- use `npm run build` & `npm run start` for production

> [!TIP]
> For a docker distribution the [Dockerfile](/dockerDistrib/Dockerfile) example can help

Feel free to DM me if you need any help !

---

### Dev Contact :

- Discord : Dalfy
