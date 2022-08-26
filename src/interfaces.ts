interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou.genre);
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}
