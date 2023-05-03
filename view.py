import json
import sys, os
from pathlib import Path
from PyQt6.QtGui import QFont, QFontDatabase
from PyQt6.QtCore import Qt, pyqtSignal
from PyQt6.QtWidgets import QSpacerItem, QSizePolicy, QMainWindow, QWidget, QGridLayout, QLabel, QPushButton, QTextEdit, \
    QFileDialog
import qdarktheme


class IGView(QMainWindow):
    followers_file = pyqtSignal(str)
    following_file = pyqtSignal(str)

    def __init__(self):
        super().__init__()
        self._setup()
        self.show()

    def _setup(self):
        self.setWindowTitle("IG Follower Checker")
        central_widget = QWidget(self)
        self.setCentralWidget(central_widget)
        self.grid_layout = QGridLayout(central_widget)
        self._create_title()
        self._create_followers_label()
        self._create_following_label()
        self._create_followers_button()
        self._create_following_button()
        self._create_compare_button()
        # self._create_log()
        self._create_display()
        qdarktheme.setup_theme("auto")

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

    def _create_followers_button(self):
        self.followers_button = QPushButton("Choose File")
        self.grid_layout.addWidget(self.followers_button, 2, 0)

    def _create_following_button(self):
        self.following_button = QPushButton("Choose File")
        self.grid_layout.addWidget(self.following_button, 2, 1)

    def _create_compare_button(self):
        self.compare_button = QPushButton("Compare")
        self.grid_layout.addWidget(self.compare_button, 4, 0, 1, 2)
        # self.compare_button.setStyleSheet("text-align: center;")
        # self.compare_button.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Preferred)
        # self.compare_button.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Fixed)
        # self.compare_button.setAlignment(Qt.AlignmentFlag.AlignCenter)
        # self.compare_button.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Expanding)

    def _create_log(self):
        self.log = QLabel()
        font = QFont('Roboto', 10)
        self.log.setFont(font)
        self.log.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.grid_layout.setRowMinimumHeight(5, 0)
        self.grid_layout.addWidget(self.log, 5, 0, 1, 2)

    def _create_display(self):
        self.display = QTextEdit()
        self.display.setReadOnly(True)
        self.display.setVerticalScrollBarPolicy(Qt.ScrollBarPolicy.ScrollBarAsNeeded)
        self.grid_layout.addWidget(self.display, 6, 0, 1, 2)

    def open_file_dialog(self):
        home_dir = str(Path.home())
        fname = QFileDialog.getOpenFileName(self, caption="Select a File", directory=home_dir, filter="JSON (*.json)")
        return fname

    def set_display(self, text):
        self.display.setText(text)

    def clear_display(self):
        self.display.setText("")
