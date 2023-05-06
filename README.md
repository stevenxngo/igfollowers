# IG Follower Checker

IG Follower Checker is a small personal project determines who on Instagram you follow that doesn't follow you back. It
comes with a GUI that makes it easy to upload your following and followers, and view the results.

## Setup

To set up the program, clone this repository and install required dependencies by running
`pip install -r requirements.txt`. Then run `python igfollowers.py` to launch the GUI.

## Usage

This project makes use of the data download feature that Instagram provides, specifically the following and follower
data. To access it, follow [these steps](https://help.instagram.com/181231772500920) on a computer and select JSON
format. Once downloaded, you will find _followers_1.json_ and _following.json_ (names of the files may differ) in the
_followers_and_following_ folder.

Once the program is launched, the following and follower files can be uploaded with the two buttons, which will each
open a file dialog. The status bar will display the file name that was uploaded (which can be pressed on to download it)
or and error if they occurred. To compare the followers, press the compare button, which will display the usernames of
accounts that you follow that aren't following you back.

## Features

* Intuitive GUI
* Easy upload of files through file dialogs
* Status bar for errors
* Clear display of usernames

## Privacy

The only data that is accessed is that of the following and followers, none of which is retained. No unauthorized
sensitive information is obtained.