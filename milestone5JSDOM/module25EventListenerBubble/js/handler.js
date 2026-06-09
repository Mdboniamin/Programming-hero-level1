console.log('handler file added');
document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        // console.log('Button clicked');
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Title updated';
    });