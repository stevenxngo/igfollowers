import os


class IGModel:
    """
    Model class for IGFollowers
    """

    def __init__(self):
        """
        Initialize the model
        """
        self.following_fpath = None
        self.followers_fpath = None
        self.following = None
        self.followers = None

    def set_followers_fpath(self, fpath):
        """
        Sets the followers file path
        :param fpath: file path
        :return: (void)
        """
        self.followers_fpath = fpath

    def get_followers_fpath(self):
        """
        Gets the followers file path
        :return: (void)
        """
        return self.following_fpath

    def set_following_fpath(self, fpath):
        """
        Sets the following file path
        :param fpath: file path
        :return: (void)
        """
        self.following_fpath = fpath

    def get_following_fname(self):
        """
        Gets the following file path
        :return: (void)
        """
        return self.following_fpath

    def set_followers(self, f):
        """
        Sets the followers dictionary
        :param f: followers dictionary
        :return: (void)
        """
        self.followers = f

    def get_followers(self):
        """
        Gets the follower dictionary
        :return: (dict) followers
        """
        return self.followers

    def set_following(self, f):
        """
        Sets the following dictionary
        :param f: following dictionary
        :return: (void)
        """
        self.following = f

    def get_following(self):
        """
        Gets the following dictionary
        :return: (dict) following
        """
        return self.following

    def gen_followers_str(self):
        """
        Generates a hyperlinked string with the uploaded followers file
        :return: string for the status bar
        """
        fname = os.path.basename(self.followers_fpath)
        return f"Uploaded <a href='file:///{self.followers_fpath}'>{fname}</a> as followers"

    def gen_following_str(self):
        """
        Generates a hyperlinked string with the uploaded following file
        :return: string for the status bar
        """
        fname = os.path.basename(self.following_fpath)
        return f"Uploaded <a href='file:///{self.following_fpath}'>{fname}</a> as following"

    def compare_followers(self):
        """
        Determines who is followed that doesn't follow back
        :return: (list) list of usernames
        """
        diff = []
        print(self.followers_fpath)
        print(self.following_fpath)
        for following in self.following["relationships_following"]:
            diff.append(following["string_list_data"][0]["value"])
        for follower in self.followers:
            if follower["string_list_data"][0]["value"] in diff:
                diff.remove(follower["string_list_data"][0]["value"])
        return diff
