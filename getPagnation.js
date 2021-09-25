function getPagination(offset, limit, total) {
    // Set page 1 as firstPage and calc
    let firstPage = 1;
    let currentPage = (offset - offset % limit) / limit + firstPage;
    let totalPage = (total - total % limit) / limit + firstPage;
    let nowPage = currentPage;
    let lastPage = totalPage;
    let renderPages = [];
    let startRenderPage;
    // Calc renderPages for 5 pages
    for (let i = 0; i < 5; i++) {
        if (currentPage - firstPage <= 2) {
            renderPages.push(firstPage);
            firstPage++;
        } else if (totalPage - currentPage <= 2) {
            renderPages.push(lastPage);
            lastPage--;
        } else {
            startRenderPage = nowPage - 2;
            renderPages.push(startRenderPage);
            nowPage++;
        }
    }
    renderPages.sort(function (a, b) { return a - b });
    console.log("currentPage: " + currentPage + ", totalPage: " + totalPage + ", renderPages:" + renderPages);
}

//const { currentPage, totalPage, renderPages } = getPagination(offset, limit, total)
getPagination(0, 5, 33) // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(5, 5, 33) // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(10, 5, 33) // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(15, 5, 33) // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }
getPagination(20, 5, 33) // { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }
getPagination(25, 5, 33) // { currentPage: 6, totalPage: 7, renderPages: [3,4,5,6,7] }
getPagination(30, 5, 33) // { currentPage: 7, totalPage: 7, renderPages: [3,4,5,6,7] }