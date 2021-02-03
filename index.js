import Migration from './src/index.js'
import inquirer from 'inquirer'

const questions = [
  {
    type: 'input',
    name: 'oauth',
    message: "Please enter your OAUTH Token",
  },
  {
    type: 'input',
    name: 'source_space_id',
    message: "Please enter the Source Space Id",
  },
  {
    type: 'input',
    name: 'target_space_id',
    message: "Please enter the Target Space Id",
  },
  {
    type: 'input',
    name: 'simultaneous_uploads',
    message: "Simultaneous Uploads",
    default: 20
  },
]

inquirer.prompt(questions).then((answers) => {
  const migration = new Migration(answers.oauth, answers.source_space_id, answers.target_space_id, answers.simultaneous_uploads)
  migration.start()
})
