const fspromises = require('fs').promises
const path = require('path');

export async function getLocalData() {
    // Get the path of the json file
    const currDir = process.cwd()
    const filePath = path.join(currDir, 'json/data.json');
    // Read the json file
    const jsonData = await fspromises.readFile(filePath);
    // Parse data as json
    const objectData = JSON.parse(jsonData);
  
    return objectData
  }