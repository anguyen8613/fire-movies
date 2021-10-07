"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\anser\\Desktop\\development\\app1\\mega-movies\\components\\Card.js";

const Card = ({
  thumbnail
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    className: "card",
    src: thumbnail.url,
    alt: thumbnail.title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Image */ "next/Image");
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_fire_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/fire-logo.jpg */ "./public/fire-logo.jpg");

var _jsxFileName = "C:\\Users\\anser\\Desktop\\development\\app1\\mega-movies\\components\\NavBar.js";




const NavBar = ({
  account
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "navbar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "logo-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_fire_logo_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
          alt: "Disney Logo",
          width: 90,
          height: 50
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 32
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "account-info",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Welcome ", account.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "avatar",
        src: account.avatar.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");

var _jsxFileName = "C:\\Users\\anser\\Desktop\\development\\app1\\mega-movies\\components\\Section.js";


const Section = ({
  genre,
  videos
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "section",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: genre
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: videos.map(video => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: `/video/${video.slug}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
          thumbnail: video.thumbnail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Image */ "next/Image");
/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _public_disney_button_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/disney-button.png */ "./public/disney-button.png");
/* harmony import */ var _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/marvel-button.png */ "./public/marvel-button.png");
/* harmony import */ var _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/natgeo-button.png */ "./public/natgeo-button.png");
/* harmony import */ var _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/star-wars-button.png */ "./public/star-wars-button.png");
/* harmony import */ var _public_pixar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/pixar.png */ "./public/pixar.png");


var _jsxFileName = "C:\\Users\\anser\\Desktop\\development\\app1\\mega-movies\\pages\\index.js";










const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    }
  });
  const videosQuery = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query {
      videos {
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        tags,
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `;
  const accountQuery = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    query {
    account(where: { id: "ckug6vrw8kbkf0b27bvw0pm5e"}) {
      username
      avatar {
        url
      }
    }
  }
  `;
  const data = await graphQLClient.request(videosQuery);
  const videos = data.videos;
  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;
  return {
    props: {
      videos,
      account
    }
  };
};

const Home = ({
  videos,
  account
}) => {
  const randomVideo = videos => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const filterVideos = (videos, genre) => {
    return videos.filter(video => video.tags.includes(genre));
  };

  const unSeenVideos = videos => {
    return videos.filter(video => video.seen == false || video.seen == null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__.default, {
      account: account
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "app",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "main-video",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: randomVideo(videos).thumbnail.url,
          alt: randomVideo(videos).title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "video-feed",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#disney",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "disney",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_disney_button_png__WEBPACK_IMPORTED_MODULE_6__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#pixar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "pixar",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_pixar_png__WEBPACK_IMPORTED_MODULE_10__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#star-wars",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "star-wars",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_star_wars_button_png__WEBPACK_IMPORTED_MODULE_9__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#nat-geo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "nat-geo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_natgeo_button_png__WEBPACK_IMPORTED_MODULE_8__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "#marvel",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "franchise",
            id: "marvel",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: _public_marvel_button_png__WEBPACK_IMPORTED_MODULE_7__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Recommended for you',
        videos: unSeenVideos(videos)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Family',
        videos: filterVideos(videos, 'family')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Thriller',
        videos: filterVideos(videos, 'thriller')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        genre: 'Classic',
        videos: filterVideos(videos, 'classic')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "pixar",
        genre: 'Pixar',
        videos: filterVideos(videos, 'pixar')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "marvel",
        genre: 'Marvel',
        videos: filterVideos(videos, 'marvel')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "nat-geo",
        genre: 'National Geographic',
        videos: filterVideos(videos, 'national-geographic')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "disney",
        genre: 'Disney',
        videos: filterVideos(videos, 'disney')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Section__WEBPACK_IMPORTED_MODULE_4__.default, {
        id: "star-wars",
        genre: 'Star Wars',
        videos: filterVideos(videos, 'star-wars')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./public/disney-button.png":
/*!**********************************!*\
  !*** ./public/disney-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/disney-button.bc19a795e61a418413a024cd9767f0ed.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdisney-button.bc19a795e61a418413a024cd9767f0ed.png&w=8&q=70"});

/***/ }),

/***/ "./public/fire-logo.jpg":
/*!******************************!*\
  !*** ./public/fire-logo.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/fire-logo.6877a300aadc8dd64ad0309762c62711.jpg","height":1080,"width":1080,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Ffire-logo.6877a300aadc8dd64ad0309762c62711.jpg&w=8&q=70"});

/***/ }),

/***/ "./public/marvel-button.png":
/*!**********************************!*\
  !*** ./public/marvel-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/marvel-button.f2159ecf9fdb61e750754ce5a3e460b7.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmarvel-button.f2159ecf9fdb61e750754ce5a3e460b7.png&w=8&q=70"});

/***/ }),

/***/ "./public/natgeo-button.png":
/*!**********************************!*\
  !*** ./public/natgeo-button.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/natgeo-button.f92899572d42ba111727f9021d88e0ba.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fnatgeo-button.f92899572d42ba111727f9021d88e0ba.png&w=8&q=70"});

/***/ }),

/***/ "./public/pixar.png":
/*!**************************!*\
  !*** ./public/pixar.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/pixar.7e1aa55f59dca864204b6cf83757a4b4.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fpixar.7e1aa55f59dca864204b6cf83757a4b4.png&w=8&q=70"});

/***/ }),

/***/ "./public/star-wars-button.png":
/*!*************************************!*\
  !*** ./public/star-wars-button.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/star-wars-button.92957ee48a32d4683647e02c06230b6b.png","height":720,"width":1280,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fstar-wars-button.92957ee48a32d4683647e02c06230b6b.png&w=8&q=70"});

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "next/Image":
/*!*****************************!*\
  !*** external "next/Image" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/Image");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREo7QUFtREgsQ0FuRUQ7O0FBcUVBLGlFQUFleUIsSUFBZjs7Ozs7Ozs7Ozs7Ozs7QUNySUEsaUVBQWUsQ0FBQyxrUEFBa1A7Ozs7Ozs7Ozs7Ozs7O0FDQWxRLGlFQUFlLENBQUMsMk9BQTJPOzs7Ozs7Ozs7Ozs7OztBQ0EzUCxpRUFBZSxDQUFDLGtQQUFrUDs7Ozs7Ozs7Ozs7Ozs7QUNBbFEsaUVBQWUsQ0FBQyxrUEFBa1A7Ozs7Ozs7Ozs7Ozs7O0FDQWxRLGlFQUFlLENBQUMsa09BQWtPOzs7Ozs7Ozs7Ozs7OztBQ0FsUCxpRUFBZSxDQUFDLHdQQUF3UDs7Ozs7Ozs7OztBQ0F4UTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZ2EtbW92aWVzLy4vY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lZ2EtbW92aWVzLy4vY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vbWVnYS1tb3ZpZXMvLi9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVnYS1tb3ZpZXMvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWdhLW1vdmllcy8uL3B1YmxpYy9kaXNuZXktYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly9tZWdhLW1vdmllcy8uL3B1YmxpYy9maXJlLWxvZ28uanBnIiwid2VicGFjazovL21lZ2EtbW92aWVzLy4vcHVibGljL21hcnZlbC1idXR0b24ucG5nIiwid2VicGFjazovL21lZ2EtbW92aWVzLy4vcHVibGljL25hdGdlby1idXR0b24ucG5nIiwid2VicGFjazovL21lZ2EtbW92aWVzLy4vcHVibGljL3BpeGFyLnBuZyIsIndlYnBhY2s6Ly9tZWdhLW1vdmllcy8uL3B1YmxpYy9zdGFyLXdhcnMtYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly9tZWdhLW1vdmllcy9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovL21lZ2EtbW92aWVzL2V4dGVybmFsIFwibmV4dC9JbWFnZVwiIiwid2VicGFjazovL21lZ2EtbW92aWVzL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vbWVnYS1tb3ZpZXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDYXJkID0gKHsgdGh1bWJuYWlsIH0pID0+IHtcbiAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJjYXJkXCIgc3JjPXt0aHVtYm5haWwudXJsfSBhbHQ9e3RodW1ibmFpbC50aXRsZX0vPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvSW1hZ2UnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvZmlyZS1sb2dvLmpwZydcblxuY29uc3QgTmF2QmFyID0gKHthY2NvdW50fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PEltYWdlIHNyYz17bG9nb30gYWx0PVwiRGlzbmV5IExvZ29cIiB3aWR0aD17OTB9IGhlaWdodD17NTB9Lz48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWluZm9cIj5cbiAgICAgICAgICAgICAgICA8cD5XZWxjb21lIHthY2NvdW50LnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17YWNjb3VudC5hdmF0YXIudXJsfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXG5cbmNvbnN0IFNlY3Rpb24gPSAoe2dlbnJlLCB2aWRlb3MgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPGgzPntnZW5yZX08L2gzPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dmlkZW9zLm1hcCh2aWRlbyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGtleT17dmlkZW8uaWR9IGhyZWY9e2AvdmlkZW8vJHt2aWRlby5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgdGh1bWJuYWlsPXt2aWRlby50aHVtYm5haWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbiIsImltcG9ydCB7Z3FsLCBHcmFwaFFMQ2xpZW50fSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb25cIlxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIlxuaW1wb3J0IGRpc25leUxvZ28gZnJvbSAnLi4vcHVibGljL2Rpc25leS1idXR0b24ucG5nJ1xuaW1wb3J0IG1hcnZlbExvZ28gZnJvbSAnLi4vcHVibGljL21hcnZlbC1idXR0b24ucG5nJ1xuaW1wb3J0IG5hdGdlb0xvZ28gZnJvbSAnLi4vcHVibGljL25hdGdlby1idXR0b24ucG5nJ1xuaW1wb3J0IHN0YXJ3YXJzTG9nbyBmcm9tICcuLi9wdWJsaWMvc3Rhci13YXJzLWJ1dHRvbi5wbmcnXG5pbXBvcnQgcGl4YXJMb2dvIGZyb20gJy4uL3B1YmxpYy9waXhhci5wbmcnXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5FTkRQT0lOVFxuICAgIGNvbnN0IGdyYXBoUUxDbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HUkFQSF9DTVNfVE9LRU59YFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHZpZGVvc1F1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHZpZGVvcyB7XG4gICAgICAgIGNyZWF0ZWRBdCxcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgc2VlbixcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgdGFncyxcbiAgICAgICAgdGh1bWJuYWlsIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfSxcbiAgICAgICAgbXA0IHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gICAgY29uc3QgYWNjb3VudFF1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICBhY2NvdW50KHdoZXJlOiB7IGlkOiBcImNrdWc2dnJ3OGtia2YwYjI3YnZ3MHBtNWVcIn0pIHtcbiAgICAgIHVzZXJuYW1lXG4gICAgICBhdmF0YXIge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYFxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdCh2aWRlb3NRdWVyeSlcbiAgICBjb25zdCB2aWRlb3MgPSBkYXRhLnZpZGVvc1xuICAgIGNvbnN0IGFjY291bnREYXRhID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KGFjY291bnRRdWVyeSlcbiAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudERhdGEuYWNjb3VudFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGFjY291bnRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jb25zdCBIb21lID0gKHt2aWRlb3MsIGFjY291bnR9KSA9PiB7XG5cblxuICAgIGNvbnN0IHJhbmRvbVZpZGVvID0gKHZpZGVvcykgPT4ge1xuICAgICAgICByZXR1cm4gdmlkZW9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZpZGVvcy5sZW5ndGgpXVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlclZpZGVvcyA9ICh2aWRlb3MsIGdlbnJlKSA9PiB7XG4gICAgICAgIHJldHVybiB2aWRlb3MuZmlsdGVyKCh2aWRlbykgPT4gdmlkZW8udGFncy5pbmNsdWRlcyhnZW5yZSkpXG4gICAgfVxuXG4gICAgY29uc3QgdW5TZWVuVmlkZW9zID0gKHZpZGVvcykgPT4ge1xuICAgICAgICByZXR1cm4gdmlkZW9zLmZpbHRlcih2aWRlbyA9PiB2aWRlby5zZWVuID09IGZhbHNlIHx8IHZpZGVvLnNlZW4gPT0gbnVsbClcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2QmFyIGFjY291bnQ9e2FjY291bnR9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXZpZGVvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyYW5kb21WaWRlbyh2aWRlb3MpLnRodW1ibmFpbC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyYW5kb21WaWRlbyh2aWRlb3MpLnRpdGxlfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZlZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNkaXNuZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJkaXNuZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkaXNuZXlMb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI3BpeGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyYW5jaGlzZVwiIGlkPVwicGl4YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwaXhhckxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjc3Rhci13YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyYW5jaGlzZVwiIGlkPVwic3Rhci13YXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c3RhcndhcnNMb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI25hdC1nZW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJuYXQtZ2VvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17bmF0Z2VvTG9nb30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNtYXJ2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbmNoaXNlXCIgaWQ9XCJtYXJ2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXttYXJ2ZWxMb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGdlbnJlPXsnUmVjb21tZW5kZWQgZm9yIHlvdSd9IHZpZGVvcz17dW5TZWVuVmlkZW9zKHZpZGVvcyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBnZW5yZT17J0ZhbWlseSd9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ2ZhbWlseScpfS8+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb24gZ2VucmU9eydUaHJpbGxlcid9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ3RocmlsbGVyJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBnZW5yZT17J0NsYXNzaWMnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdjbGFzc2ljJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cInBpeGFyXCIgZ2VucmU9eydQaXhhcid9IHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ3BpeGFyJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cIm1hcnZlbFwiIGdlbnJlPXsnTWFydmVsJ30gdmlkZW9zPXtmaWx0ZXJWaWRlb3ModmlkZW9zLCAnbWFydmVsJyl9Lz5cbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBpZD1cIm5hdC1nZW9cIiBnZW5yZT17J05hdGlvbmFsIEdlb2dyYXBoaWMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvcz17ZmlsdGVyVmlkZW9zKHZpZGVvcywgJ25hdGlvbmFsLWdlb2dyYXBoaWMnKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGlkPVwiZGlzbmV5XCIgZ2VucmU9eydEaXNuZXknfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdkaXNuZXknKX0vPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGlkPVwic3Rhci13YXJzXCIgZ2VucmU9eydTdGFyIFdhcnMnfSB2aWRlb3M9e2ZpbHRlclZpZGVvcyh2aWRlb3MsICdzdGFyLXdhcnMnKX0vPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuXG5cblxuXG5cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9kaXNuZXktYnV0dG9uLmJjMTlhNzk1ZTYxYTQxODQxM2EwMjRjZDk3NjdmMGVkLnBuZ1wiLFwiaGVpZ2h0XCI6NzIwLFwid2lkdGhcIjoxMjgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmRpc25leS1idXR0b24uYmMxOWE3OTVlNjFhNDE4NDEzYTAyNGNkOTc2N2YwZWQucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvZmlyZS1sb2dvLjY4NzdhMzAwYWFkYzhkZDY0YWQwMzA5NzYyYzYyNzExLmpwZ1wiLFwiaGVpZ2h0XCI6MTA4MCxcIndpZHRoXCI6MTA4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZmaXJlLWxvZ28uNjg3N2EzMDBhYWRjOGRkNjRhZDAzMDk3NjJjNjI3MTEuanBnJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvbWFydmVsLWJ1dHRvbi5mMjE1OWVjZjlmZGI2MWU3NTA3NTRjZTVhM2U0NjBiNy5wbmdcIixcImhlaWdodFwiOjcyMCxcIndpZHRoXCI6MTI4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZtYXJ2ZWwtYnV0dG9uLmYyMTU5ZWNmOWZkYjYxZTc1MDc1NGNlNWEzZTQ2MGI3LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL25hdGdlby1idXR0b24uZjkyODk5NTcyZDQyYmExMTE3MjdmOTAyMWQ4OGUwYmEucG5nXCIsXCJoZWlnaHRcIjo3MjAsXCJ3aWR0aFwiOjEyODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGbmF0Z2VvLWJ1dHRvbi5mOTI4OTk1NzJkNDJiYTExMTcyN2Y5MDIxZDg4ZTBiYS5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9waXhhci43ZTFhYTU1ZjU5ZGNhODY0MjA0YjZjZjgzNzU3YTRiNC5wbmdcIixcImhlaWdodFwiOjcyMCxcIndpZHRoXCI6MTI4MCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZwdWJsaWMlMkZwaXhhci43ZTFhYTU1ZjU5ZGNhODY0MjA0YjZjZjgzNzU3YTRiNC5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9zdGFyLXdhcnMtYnV0dG9uLjkyOTU3ZWU0OGEzMmQ0NjgzNjQ3ZTAyYzA2MjMwYjZiLnBuZ1wiLFwiaGVpZ2h0XCI6NzIwLFwid2lkdGhcIjoxMjgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRnN0YXItd2Fycy1idXR0b24uOTI5NTdlZTQ4YTMyZDQ2ODM2NDdlMDJjMDYyMzBiNmIucG5nJnc9OCZxPTcwXCJ9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkNhcmQiLCJ0aHVtYm5haWwiLCJ1cmwiLCJ0aXRsZSIsIkxpbmsiLCJJbWFnZSIsImxvZ28iLCJOYXZCYXIiLCJhY2NvdW50IiwidXNlcm5hbWUiLCJhdmF0YXIiLCJTZWN0aW9uIiwiZ2VucmUiLCJ2aWRlb3MiLCJtYXAiLCJ2aWRlbyIsInNsdWciLCJpZCIsImdxbCIsIkdyYXBoUUxDbGllbnQiLCJkaXNuZXlMb2dvIiwibWFydmVsTG9nbyIsIm5hdGdlb0xvZ28iLCJzdGFyd2Fyc0xvZ28iLCJwaXhhckxvZ28iLCJnZXRTdGF0aWNQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJFTkRQT0lOVCIsImdyYXBoUUxDbGllbnQiLCJoZWFkZXJzIiwiR1JBUEhfQ01TX1RPS0VOIiwidmlkZW9zUXVlcnkiLCJhY2NvdW50UXVlcnkiLCJkYXRhIiwicmVxdWVzdCIsImFjY291bnREYXRhIiwicHJvcHMiLCJIb21lIiwicmFuZG9tVmlkZW8iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJmaWx0ZXJWaWRlb3MiLCJmaWx0ZXIiLCJ0YWdzIiwiaW5jbHVkZXMiLCJ1blNlZW5WaWRlb3MiLCJzZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==