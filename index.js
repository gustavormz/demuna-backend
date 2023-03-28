import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// import UserDataJson from './src/data/users.json'

const UsersData = [
  {
    "nombres": "Juan",
    "apellidopaterno": "García",
    "apellidomaterno": "Hernández",
    "fechanac": "1995-07-15",
    "telefono": "0123456789",
    "dni": "526056895892559",
    "direccion": "Calle Ficticia #123"
  },
  {
    "nombres": "María",
    "apellidopaterno": "Martínez",
    "apellidomaterno": "González",
    "fechanac": "1990-10-25",
    "telefono": "0123456789",
    "dni": "383814315839621",
    "direccion": "Avenida Imaginaria #456"
  },
  {
    "nombres": "José",
    "apellidopaterno": "López",
    "apellidomaterno": "Pérez",
    "fechanac": "1988-04-07",
    "telefono": "0123456789",
    "dni": "637461810193846",
    "direccion": "Plaza Irreal #789"
  },
  {
    "nombres": "Ana",
    "apellidopaterno": "González",
    "apellidomaterno": "Ramírez",
    "fechanac": "1999-12-18",
    "telefono": "0123456789",
    "dni": "642203217236300",
    "direccion": "Calle Inexistente #1011"
  },
  {
    "nombres": "Carlos",
    "apellidopaterno": "Castro",
    "apellidomaterno": "Herrera",
    "fechanac": "1992-08-29",
    "telefono": "0123456789",
    "dni": "679454942961985",
    "direccion": "Avenida Inalcanzable #1213"
  },
  {
    "nombres": "Lucía",
    "apellidopaterno": "Hernández",
    "apellidomaterno": "Díaz",
    "fechanac": "1991-02-01",
    "telefono": "0123456789",
    "dni": "232676771108371",
    "direccion": "Calle Imaginativa #1415"
  },
  {
    "nombres": "Jorge",
    "apellidopaterno": "Ramírez",
    "apellidomaterno": "García",
    "fechanac": "1985-06-12",
    "telefono": "0123456789",
    "dni": "936859782138618",
    "direccion": "Calle Inexistente #1617"
  },
  {
    "nombres": "Laura",
    "apellidopaterno": "Díaz",
    "apellidomaterno": "López",
    "fechanac": "1997-03-30",
    "telefono": "0123456789",
    "dni": "936859782138618",
    "direccion": "Calle Inexistente #1617"
  }
]

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    id: String
    nombres: String
    apellidopaterno: String
    apellidomaterno: String
    fechanac: String
    telefono: String
    dni: String
    direccion: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type GetUsers {
    users: [User]
  }
`;

const resolvers = {
  GetUsers: {
    users: () => UsersData
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
























