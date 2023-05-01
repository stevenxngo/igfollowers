import model, gui


class IGHandler:
    def __init__(self, model, view):
        self._model = model
        self._view = view
        self._connect_signals()

    def _connect_signals(self):
        self._view.followers_button.clicked.connect(self._create_file_dialog)


def main():
    model.compare_followers()
    gui.show()


if __name__ == '__main__':
    main()