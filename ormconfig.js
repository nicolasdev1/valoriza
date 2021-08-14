module.exports = {
   "name": "default",
   "type": "postgres",
   "host": "localhost",
   "port": 15432,
   "username": "postgres",
   "password": process.env.POSTGRES_PASSWORD,
   "database": "postgres",
   "synchronize": false,
   "logging": true,
   "entities": [ "src/entities/*.ts" ],
   "migrations": [ "src/database/migrations/*.ts" ],
   "cli": {
      "migrationsDir": "src/database/migrations",
      "entitiesDir": "src/entities"
   }
}
