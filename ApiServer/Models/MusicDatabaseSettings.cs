namespace ApiServer.Models;

public class MusicDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string SongsCollectionName { get; set; } = null!;
}
