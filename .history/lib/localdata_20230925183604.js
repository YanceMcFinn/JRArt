const fs = require('fs');
const fsPromises = require('fs').promises
const path =require('path')

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'json/data.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData
}