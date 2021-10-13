// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const axios = require("axios");
const fs = require("fs");
var generateMarkdown = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "confirm",
        message: "Welcome to @DerekBanister's README Generator. Would you like to create a README.md file?",
        name: "create"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the name of your GitHub repository?",
        name: "repo",
    },
    {
        type: "input",
        message: "Write a short description of what your project does",
        name: "description"
    },
    {
        type: "input",
        message: "What steps are needed to install your project?",
        name: "install",
        default: "none"
    },
    {
        type: "input",
        message: "Write instructions for how to use your project",
        name: "use",
        default: "none"
    },
    {
        type: "input",
        message: "Enter the names of any contributors that helped with your project",
        name: "contribute",
        default: "none",
    },
    {
        type: "input",
        message: "Provide examples for testing of this application",
        name: "test"
    },
    {
        //https://choosealicense.com/
        //https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
        type: "list",
        message: "Which license would you like to use?",
        choices: ["MIT", "Apache 2.0", "Mozilla Public 2.0", "GNU GPLv3"],
        name: "license"
    }

];
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        //answers logging, questions showing correctly, default's are weird though.
        //need to use axios to get github username, then response for profile image.
        //next is writefile.
        axios
        .get("https://api.github.com/users/" + answers.username)
        .then(response => {
            //console.log(response);
            //will put avatar in README
            var imageURL = response.data.avatar_url;
            answers.image = imageURL;
            console.log(imageURL)
            // TODO: Create a function to write README file
            fs.writeFile("README.md", generateMarkdown(answers), (err) =>
            err ? console.error(err) : console.log('Success!')
      
          );
        })
    })
}
// Function call to initialize app
init();



//response from axios call
// data: {
//     login: 'DerekBanister',
//     id: 89547994,
//     node_id: 'MDQ6VXNlcjg5NTQ3OTk0',
//     avatar_url: 'https://avatars.githubusercontent.com/u/89547994?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/DerekBanister',
//     html_url: 'https://github.com/DerekBanister',
//     followers_url: 'https://api.github.com/users/DerekBanister/followers',
//     following_url: 'https://api.github.com/users/DerekBanister/following{/other_user}',
//     gists_url: 'https://api.github.com/users/DerekBanister/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/DerekBanister/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/DerekBanister/subscriptions',
//     organizations_url: 'https://api.github.com/users/DerekBanister/orgs',
//     repos_url: 'https://api.github.com/users/DerekBanister/repos',
//     events_url: 'https://api.github.com/users/DerekBanister/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/DerekBanister/received_events',
//     type: 'User',
//     site_admin: false,
//     name: 'Derek Banister',
//     company: null,
//     blog: 'https://derekbanister.github.io/portfolio-two/',
//     location: 'Bay Area, CA',
//     email: null,
//     hireable: true,
//     bio: 'Aspiring full stack web developer currently studying at UC Berkeley Extension coding boot camp.',
//     twitter_username: null,
//     public_repos: 18,
//     public_gists: 0,
//     followers: 12,
//     following: 10,
//     created_at: '2021-08-25T19:53:55Z',
//     updated_at: '2021-10-12T04:15:48Z'
//   }


