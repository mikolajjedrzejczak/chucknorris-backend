import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Joke } from 'src/types/joke';

@Injectable()
export class JokeService {
  private myJokes: Joke[] = [];

  saveJoke(joke: string, email: string) {
    const jokeExists = this.myJokes.find((j) => j.joke === joke);

    if (jokeExists) {
      return new HttpException(
        'The joke is already on the list!',
        HttpStatus.CONFLICT,
      );
    }

    return this.myJokes.push({ joke, email });
  }

  getMyJokes(): Joke[] {
    return this.myJokes;
  }

  deleteMyJoke(joke: string) {
    this.myJokes = this.myJokes.filter((j) => j.joke !== joke);
    return this.myJokes;
  }
}
