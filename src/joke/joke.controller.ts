import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { JokeService } from './joke.service';
import { Response } from 'express';

@Controller('joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Post('save')
  async saveJoke(@Res() response: Response, @Body('joke') joke: string, @Body('email') email: string) {
    const newJoke = this.jokeService.saveJoke(joke, email);
    return response.status(HttpStatus.CREATED).json({
        newJoke
    })
  }

  @Get('my-jokes')
  async getMyJokes() {
    return this.jokeService.getMyJokes();
  }

  @Post('delete')
  async deleteJoke(@Body('joke') joke: string) {
    return this.jokeService.deleteMyJoke(joke);
  }
}
