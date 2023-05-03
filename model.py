import json


class IGModel:
    """
    Model class for IGFollowers
    """

    def __init__(self):
        """
        Initialize the model
        """
        self.following = None
        self.followers = None

    def get_followers(self):
        """
        Gets the follower dictionary
        :return: (dict) followers
        """
        return self.followers

    def set_followers(self, f):
        """
        Sets the followers dictionary
        :param f: followers dictionary
        :return: (void)
        """
        self.followers = f

    def get_following(self):
        """
        Gets the following dictionary
        :return: (dict) following
        """
        return self.following

    def set_following(self, f):
        """
        Sets the following dictionary
        :param f: following dictionary
        :return: (void)
        """
        self.following = f

    def compare_followers(self):
        """
        Determines who is followed that doesn't follow back
        :return: (list) list of usernames
        """
        diff = []
        for following in self.following["relationships_following"]:
            diff.append(following["string_list_data"][0]["value"])
        for follower in self.followers:
            if follower["string_list_data"][0]["value"] in diff:
                diff.remove(follower["string_list_data"][0]["value"])
        return diff
