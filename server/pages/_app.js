(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./public/icons/linkedin@2x.png
/* harmony default export */ const linkedin_2x = ({"src":"/_next/static/media/linkedin@2x.2b488d7c.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3klEQVR42hWOO0oDURiFv3PnamJG4rtSVBCHILgBa+MGRNyBtm7H3g2kVLOGKIigldUUFonEMCbM6/fOVx04D456t4MnM/qT0mzTqwHAAhIMXR1M78TZTkuxd3QiseJQAINzNw3Nvdhzd9njfVExShe8TApqMyRZU1YUiXkwH64TTo62Sb9/ubh/4zTM+WllrLUjksMNmvTH15jjgy2u9js8pnN8S7KiMs2yHGGMPsesd9s4iaJ5mtwMbNmJ3dgjwSyvWV1ypFlJXhvN6nMQ/def3ADFkfjLSutGkhPDf5BYWzSbSpVcAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/github@2x.png
/* harmony default export */ const github_2x = ({"src":"/_next/static/media/github@2x.4a42fa99.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42iWPSw7BUBiFLyamIiKoV1W09VqASAxRj5ihYjcEG8Aq2nHtok061qTdRo//vwY3OfnOSe7/iU6j5qlKBUOjl9ZKBSj0BpSZUfcRbQq61oYQAuO+gZGpc5aMOzE09ZTB43FHkiRI4hj32w3MZJelsF5ZCIIA55MN+7CH7/tYW0vkqBO83G03CMMQs+kE9vGAKPrCWsyR4UFf78ov3q8nrpcLXMeB67r/mwZmKtR6FVpTYcAmKOazMvc6LXkkDzzSgaGpab1cJDVFahKXmj8aO2yw4NXUnwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/instagram@2x.png
/* harmony default export */ const instagram_2x = ({"src":"/_next/static/media/instagram@2x.8811eb16.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEXvAHLvAHLvAHDvAG/vAG73rsT2orz2obv1nbf1lrP1lbP1lLH1k7H1krH0i6v0i6r0ianyZpPyZZPyZJLyYZHyYJDxQ4LxQ4HwQIDwOX7wNnzwDXTwC3TvAG7vAG3vAGnvAGgrpBCUAAAABXRSTlO6u/7+/j0Pkm0AAABHSURBVHjaDcpbAoAQEAXQq1GhNyU1Yva/ypzvA7CW2mUFLvdxvV8GJTOP/UOQ4PZpOCvE23VbvEBH46xJ1HIKPhYGmEQ0qx+d1QRh2L9n4AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/icons/google@2x.png
/* harmony default export */ const google_2x = ({"src":"/_next/static/media/google@2x.ba974f22.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEX+/v7////+/v/+/v79/v79/v3+/f3///////7+///+/v79/v/+/vr//fr8/f/8/f7++fn5+/r1+fb89fb/8+3q9e/86u321dfR5trT4O7V2/jO1/m4y/vVynz9tHX4nY6SxZuAvojugXtXkfT2TTyrAAAAB3RSTlO6u7v+/v7+z6IMYwAAAEJJREFUeNoVykUSgDAABMFFkgnB3f3/f6Toc0tYiAiEp2pTjyzjc3ZEIjuGdSmcknzvt7dEhum+ZuI/1w3eSRiICT9zCQM0s6Po7AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Footer.jsx










const Footer = ()=>{
    const [metaData, setMetaData] = (0,external_react_.useState)({
        star: 20,
        forks: 2
    });
    const [isHovering, setIsHovering] = (0,external_react_.useState)(false);
    const handleMouseOver = ()=>{
        setIsHovering(true);
    };
    const handleMouseOut = ()=>{
        setIsHovering(false);
    };
    (0,external_react_.useEffect)(()=>{
        const getData = async ()=>{
            const data = await fetch("https://github.com/Ranjika123").then((res)=>res.json());
            setMetaData({
                star: data.stargazers_count,
                forks: data.forks_count
            });
        };
        getData();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " flex select-none text-sm  py-16 mt-16 flex-col h-max items-center mx-auto justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "https://www.linkedin.com/in/ranjika-nethpriya-087268246/",
                        target: "blank",
                        className: " dark:hover:text-purple-400 hover:text-purple-600 font-semibold",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: linkedin_2x,
                                alt: "linkedin",
                                width: "30"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "https://github.com/Ranjika123",
                        target: "blank",
                        className: " dark:hover:text-purple-400 hover:text-purple-600 font-semibold",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: github_2x,
                                alt: "github",
                                width: "30"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "https://instagram.com/ranjika_neth/",
                        target: "blank",
                        className: " dark:hover:text-purple-400 hover:text-purple-600 font-semibold",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: instagram_2x,
                                alt: "instagram",
                                width: "30"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "mailto:ranjikaneth2005@gamil.com",
                        target: "blank",
                        rel: "noreferrer",
                        className: " dark:hover:text-purple-400 hover:text-purple-600 font-semibold",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: google_2x,
                                alt: "gmail",
                                width: "30"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "https://github.com/Ranjika123/",
                target: "blank",
                rel: "noreferrer",
                className: "flex flex-col text-center group hover:text-purple-800 w-max hover:font-black items-center text-gray-600 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-8 md:mt-12 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onMouseOut: handleMouseOut,
                        onMouseOver: handleMouseOver,
                        className: "relative transition-all ease-in-out duration-1000   ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: ` ${isHovering && "scale-150 blur-[6px]"} group font-bold animate-text duration-700 transition-all linear  group-hover:bg-white lg:text-gray-700 lg:dark:text-white/40 lg:group-hover:text-transparent bg-gradient-to-r mb-2 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg`,
                                children: "Ranjika Nethpriya"
                            }),
                            isHovering && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `opacity-0 bg-purple-100 px-1 md:px-2 py-1 rounded-2xl bg-opacity-30 backdrop-blur-xl hover:opacity-100 transition-all duration-1000 linear absolute top-[35%] left-[50%] -translate-x-[50%]  -translate-y-[50%] w-max text-gray-800 font-bold text-base z-10 `,
                                children: "Amazing ? ⭐ Hire Me"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex space-x-4 ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex dark:group-hover:text-purple-400 group-hover:text-purple-600  space-x-1 items-center ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaRegStar, {
                                        className: "h-4 w-4 group-hover:stroke-[2.2px] dark:group-hover:fill-purple-400  group-hover:fill-purple-800 "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-semibold text-sm group-hover:font-extrabold ",
                                        children: metaData.star
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex  dark:group-hover:text-purple-400 group-hover:text-purple-600 space-x-1 items-center ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiGitBranch, {
                                        className: "h-4 w-4 group-hover:stroke-[2.2px]  dark:group-hover:stroke-purple-400 group-hover:stroke-purple-800 "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-semibold text-sm group-hover:font-extrabold ",
                                        children: metaData.forks
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./public/pranjal-header-black.svg
/* harmony default export */ const pranjal_header_black = ({"src":"/_next/static/media/pranjal-header-black.d942c3a5.svg","height":2500,"width":3334,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/pranjal-header-white.svg
/* harmony default export */ const pranjal_header_white = ({"src":"/_next/static/media/pranjal-header-white.9ba60f67.svg","height":2500,"width":3334,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/Header.jsx
/* eslint-disable @next/next/no-img-element */ 








const Header = ()=>{
    const { systemTheme , theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const router = (0,router_namespaceObject.useRouter)().asPath;
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    let Links = [
        {
            name: "work",
            link: "/work"
        },
        {
            name: "about",
            link: "/about"
        },
        {
            name: "tech",
            link: "/tech"
        }
    ];
    const [isScrolled, setIsScrolled] = (0,external_react_.useState)(false);
    let [open, setOpen] = (0,external_react_.useState)(false);
    const touchRef = (0,external_react_.useRef)();
    const clickHandler = (link)=>{
        if (router != link) {
            setTimeout(()=>{
                setOpen(false);
            }, 700);
        }
    };
    const useOutsideAlerter = (ref)=>{
        (0,external_react_.useEffect)(()=>{
            /**
       * Alert if clicked on outside of element
       */ function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return ()=>{
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [
            ref
        ]);
    };
    useOutsideAlerter(touchRef);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        setMounted(true);
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: touchRef,
        className: `${isScrolled && "bg-opacity-[0.7] shadow-md drop-shadow-lg "} font-medium duration-500 bg-opacity-90 transition-all linear z-40 dark:text-white w-[75%] sm:w-[75%] md:w-[70%] lg:w-[55%] xl:w-[50%] max-w-6xl mx-auto  bg-white dark:bg-[#353535] drop-shadow-xs backdrop-blur-sm top-4 sticky rounded-2xl `,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between md:space-x-10 lg:space-x-12 xl:space-x-16 md:flex items-center place-items-center md:justify-center py-3 md:px-10 px-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "",
                        children: currentTheme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: pranjal_header_white,
                            alt: "header",
                            width: "100"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: pranjal_header_black,
                            alt: "header",
                            width: "100"
                        })
                    })
                }),
                currentTheme === "dark" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: ()=>{
                        setTheme("light");
                    },
                    className: "w-max md:order-8 fill-purple-600 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdLightMode, {
                            className: "w-5 h-5 lg:w-6 lg:h-6 fill-white "
                        }),
                        " "
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: ()=>{
                        setTheme("dark");
                    },
                    className: "w-max md:order-8 fill-purple-600 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdDarkMode, {
                            className: "w-5 h-5 lg:w-6 lg:h-6 fill-black "
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>setOpen(!open),
                    className: "transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem]  cursor-pointer items-center font-semibold md:hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: ` ${open && "rotate-45 translate-y-[5px] "} relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: ` ${open && "opacity-0 translate-x-20"} relative rounded-xl origin-center transition-all duration-1000 ease-in-out w-4 h-[0.1rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: ` ${open && "-rotate-45 -translate-y-[5px]"} relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: ` rounded-3xl md:rounded-none dark:bg-[#353535] bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 lg:transition-none transition-all duration-500 ease-in ${open ? "top-[3.5rem]" : "top-[-490px]"}`,
                    children: [
                        Links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "md:ml-8 text-base lg:text-lg md:my-0 my-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: link.link,
                                    onClick: ()=>clickHandler(`${link.name}`),
                                    className: `${router === link.link ? " text-purple-400 font-semibold " : " text-gray-700 dark:text-white "} hover:text-purple-500 dark:hover:text-purple-500 duration-500`,
                                    children: link.name
                                })
                            }, link.name)),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "md:ml-8  text-base xl:text-[1.1rem] font-regular md:my-0 my-7"
                        }, 4)
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.jsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_.ThemeProvider, {
        enableSystem: true,
        attribute: "class",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "land relative z-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664], () => (__webpack_exec__(8067)));
module.exports = __webpack_exports__;

})();