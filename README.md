# Instagram Followers Checker Web App

This is a web that checks who you follow on Instagram that doesn't follow you back. It uses uploaded JSON data downloaded directly from Instagram. Built with React and Vite and deployed on GitHub Pages.

[Demo Video](https://youtu.be/Pu4-YcPZ9DE)

## Deployment

The web app is deployed on GitHub Pages. You can access it [here](https://stevenxngo.github.io/igfollowers/).

## Local Installation

1. Clone the repository.
2. Install the dependencies.
    ```bash
    npm install
    ```
3. Start the development server.
    ```bash
    npm run dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Usage

1. Go to [Instagram Data Download](https://www.instagram.com/download/request/) and follow [these steps](https://help.instagram.com/181231772500920/?cms_platform=www&helpref=platform_switcher) to download your Instagram data.
    * Select ***Some of your information*** and ***Followers and following*** for ***How much information do you want?***
    * Select ***Download to device*** for ***What do you want to do with your information?***
    * Select ***All time*** for ***Date range***
    * Select ***JSON*** for ***Format***
2. Wait for Instagram to send you an email with a link to download your data.
3. Download the data and extract the zip file.
4. Go to the `connections` folder and upload the `followers.json` and `following.json` file.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Contact

For questions, feedback, or inquiries about the project, feel free to reach out to me:

**Steven Ngo** - [steventxngo@gmail.com](mailto:steventxngo@gmail.com) - [GitHub](https://github.com/stevenxngo) - [LinkedIn](https://www.linkedin.com/in/stevenxngo/)
