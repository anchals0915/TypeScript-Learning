import { Coach } from "./Coach";

export class CricketCoach implements Coach {
  getDailyWorkout(): string {
    return "Pratice atleast 1000 bowls daily !!";
  }
}
