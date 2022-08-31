'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaylistSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlaylistSong.belongsTo(models.Playlist,{
          foreignKey:'playlistId',
          otherKey:'songId',
          onDelete:'CASCADE',
      });
      PlaylistSong.belongsTo(models.Song,{
          foreignKey: 'songId',
          otherKey: 'playlistId',
          onDelete:'CASCADE',
        });
    }
  }
  PlaylistSong.init({
    songId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaylistSong',
  });
  return PlaylistSong;
};
