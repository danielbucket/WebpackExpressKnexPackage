To begin, run the following scripts:
'npm run build'
'npm run server'
'npm run start'

can be found at:
'http://localhost:4344/'


Set up a database using PostgreSQL:
Be sure to have installed PostgreSQL.
Run the following scripts in the terminal:
Open PSQL in termainal: 'psql'
Create a database: 'CREATE DATABASE [db name]' (wekpdb as default for the package)
View the database you just created: '\dt'
To connect to the database: '\c [dbname]' (or '\c wepkdb' for the default)



To initiate Knex run the following scripts:
'knex migrate:make initial'
