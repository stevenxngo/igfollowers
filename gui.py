import json
import sys, os
from pathlib import Path
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
        self._create_title()
        self._create_followers_label()
        self._create_following_label()
        self._create_followers_button()
        self._create_following_button()
        self._create_display()

    def _create_title(self):
        self.title = QLabel("IG Follower Checker")
        self.title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat', 22)
        font.setBold(True)
        self.title.setFont(font)
        self.grid_layout.addWidget(self.title, 0, 0, 1, 2)

    def _create_followers_label(self):
        self.followers_label = QLabel("Upload followers.json")
        self.followers_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat')
        self.followers_label.setFont(font)
        self.grid_layout.addWidget(self.followers_label, 1, 0)

    def _create_following_label(self):
        self.following_label = QLabel("Upload following.json")
        self.following_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat')
        self.following_label.setFont(font)
        self.grid_layout.addWidget(self.following_label, 1, 1)

    def _create_file_dialog(self):
        home_dir = str(Path.home())
        fname = QFileDialog.getOpenFileName(self, caption="Select a File", directory=home_dir, filter="JSON (*.json)")
        if fname[0]:
            f = open(fname[0], 'r')
            with f:
                data = json.load(f)
                print(data)

    def _create_followers_button(self):
        self.followers_button = QPushButton("Choose File")
        self.followers_button.clicked.connect(self._create_file_dialog)
        self.grid_layout.addWidget(self.followers_button, 2, 0)

    def _create_following_button(self):
        self.following_button = QPushButton("Choose File")
        self.grid_layout.addWidget(self.following_button, 2, 1)

    def _create_display(self):
        self.text_edit = QTextEdit()
        self.text_edit.setReadOnly(True)
        self.text_edit.setVerticalScrollBarPolicy(Qt.ScrollBarPolicy.ScrollBarAsNeeded)
        self.grid_layout.addWidget(self.text_edit, 3, 0, 1, 2)


def show():
    app = QApplication(sys.argv)
    qdarktheme.setup_theme()
    window = IGWindow()
    app.exec()
