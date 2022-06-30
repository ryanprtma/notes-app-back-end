const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// set the cors conf to disabled
// chrome://flags/#block-insecure-private-network-requests

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
