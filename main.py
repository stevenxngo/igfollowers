import json


# open followers file
with open('followers.json') as f:
    followers = json.load(f)

# open following file
with open('following.json') as f:
    following = json.load(f)

# resulting diff list
diff = []

# add all following to list
for following in following["relationships_following"]:
    diff.append(following["string_list_data"][0]["value"])

# remove mutual from list
for follower in followers:
    if follower["string_list_data"][0]["value"] in diff:
        diff.remove(follower["string_list_data"][0]["value"])

# print users in list
for user in diff:
    print(user)
