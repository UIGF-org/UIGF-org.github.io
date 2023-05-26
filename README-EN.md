# UIGF-Org Website

[[简体中文]](./README.md) [English]

This is the repository of UIGF-org website. You can always view its live version at [https://uigf.org](https://uigf.org)

## How to Test Locally


### First Time Installation

- Install [NodeJS 18](https://nodejs.org/en/download/)
- Use [GitHub Desktop](https://desktop.github.com/) or Git command to clone this repository (`git clone`)
- Run `npm install` in the root directory of the project

### Local Test

- Run `npm run docs:dev` in the **root directory of the project**
  - The document will run at `http://localhost:8080` by default

## How to Add Your Project to Home Page

1. Clone the repository

2. In both `docs/en/` and `docs/zh/` folder, find `partnership-list.md`

3. In the correct area of standard, copy and following code and fill with your project information

   ```html
   <SiteInfo
   name=""
   desc=""
   logo=""
   url=""
   repo=""
   preview=""
   />
   ```

   - Field explanation 
     - **`Name`**: Name of your project
     - **`desc`**: Introduction of your project
     - **`logo`**: URL of your project logo/icon image
     - **`url`**: Home page URL of your project
     - **`repo`**: Repository URL of your project
     - **`preview`**: Screenshot or banner image URL of your project
   - You can create a folder with your project name in `docs/.vuepress/public/partnerships`, and upload your project-related image assets. If the asset you create is `docs/.vuepress/public/partnerships/sample-project/logo.png`, then its URL path can be written as `https://uigf.org/partnerships/sample-project/logo.png` or `/partnerships/sample-project/logo.png`

4. Save your change; make your Pull Request to the main breach

   - Please include one sample output Json file of your project in the PR comment area