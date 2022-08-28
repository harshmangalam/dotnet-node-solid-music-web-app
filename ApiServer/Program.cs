using ApiServer.Models;
using ApiServer.Services;


var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// add swagger for api documentation 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();
builder.Services.Configure<MusicDatabaseSettings>(builder.Configuration.GetSection("MusicDatabase"));
builder.Services.AddSingleton<SongsService>();



// cors

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins, policy => { policy.WithOrigins("http://localhost:3000"); });
});


var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

// configure swagger ui in development mode 
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.MapControllers();
app.Run();