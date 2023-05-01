import json


def open_followers(file='followers_1.json'):
    with open(file) as f:
        return json.load(f)


def open_following(file='following.json'):
    with open(file) as f:
        return json.load(f)


def compare_followers():
    followers = open_followers()
    following = open_following()
    diff = []
    for following in following["relationships_following"]:
        diff.append(following["string_list_data"][0]["value"])
    for follower in followers:
        if follower["string_list_data"][0]["value"] in diff:
            diff.remove(follower["string_list_data"][0]["value"])
    for user in diff:
        print(user)
