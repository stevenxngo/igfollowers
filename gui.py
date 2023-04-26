import sys

from PyQt6.QtCore import QSize, Qt
from PyQt6.QtWidgets import *
import qdarktheme


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("IG Follower Tracker")
        button = QPushButton("Press Me!")

        self.setCentralWidget(button)


def show():
    app = QApplication(sys.argv)

    qdarktheme.setup_theme()

    window = MainWindow()
    window.show()

    app.exec()
