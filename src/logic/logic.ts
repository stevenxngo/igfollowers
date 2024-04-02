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

export const compareFollows = (followers: Followers[], following: Following) => {
  const diff = new Set<string>();

  for (const f of following["relationships_following"]) {
    diff.add(f.string_list_data[0]["value"]);
  }

  for (const f of followers) {
    if (diff.has(f.string_list_data[0]["value"])) {
      diff.delete(f.string_list_data[0]["value"]);
    }
  }

  return Array.from(diff);
}