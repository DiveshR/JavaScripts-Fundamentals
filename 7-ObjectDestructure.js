//Object Destructing
const programmingLanguage = {
    'language' : 'JavaScript',
    'courseBy' : 'Divesh',
    'type': 'Full Course'
}

//Instead of
console.log(programmingLanguage.language)

//use --object Destructing

const {language} = programmingLanguage
console.log(language)