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

 async function retrieveDashboardVideos() {
    const dashboardList = await xvideos.videos.dashboard({ page: 2 });
    console.log(dashboardList.videos); // { url, path, title, duration, profile: { name, url }, views, }
    console.log(dashboardList.pagination.current); // 1 
    console.log(dashboardList.pagination.pages); // [1, 2, 3, 4, 5...]
    console.log(dashboardList.hasNext()); // true
    console.log(dashboardList.hasPrevious()); // false
    
    const nextPage = await dashboardList.next();
    console.log(nextPage.pagination.current); // 2
    console.log(nextPage.hasNext()); // true
    console.log(nextPage.hasPrevious()); // true
    
    if (dashboardList.hasPrevious()) {
     const previousPage = await dashboardList.previous();
     console.log(previousPage.pagination.current); // 1
     console.log(previousPage.hasNext()); // true
     console.log(previousPage.hasPrevious()); // tfalse
    }
    
    
    const detail = await xvideos.videos.details(dashboardList.videos[0]); 
    console.log('----' + JSON.stringify(dashboardList.videos[0]));
    console.log('----' + JSON.stringify(detail));
 }

 async function retrieveBestVideos() {
    const bestList = await xvideos.videos.best({ year: '2019', month: '05', page: 5 });
    console.log(bestList.videos); // { url, path, title, duration, profile: { name, url }, views, }
    console.log(bestList.pagination.current); // 1 
    console.log(bestList.pagination.pages); // [1, 2, 3, 4, 5...]
    console.log(bestList.hasNext()); // true
    console.log(bestList.hasPrevious()); // false
    
    const nextPage = await bestList.next();
    console.log(nextPage.pagination.current); // 2
    console.log(nextPage.hasNext()); // true
    console.log(nextPage.hasPrevious()); // true
    
    if (bestList.hasPrevious()) {
     const previousPage = await bestList.previous();
     console.log(previousPage.pagination.current); // 1
     console.log(previousPage.hasNext()); // true
     console.log(previousPage.hasPrevious()); // tfalse
    }
    
    
    const detail = await xvideos.videos.details(bestList.videos[0]); 
    console.log('----' + JSON.stringify(bestList.videos[0]));
    console.log('----' + JSON.stringify(detail));
 }

 async function retrieveVerifiedVideos() {
    const verifiedList = await xvideos.videos.verified({ page: 2 });
    console.log(verifiedList.videos); // { url, path, title, duration, profile: { name, url }, views, }
    console.log(verifiedList.pagination.current); // 1 
    console.log(verifiedList.pagination.pages); // [1, 2, 3, 4, 5...]
    console.log(verifiedList.hasNext()); // true
    console.log(verifiedList.hasPrevious()); // false
    
    const nextPage = await verifiedList.next();
    console.log(nextPage.pagination.current); // 2
    console.log(nextPage.hasNext()); // true
    console.log(nextPage.hasPrevious()); // true
    
    if (verifiedList.hasPrevious()) {
     const previousPage = await verifiedList.previous();
     console.log(previousPage.pagination.current); // 1
     console.log(previousPage.hasNext()); // true
     console.log(previousPage.hasPrevious()); // tfalse
    }
    
    
    const detail = await xvideos.videos.details(verifiedList.videos[0]); 
    console.log('----' + JSON.stringify(verifiedList.videos[0]));
    console.log('----' + JSON.stringify(detail));
 }
 
retrieveFreshVideos();
retrieveDashboardVideos();
retrieveBestVideos();
retrieveVerifiedVideos();