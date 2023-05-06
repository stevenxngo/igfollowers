from pathlib import Path
from PyQt6.QtGui import QFont, QDesktopServices
from PyQt6.QtCore import Qt, QUrl
from PyQt6.QtWidgets import QMainWindow, QWidget, QGridLayout, QLabel, QPushButton, \
    QTextEdit, QFileDialog, QStatusBar
import qdarktheme


class IGView(QMainWindow):
    """View class for IGFollowers"""

    def __init__(self):
        """
        Initialize the GUI
        """
        super().__init__()
        qdarktheme.setup_theme("auto")
        central_widget = QWidget(self)
        self.setWindowTitle("IG Follower Checker")
        self.setCentralWidget(central_widget)
        self.grid_layout = QGridLayout(central_widget)
        self._create_title()
        self._create_followers_label()
        self._create_following_label()
        self._create_followers_button()
        self._create_following_button()
        self._create_compare_button()
        self._create_display()
        self._create_status_bar()
        self._create_status_label()
        self.setMinimumSize(500, 250)
        self.show()

    def _create_title(self):
        """
        Creates the title
        :return: (void)
        """
        self.title = QLabel("IG Follower Checker")
        self.title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat', 22)
        font.setBold(True)
        self.title.setFont(font)
        self.grid_layout.addWidget(self.title, 0, 0, 1, 2)

    def _create_followers_label(self):
        """
        Creates the follower label
        :return: (void)
        """
        self.followers_label = QLabel("Upload followers.json")
        self.followers_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat')
        self.followers_label.setFont(font)
        self.grid_layout.addWidget(self.followers_label, 1, 0)

    def _create_following_label(self):
        """
        Creates the following label
        :return: (void)
        """
        self.following_label = QLabel("Upload following.json")
        self.following_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        font = QFont('Montserrat')
        self.following_label.setFont(font)
        self.grid_layout.addWidget(self.following_label, 1, 1)

    def _create_followers_button(self):
        """
        Creates the followers button
        :return: (void)
        """
        self.followers_button = QPushButton("Choose File")
        self.grid_layout.addWidget(self.followers_button, 2, 0)

    def _create_following_button(self):
        """
        Creates the following button
        :return: (void)
        """
        self.following_button = QPushButton("Choose File")
        self.grid_layout.addWidget(self.following_button, 2, 1)

    def _create_compare_button(self):
        """
        Creates the compare button
        :return: (void)
        """
        self.compare_button = QPushButton("Compare")
        self.grid_layout.addWidget(self.compare_button, 4, 0, 1, 2)

    def _create_display(self):
        """
        Creates the text display
        :return: (void)
        """
        self.display = QTextEdit()
        self.display.setReadOnly(True)
        self.display.setVerticalScrollBarPolicy(Qt.ScrollBarPolicy.ScrollBarAsNeeded)
        self.grid_layout.addWidget(self.display, 6, 0, 1, 2)

    def open_file_dialog(self):
        """
        Opens the file dialog
        :return: (string) the file name
        """
        home_dir = str(Path.home())
        fname, _ = QFileDialog.getOpenFileName(self, caption="Select a File", directory=home_dir, filter="JSON (*.json)")
        return fname

    def set_display(self, text):
        """
        Sets the display text
        :param text: (string) the text to set
        :return:
        """
        self.display.setText(text)

    def clear_display(self):
        """
        Clears the status bar
        :return: (void)
        """
        self.display.setText("")

    def _create_status_bar(self):
        """
        Creates the status bar
        :return: (void)
        """
        self.status_bar = QStatusBar(self)
        self.setStatusBar(self.status_bar)

    def _create_status_label(self):
        """
        Creates the label for the status bar
        :return: (void)
        """
        self.status_label = QLabel()
        self.status_label.setTextFormat(Qt.TextFormat.RichText)
        self.status_label.setTextInteractionFlags(
            Qt.TextInteractionFlag.TextBrowserInteraction)
        self.status_bar.addWidget(self.status_label)

    def set_status_label(self, msg):
        """
        Sets the status bar text
        :param msg: (string) the message to set
        :return: (void)
        """
        self.status_label.setText(msg)
        self.status_label.setStyleSheet("QLabel:hover { background-color: transparent; }")
        self.status_label.linkActivated.connect(lambda url: QDesktopServices.openUrl(QUrl(url)))

    def clear_status_label(self):
        """
        Clears the status label
        :return: (void)
        """
        self.status_label.setText("")
