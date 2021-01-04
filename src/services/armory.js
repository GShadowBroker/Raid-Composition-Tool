import axios from "axios";

const endpoint = "/api";

export const getCharacter = async (name) => {
  if (!name) throw new Error("Missing name parameter");
  const character = await axios.get(`${endpoint}/character/${name}`);
  return character.data;
};
