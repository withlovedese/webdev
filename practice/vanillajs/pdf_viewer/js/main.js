const url = "./docs/pdf.pdf";
let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');


//Render the page
const renderPage = num => {
    pageIsRendering = true;


    //get the page
    pdfDoc.getPage(num).then(page =>{
        //console.log(page);
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending !== null){
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });

        //output current pag
        document.querySelector('#page-num').textContent = num;

    });

};

//check for pages rendering
const queueRenderPage = (num) => {
    if(pageIsRendering){
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
}

//show previous page
const showPreviousPage = () => {
    if (pageNum <= 1){
        return;
    }

    pageNum--;
    queueRenderPage(pageNum);
}

//show next page
const showNextPage = () => {
    if (pageNum >= pdfDoc.numPages){
        return;
    }

    pageNum++;
    queueRenderPage(pageNum);
}

//Get Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    //console.log(pdfDoc);
    pdfDoc = pdfDoc_;
    //console.log(pdfDoc);

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);

}).catch( err => {
    //display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);

    //remove top-bar
    document.querySelector('.top-bar').style.display = 'none';
    document.querySelector('.canv').style.display = 'none';
});

//button events

document.getElementById('prev-page').addEventListener('click', showPreviousPage);
document.getElementById('next-page').addEventListener('click', showNextPage);