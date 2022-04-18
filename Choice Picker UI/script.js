const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value)
})

function createTags(outhere){
    const tags = outhere.split(',')

}