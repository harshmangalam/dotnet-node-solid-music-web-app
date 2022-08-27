using ApiServer.Models;
using ApiServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace ApiServer.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SongsController : ControllerBase
{
    private readonly SongsService _songsService;

    public SongsController(SongsService songsService) =>
        _songsService = songsService;

    [HttpGet]
    public async Task<List<Song>> Get() =>
        await _songsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Song>> Get(string id)
    {
        var song = await _songsService.GetAsync(id);

        if (song is null)
        {
            return NotFound();
        }

        return song;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Song newSong)
    {
        await _songsService.CreateAsync(newSong);

        return CreatedAtAction(nameof(Get), new { id = newSong.Id }, newSong);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Song updatedSong)
    {
        var song = await _songsService.GetAsync(id);

        if (song is null)
        {
            return NotFound();
        }

        updatedSong.Id = song.Id;

        await _songsService.UpdateAsync(id, updatedSong);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var song = await _songsService.GetAsync(id);

        if (song is null)
        {
            return NotFound();
        }

        await _songsService.RemoveAsync(id);

        return NoContent();
    }
}