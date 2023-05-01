import sys, os

from PyQt6.QtGui import QFont, QFontDatabase
from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import *
import qdarktheme


class IGWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self._setup()
        self.show()

    def _setup(self):
        # self._setup_font()
        self.setWindowTitle("IG Follower Checker")
        central_widget = QWidget(self)
        # self.setFixedSize(400, 200)
        self.setCentralWidget(central_widget)
        self.grid_layout = QGridLayout(central_widget)
        self._add_title()
        self._add_followers_label()
        self._add_following_label()
        self._add_followers_button()
        self._add_following_button()

    def _add_title(self):
        title = QLabel("IG Follower Checker")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat', 22)
        font.setBold(True)
        title.setFont(font)
        self.grid_layout.addWidget(title, 0, 0, 1, 2)

    def _add_followers_label(self):
        label = QLabel("Upload followers.json")
        label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat')
        label.setFont(font)
        self.grid_layout.addWidget(label, 1, 0)

    def _add_following_label(self):
        label = QLabel("Upload following.json")
        label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat')
        label.setFont(font)
        self.grid_layout.addWidget(label, 1, 1)

    def _add_followers_button(self):
        button = QPushButton("Choose File")
        self.grid_layout.addWidget(button, 2, 0)

    def _add_following_button(self):
        button = QPushButton("Choose File")
        self.grid_layout.addWidget(button, 2, 1)

    # def _setup_font(self):
    #     ig_bold_id = QFontDatabase.addApplicationFont("Instagram Sans Bold.ttf")
    #     ig_bold_fam = QFontDatabase.applicationFontFamilies(ig_bold_id)[0]
    #     ig_bold = QFont(ig_bold_fam)
    #     QFontDatabase.addApplicationFont("Montserrat-Regular.ttf")
    #     montserrat_id = QFontDatabase.addApplicationFont("Montserrat-Regular.ttf")
    #     montserrat_fam = QFontDatabase.applicationFontFamilies(montserrat_id)[0]
    #     montserrat = QFont(montserrat_fam)


def show():
    app = QApplication(sys.argv)
    qdarktheme.setup_theme()
    window = IGWindow()
    app.exec()
