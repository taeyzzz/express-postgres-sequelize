# Setup
1. Install docker https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04
2. start postgres docker with command below
```bash
docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=postgres -d postgres
```
3. Install dependencies
```bash
yarn or npm install
```
4. Create DB with command below
```bash
npm run db:create
```
5. Run migration files with command below
```bash
npm run db:migrate
```
6. Run express server with command below
```bash
npm start
```

# How to use sequelize
```bash
node_modules/.bin/sequelize init
node_modules/.bin/sequelize db:create
node_modules/.bin/sequelize db:drop
node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:migrate:undo
node_modules/.bin/sequelize model:create --name Users --attributes email:string,password:string,firstname:string,lastname:string
```
