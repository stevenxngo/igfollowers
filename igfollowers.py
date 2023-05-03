import json
import sys
from json import JSONDecodeError

import model, view
from PyQt6.QtWidgets import QApplication


class IGFollowerChecker:
    def __init__(self, model, view):
        self._model = model
        self._view = view
        self._view._controller = self
        self._connect_signals()

    def _connect_signals(self):
        self._view.followers_button.clicked.connect(self.handle_followers_upload)
        self._view.following_button.clicked.connect(self.handle_following_upload)
        # self._view.followers_file.connect(self.handle_followers_upload)
        # self._view.following_file.connect(self.handle_following_upload)
        self._view.compare_button.clicked.connect(self.handle_compare)

    def handle_followers_upload(self):
        fname = self._view.open_file_dialog()
        if fname[0]:
            with open(fname[0], 'r') as f:
                try:
                    data = json.load(f)
                    self._model.set_followers(data)
                    self._view.set_display("followers uploaded")
                except JSONDecodeError:
                    self._view.set_display("Malformed followers JSON")

    def handle_following_upload(self):
        fname = self._view.open_file_dialog()
        if fname[0]:
            with open(fname[0], 'r') as f:
                try:
                    data = json.load(f)
                    self._model.set_following(data)
                    self._view.set_display("following uploaded")
                except JSONDecodeError:
                    self._view.set_display("Malformed following JSON")

    def handle_compare(self):
        if self._model.get_following() is not None and self._model.get_followers() is not None:
            res = self._model.compare_followers()
            res_str = "\n".join(res)
            self._view.set_display(res_str)
        # elif self._model.get_following() is None and self._model.get_followers() is not None:
        #     self._view.set_display("following is none, followers is not none")
        # elif self._model.get_following() is not None and self._model.get_followers() is None:
        #     self._view.set_display("following is not none, followers is none")
        # else:
        #     self._view.set_display("following is none, followers is none")


def main():
    ig_app = QApplication([])
    ig_model = model.IGModel()
    ig_view = view.IGView()
    ig_view.show()
    IGFollowerChecker(model=ig_model, view=ig_view)
    sys.exit(ig_app.exec())


if __name__ == '__main__':
    main()