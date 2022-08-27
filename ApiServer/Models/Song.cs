using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiServer.Models;

public class Song
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]

    public string? Id { get; set; }

    [BsonElement("title")]
    public string Title { get; set; } = null!;

    [BsonElement("thumbnail")]
    public string Thumbnail { get; set; } = null!;

    [BsonElement("category")]
    public string Category { get; set; } = null!;

    [BsonElement("singer")]
    public string Singer { get; set; } = null!;

    [BsonElement("src")]
    public string Src { get; set; } = null!;
}