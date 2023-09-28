const fspromises = require('fs').promises
const pith = require('path');

export async function getLocalData() {
    // Get the path of the json file
    const filePath = pith.join(process.cwd(), 'json/data.json');
    // Read the json file
    const jsonData = await fspromises.readFile(filePath);
    // Parse data as json
    const objectData = JSON.parse(jsonData);
  
    return objectData
  }