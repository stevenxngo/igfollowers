import json


class IGModel:
    def __init__(self):
        self.following = None
        self.followers = None

    def get_followers(self):
        return self.followers

    def set_followers(self, f):
        self.followers = f

    def get_following(self):
        return self.following

    def set_following(self, f):
        self.following = f

    def compare_followers(self):
        diff = []
        for following in self.following["relationships_following"]:
            diff.append(following["string_list_data"][0]["value"])
        for follower in self.followers:
            if follower["string_list_data"][0]["value"] in diff:
                diff.remove(follower["string_list_data"][0]["value"])
        return diff
