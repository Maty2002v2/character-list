import CharacterType from "./CharacterType";

type ResultApiCharacter = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: CharacterType[];
};

export default ResultApiCharacter;
