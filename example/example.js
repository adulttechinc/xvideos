const xvideos = require('../lib/xvideos.js');
async function retrieveFreshVideos() {
    const fresh = await xvideos.videos.fresh({ page: 2 });
    console.log(fresh.videos); // { url, path, title, duration, profile: { name, url }, views, }
    console.log(fresh.pagination.current); // 1 
    console.log(fresh.pagination.pages); // [1, 2, 3, 4, 5...]
    console.log(fresh.hasNext()); // true
    console.log(fresh.hasPrevious()); // false
    
    const nextPage = await fresh.next();
    console.log(nextPage.pagination.current); // 2
    console.log(nextPage.hasNext()); // true
    console.log(nextPage.hasPrevious()); // true
    
    if (fresh.hasPrevious()) {
     const previousPage = await fresh.previous();
     console.log(previousPage.pagination.current); // 1
     console.log(previousPage.hasNext()); // true
     console.log(previousPage.hasPrevious()); // tfalse
    }
    
    
    const detail = await xvideos.videos.details(fresh.videos[0]); 
    console.log('----' + JSON.stringify(fresh.videos[0]));
    console.log('----' + JSON.stringify(detail));
 }
 
 retrieveFreshVideos();