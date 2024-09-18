const breadcrumbs = document.querySelector(".breadcrumb-wrapper");
async function getBreadcrumbs() {
    fetch('./shared/breadcrumb.xml')
        .then(response => response.text())
        .then(data => {
            // console.log(data); // log the content of the file
            breadcrumbs.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

getBreadcrumbs();
