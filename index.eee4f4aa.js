!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},c=e.parcelRequired7c6;null==c&&((c=function(n){if(n in t)return t[n].exports;if(n in a){var e=a[n];delete a[n];var c={id:n,exports:{}};return t[n]=c,e.call(c.exports,c,c.exports),c.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){a[n]=e},e.parcelRequired7c6=c),c("iE7OH").register(JSON.parse('{"EVgbq":"index.eee4f4aa.js","bShzc":"image-not-found.858a953b.jpg","4AfZn":"image-not-found.5a77757e.webp","1XaNB":"catalogue.c4f7b7c7.css","e4RIS":"library.9e0e0e23.js"}')),c("i8Q71"),c("cs7FV"),c("gVa74");var i=c("bpxeT"),r=c("2TvXO"),o=c("iM4cy"),s=c("2xcQJ"),l=c("kHa4C"),u=(i=c("bpxeT"),r=c("2TvXO"),o=c("iM4cy"),c("4cCwH"));function d(n,e){var t=localStorage.getItem("library");return t&&JSON.parse(t).find((function(n){return n.id===e}))?'<button type="button" data-remove-from-library-btn-upcoming class="'.concat(n,'">Remove from library</button>'):'<button type="button" data-add-to-library-btn-upcoming class="'.concat(n,'">Add to library</button>')}var p;p=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("bShzc");var m;function g(e){var t=e.backdrop_path,a=e.title,c=e.genre_ids,i=e.overview,r=e.popularity,o=e.poster_path,s=e.release_date,l=e.vote_average,g=e.vote_count,b=e.id,v=(0,u.getGenresByGenresId)(c).join(", "),f=o||t?'<picture>\n      <source\n        srcset="https://image.tmdb.org/t/p/original/'.concat(t,'"\n        media="(min-width:1280px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(t,'"\n        media="(min-width:768px)"\n      />\n      <source\n        srcset="https://image.tmdb.org/t/p/original/').concat(o,'"\n        media="(min-width:320px)"\n      />\n      <img\n        class="upcoming-movie-img"\n        src="https://image.tmdb.org/t/p/original/').concat(o,'"\n        alt="').concat(a,'"\n      />\n    </picture>'):'<picture>\n        <source srcset="'.concat(n(m),'" type="image/webp" />\n        <source srcset="').concat(n(p),'" type="image/jpeg" />\n        <img\n          class="movie-details-img"\n          src="').concat(n(p),'"\n          alt="Image not found"\n        />\n      </picture>');return" \n    ".concat(f,'\n    <div class="upcoming-column">\n      <h2 class="upcoming-headline">').concat(a,'</h2>\n      <div class="upcoming-wrap">\n        <div class="upcoming-inner-wrap">\n          <div class="upcoming-wrapper upcoming-wrapper-gap">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-data">\n                <p class="upcoming-subject">Release date</p>\n              </li>\n              <li class="upcoming-item-data-num">\n                <p class="upcoming-date">').concat(s.split("-").reverse().join("."),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-vote">\n                <p class="upcoming-subject">Vote / Votes</p>\n              </li>\n              <li class="upcoming-item-vote-num">\n                <p class="upcoming-vote">\n                  <span class="upcoming-inner-box">').concat(l,'</span>\n                  <span class="upcoming-inner-color">/</span>\n                  <span class="upcoming-inner-box-votes">').concat(g,'</span>\n                </p>\n              </li>\n            </ul>\n          </div>\n          <div class="upcoming-wrapper">\n            <ul class="upcoming-list">\n              <li class="upcoming-item-pop">\n                <p class="upcoming-subject">Popularity</p>\n              </li>\n              <li class="upcoming-item-pop-num">\n                <p class="upcoming-famous">').concat(r.toFixed(1),'</p>\n              </li>\n            </ul>\n    \n            <ul class="upcoming-list">\n              <li class="upcoming-item-genre">\n                <p class="upcoming-subject">Genre</p>\n              </li>\n              <li class="upcoming-item-genre-num">\n                <p class="upcoming-janres">').concat(v,'</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n    \n        <h3 class="upcoming-caption">About</h3>\n        <p class="upcoming-description">\n          ').concat(i,'\n        </p>\n        <div class="library-btn-upcoming" data-library-btn-upcoming>\n          ').concat(d("btn btn-filled",b),"\n        </div>\n      </div>\n    </div>")}m=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("4AfZn");var b=c("gNR05");function v(n,e,t){(0,b.removeMovieFromLibrary)(t);var a=document.querySelector("[data-library-btn-upcoming]"),c=d(n,e);a.innerHTML=c,document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){y(n,e,t)}),{once:!0})}var f=c("kyEhf");function y(n,e,t){(0,f.addMovieToLibrary)(t);var a=document.querySelector("[data-library-btn-upcoming]"),c=d(n,e);a.innerHTML=c,document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){v(n,e,t)}),{once:!0})}function h(n,e,t,a){n?document.querySelector("[data-add-to-library-btn-upcoming]").addEventListener("click",(function(){y(e,t,a)}),{once:!0}):document.querySelector("[data-remove-from-library-btn-upcoming]").addEventListener("click",(function(){v(e,t,a)}),{once:!0})}var w=document.querySelector(".js-upcomming-cards"),S=document.querySelector(".js-upcomming-default");function x(){return(x=n(i)(n(r).mark((function e(){var t,a,c,i,s;return n(r).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchUpcomingThisMonth)();case 3:t=n.sent,a=t.results,c=a[Math.floor(Math.random()*a.length)],(i=document.querySelector("[data-upcoming]")).innerHTML=g(c),s=i.innerHTML.includes("Add to library"),"btn btn-filled",h(s,"btn btn-filled",c.id,c),n.next=22;break;case 13:if(n.prev=13,n.t0=n.catch(0),console.error(n.t0.message),w.classList.add("visually-hidden"),S.setAttribute("data-shown",!0),"true"!==H.getAttribute("data-shown")){n.next=21;break}return H.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 21:S.classList.remove("visually-hidden");case 22:case"end":return n.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){x.apply(this,arguments)}();var E=document.querySelector("[data-weekly-trends-list]"),k=document.querySelector(".js-weekly-trends-cards"),H=document.querySelector(".js-weekly-trends-default"),L=window.innerWidth<768?1:3;function _(){return(_=n(i)(n(r).mark((function e(){var t,a,c;return n(r).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.fetchWeekTrends)();case 3:t=n.sent,a=t.results.slice(0,L),c=(0,s.generateMovieCardsMarkup)(a),E.innerHTML=c,E.addEventListener("click",l.onMovieCardClick),n.next=19;break;case 10:if(n.prev=10,n.t0=n.catch(0),console.error(n.t0.message),k.classList.add("visually-hidden"),H.setAttribute("data-shown",!0),"true"!==S.getAttribute("data-shown")){n.next=18;break}return S.lastElementChild.textContent="We don’t have any results.",n.abrupt("return");case 18:H.classList.remove("visually-hidden");case 19:case"end":return n.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){_.apply(this,arguments)}(),c("7hKzD"),(0,c("9qBU4").setGenresToSS)(),document.querySelectorAll("[data-header-home]").forEach((function(n){return n.classList.add("js-current")}))}();
//# sourceMappingURL=index.eee4f4aa.js.map
