const fs = require('fs');
const path = require('path');

class FileController {
    dirName  = "/home/rishon/Desktop/GIT/Core-Functions/configuration";
  constructor() {
    this.baseDirectory = path.join(dirName);
  }

  async readFile(filename) {
    const filePath = path.join(this.baseDirectory, filename);
    try {
      const data = await fs.promises.readFile(filePath, 'utf8');
      return data;
    } catch (err) {
      throw new Error(`Error reading file: ${filename} - ${err.message}`);
    }
  }

  async writeFile(filename, content) {
    const filePath = path.join(this.baseDirectory, filename);
    try {
      await fs.promises.writeFile(filePath, content, 'utf8');
      return `File ${filename} successfully written.`;
    } catch (err) {
      throw new Error(`Error writing to file: ${filename} - ${err.message}`);
    }
  }

  async deleteFile(filename) {
    const filePath = path.join(this.baseDirectory, filename);
    try {
      await fs.promises.unlink(filePath);
      return `File ${filename} successfully deleted.`;
    } catch (err) {
      throw new Error(`Error deleting file: ${filename} - ${err.message}`);
    }
  }

  async renameFile(oldFilename, newFilename) {
    const oldPath = path.join(this.baseDirectory, oldFilename);
    const newPath = path.join(this.baseDirectory, newFilename);
    try {
      await fs.promises.rename(oldPath, newPath);
      return `File ${oldFilename} successfully renamed to ${newFilename}.`;
    } catch (err) {
      throw new Error(
        `Error renaming file from ${oldFilename} to ${newFilename} - ${err.message}`
      );
    }
  }
}
module.exports = FileController;