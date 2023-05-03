import json
import sys
from json import JSONDecodeError
import model, view
from PyQt6.QtWidgets import QApplication


class IGFollowerChecker:
    """IGFollower controller class"""

    def __init__(self, model, view):
        """
        Initialize the IGFollower controller
        :param model: model for the logic
        :param view: gui for the ig program
        """
        self._model = model
        self._view = view
        self._view._controller = self
        self._connect_signals()

    def _connect_signals(self):
        """
        Connects view signals with events
        :return: (void)
        """
        self._view.followers_button.clicked.connect(self.handle_followers_upload)
        self._view.following_button.clicked.connect(self.handle_following_upload)
        self._view.compare_button.clicked.connect(self.handle_compare)

    def handle_followers_upload(self):
        """
        Opens and loads the followers json
        :return: (void)
        :raise: (JSONDecodeError) if malformed json
        """
        fname = self._view.open_file_dialog()
        if fname[0]:
            with open(fname[0], 'r') as f:
                try:
                    data = json.load(f)
                    self._model.set_followers(data)
                    self._view.set_status_bar("Followers uploaded successfully")
                except JSONDecodeError:
                    self._view.set_status_bar("Malformed followers JSON")

    def handle_following_upload(self):
        """
        Opens and loads the following json
        :return: (void)
        :raise: (JSONDecodeError) if malformed json
        """
        fname = self._view.open_file_dialog()
        if fname[0]:
            with open(fname[0], 'r') as f:
                try:
                    data = json.load(f)
                    self._model.set_following(data)
                    self._view.set_status_bar("Following uploaded successfully")
                except JSONDecodeError:
                    self._view.set_status_bar("Malformed following JSON")

    def handle_compare(self):
        """
        Determines who you are following that isn't following back and displays in in the text box. If not possible
        the status, the not-uploaded file is displayed in the status bar
        :return: (void)
        """
        if self._model.get_following() is not None and self._model.get_followers() is not None:
            try:
                res = self._model.compare_followers()
                res_str = "\n".join(res)
                self._view.set_display(res_str)
                self._view.clear_status_bar()
                # self._view.set_status_bar("Followers compared")
            except TypeError:
                self._view.set_status_bar("Comparison failed")
        elif self._model.get_following() is None and self._model.get_followers() is not None:
            self._view.set_status_bar("Following not uploaded")
        elif self._model.get_following() is not None and self._model.get_followers() is None:
            self._view.set_status_bar("Followers not uploaded")
        else:
            self._view.set_status_bar("Followers and following not uploaded")


def main():
    """
    Main function for IGFollower program
    :return: (void)
    """
    ig_app = QApplication([])
    ig_model = model.IGModel()
    ig_view = view.IGView()
    ig_view.show()
    IGFollowerChecker(model=ig_model, view=ig_view)
    sys.exit(ig_app.exec())


if __name__ == '__main__':
    main()
