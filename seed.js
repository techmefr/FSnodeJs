const fs = require('fs');
const path = require('path');
const faker = require('faker');

function generateId() {
  return faker.datatype.uuid();
}

function createJsonFile(directory, filename, data) {
  const filePath = path.join(directory, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function createDirectoryIfNotExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

const numClients = faker.datatype.number({ min: 5, max: 10 });
const numProducts = faker.datatype.number({ min: 5, max: 10 });

for (let i = 0; i < numClients; i++) {
  const clientDirectory = path.join(__dirname, 'src', 'data', 'clients', `client${i + 1}`);
  createDirectoryIfNotExists(clientDirectory);

  const client = {
    id: generateId(),
    name: faker.name.findName(),
    email: faker.internet.email()
  };

  createJsonFile(clientDirectory, 'info.json', client);
}

for (let i = 0; i < numProducts; i++) {
  const productDirectory = path.join(__dirname, 'src', 'data', 'products', `product${i + 1}`);
  createDirectoryIfNotExists(productDirectory);

  const product = {
    id: generateId(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price()
  };

  createJsonFile(productDirectory, 'info.json', product);
}


