// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUsernames = (data: any, key: string): string[] => {
  let usernames: string[] = [];

  if (Array.isArray(data)) {
    for (const item of data) {
      usernames = usernames.concat(getUsernames(item, key));
    }
  } else if (typeof data === 'object' && data !== null) {
    for (const objKey in data) {
      if (objKey === key) {
        usernames.push(data[objKey]);
      } else {
        usernames = usernames.concat(getUsernames(data[objKey], key));
      }
    }
  }

  return usernames;
}

// Instagram has used different keys for usernames across export formats.
// Try each candidate in order and return the first non-empty result.
const USERNAME_KEYS = ["value", "title"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractUsernames = (data: any): string[] => {
  for (const key of USERNAME_KEYS) {
    const names = getUsernames(data, key).filter((n) => !!n && n.length > 0);
    if (names.length > 0) return names;
  }
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compareFollows = (followers: any, following: any): string[] => {
  const followerNames = extractUsernames(followers);
  const followingNames = extractUsernames(following);
  return followingNames.filter((name) => !followerNames.includes(name));
}