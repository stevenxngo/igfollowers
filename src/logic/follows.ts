type StringListData = {
  href: string;
  value: string;
  timestamp: number;
}

type Followers = {
  title: string;
  media_list_data: unknown[];
  string_list_data: StringListData[];
};

type Follow = {
  title: string;
  media_list_data: unknown[];
  string_list_data: StringListData[];
}

type Following = {
  relationships_following: Follow[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUsernames = (data: any, key: string) => {
  let usernames: string[] = [];

  // data is an array
  if (Array.isArray(data)) {
    for (const item of data) {
      usernames = usernames.concat(getUsernames(item, key));
    }
  }
  // data is an object 
  else if (typeof data === 'object' && data !== null) {
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

export const compareFollows = (followers: Followers[], following: Following) => {
  const followers_names = getUsernames(followers, "value");
  const following_names = getUsernames(following, "value");
  const diff = following_names.filter((name) => !followers_names.includes(name));
  return diff;
}