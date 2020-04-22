const fs = require('fs-extra')
const path = require('path')
const rootPackageJson = require('../package.json')

const files = [
  'cli.js',
  'electron.d.ts',
  'index.js',
  'install.js',
  'package.json',
  'README.md',
  'LICENSE'
]
  
const jsonFields = [
  'name',
  'version',
  'repository',
  'description',
  'license',
  'author',
  'keywords'
]

// Assumes the current working directory is the root electron folder.

let dir = path.join('.', 'out', 'npm-package')

if(fs.existsSync(dir)) {
    fs.removeSync(dir)
}
fs.mkdirSync(dir)

// copy files from `/npm` to dir
files.forEach((name) => {
  const noThirdSegment = name === 'README.md' || name === 'LICENSE' || name === 'electron.d.ts';
  fs.writeFileSync(
    path.join(dir, name),
    fs.readFileSync(path.join(__dirname, '..', noThirdSegment ? '' : 'npm', name))
  )
})

// copy from root package.json to dir/package.json
const packageJson = require(path.join(process.cwd(), dir, 'package.json'))
jsonFields.forEach((fieldName) => {
  packageJson[fieldName] = rootPackageJson[fieldName]
})
fs.writeFileSync(
  path.join(dir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
)

// // copy the dist folder
// let dirDist = path.join(dir, 'dist')
// if(fs.existsSync(dirDist)) {
//   fs.removeSync(dirDist)
// }
// fs.mkdirSync(dirDist)
// fs.copySync('./../out/Testing/dist/', dirDist)