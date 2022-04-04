module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn(
      'fotos',
      'orginalname',
      'originalname',
    );
  },

  down: () => {},
};
