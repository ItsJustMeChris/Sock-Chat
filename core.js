const { env: {
    dbtype,
    dbname,
    dbhost,
    dbuser,
    dbpass,
    dbport,
    socketport,
} } = process;
console.log(`Initializing:
dbtype: ${dbtype}
dbname: ${dbname}
dbhost: ${dbhost}
dbuser: ${dbuser}
dbpass: ${dbpass}
dbport: ${dbport}
socketport: ${socketport}`);

require('./socket');
