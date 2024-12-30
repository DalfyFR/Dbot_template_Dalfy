# Discord Bot for WeLoveBTB community by Dalfy

### Halo Infinite FR+ community

## Version 0.0.1

---

# Features :

## Coming

- TBD

## Under review

- Scheduled lobbies (with node-cron assist form)

## Released

- Role selection message
- Standard ping command
- Purge command up to 100 messages & 14 days old (API limit)
- Random lobby command generation

---

# How to use :

## Discord Bot :

- Create an application on [the discord dev portal](https://discord.com/developers/applications)
- Create a bot in your new application and store your bot TOKEN safely (bot tab)
- Create a invite link with necessary permissions to get the bot on your server (OAuth2 tab)

## DataBase :

- Create a MongoDB account on [their cloud website](https://www.mongodb.com/cloud/atlas/register)
- Create a DB user account with a password (avoid special caracters for the connection link below)
- Create a new dataBase and store the connection string for vsCode (don't forget to paste your password in it)

## Run the bot :

- Install Node > v20.17.0
- Get from this rep :
  - src folder
  - package.json file
  - commandkit.config.cjs file
  - .env.example file
  - Dockerfile & compose.yaml files if needed
- Run npm install to get all the necessary node modules
- Rename the `.env.example` to `.env` and fill it with your bot TOKEN and your DB connection string
- Run `npm run build` to build the project
- Run `npm run start` to start the bot : It can take some time to register commands on the first start
  -# You should get the run logs in a btbot-prod.logs file if needed. Know that an anti-crash system is up => no crash doesn't mean no errors !

>[!TIP]
> For a docker distribution, remember to avoid the global node module install each time you build the image :
>
> - copy package.json
> - run npm i
> - copy the rest of the files (src + commandkit.config.cjs + .env)
> - Run `npm run build`
> - CMD : `npm run start`

Feel free to DM me if you need any help !

---

### Dev Contact :

- Discord : Dalfy
