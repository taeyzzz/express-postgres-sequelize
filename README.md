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
4. Install sequelize cli globally
```bash
npm install -g sequelize-cli
```
5. Create DB with command below
```bash
npm run db:create
```
6. Run migration files with command below
```bash
npm run db:migrate
```
7. Run express server with command below
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
node_modules/.bin/sequelize seed:create --name init-role-data
```

## Reference
https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554
https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014
https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465
