import FileController from './src/controllers/FileManagementController.js'

const fileController = new FileController();
(async () => {
    try {
      const fileContent = await fileController.readFile('test.csv');
      console.log('File Content:', fileContent);
    } catch (error) {
      console.error(error.message);
    }
  })();