import { getUsernames, compareFollows } from "./follows";
import empty_followers from "../data/json/empty_followers.json"
import empty_following from "../data/json/empty_following.json"
import followers from "../data/json/followers_1.json"
import following from "../data/json/following.json"

const followers_names = ["sushitrash", "thinkaboutzu", "88rising", "keshi", "jennierubyjane", "tenzofficial", "champagnepapi", "lalalalisa_m", "by__sana", "newjeans_official"]
const following_names = ["keshi", "illenium", "tenzofficial", "nfl", "brianimanuel", "champagnepapi", "thinkaboutzu", "faker", "nba", "_chaechae_1", "newjeans_official", "jaytatum0"]
const diff = ["illenium", "nfl", "brianimanuel", "faker", "nba", "_chaechae_1", "jaytatum0"];
const sorted_followers = followers_names.slice().sort();
const sorted_following = following_names.slice().sort();
const sorted_diff = diff.slice().sort();

describe("follows logic", () => {
  describe("getUsernames", () => {
    it('should return an empty list if followers if empty', () => {
      expect(getUsernames(empty_followers, 'value')).toEqual([]);
    });
    it('should return an empty list if following if empty', () => {
      expect(getUsernames(empty_following, 'value')).toEqual([]);
    });
    it('should return an empty list the key isnt found', () => {
      expect(getUsernames(followers, 'key')).toEqual([]);
    });
    it('should return the follower usernames', () => {
      expect(getUsernames(followers, "value").sort()).toEqual(sorted_followers);
    });
    it('should return the following usernames', () => {
      expect(getUsernames(following, "value").sort()).toEqual(sorted_following);
    });
  });
  describe("compareFollows", () => {
    it('should return an empty list if both jsons are empty', () => {
      expect(compareFollows(empty_followers, empty_following)).toEqual([]);
    });
    it('should return an empty list if only the following is empty', () => {
      expect(compareFollows(followers, empty_following)).toEqual([]);
    })
    it('should return all following if only the followers is empty', () => {
      expect(compareFollows(empty_followers, following).sort()).toEqual(sorted_following);
    });
    it('should return the difference between followers and following', () => {
      expect(compareFollows(followers, following).sort()).toEqual(sorted_diff);
    });
  });
});