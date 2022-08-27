using ApiServer.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BookStoreApi.Services;

public class SongsService
{
    private readonly IMongoCollection<Song> _songsCollection;

    public SongsService(
        IOptions<MusicDatabaseSettings> musicDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            musicDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            musicDatabaseSettings.Value.DatabaseName);

        _songsCollection = mongoDatabase.GetCollection<Song>(
            musicDatabaseSettings.Value.SongsCollectionName);
    }

    public async Task<List<Song>> GetAsync() =>
        await _songsCollection.Find(_ => true).ToListAsync();

    public async Task<Song?> GetAsync(string id) =>
        await _songsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Song newSong) =>
        await _songsCollection.InsertOneAsync(newSong);

    public async Task UpdateAsync(string id, Song updatedSong) =>
        await _songsCollection.ReplaceOneAsync(x => x.Id == id, updatedSong);

    public async Task RemoveAsync(string id) =>
        await _songsCollection.DeleteOneAsync(x => x.Id == id);
}