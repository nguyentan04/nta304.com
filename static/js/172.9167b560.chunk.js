"use strict";
(self.webpackChunkdoge_zone_app = self.webpackChunkdoge_zone_app || []).push([
    [172], {
        72172: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            });
            s(72791);
            var n = s(43504),
                i = s(4484),
                m = s(62780),
                l = s(12679),
                a = s(81694),
                o = s.n(a),
                c = s(80184),
                r = function(e) {
                    var t = e.title,
                        s = e.description,
                        i = e.textButton,
                        l = e.className,
                        a = e.onClick,
                        r = e.link;
                    return (0, c.jsxs)("div", {
                        className: o()("items-left flex flex-col justify-center", l),
                        children: [(0, c.jsx)("h2", {
                            className: "mb-4 text-2xl font-bold tb:mb-8 tb:text-4xl",
                            children: t
                        }), (0, c.jsx)("p", {
                            className: "mb-8 max-w-[600px] text-sm font-normal tb:mb-16 tb:text-base",
                            children: s
                        }), r ? (0, c.jsx)(n.rU, {
                            to: r,
                            children: (0, c.jsx)(m.Z, {
                                variant: "primary",
                                text: i,
                                onClick: a
                            })
                        }) : (0, c.jsx)(m.Z, {
                            variant: "primary",
                            text: i,
                            onClick: a
                        })]
                    })
                },
                x = s(25492),
                d = s(61918),
                g = s(1876),
                A = s(32819),
                p = s(91905),
                b = function() {
                    return (0, c.jsxs)(l.Z, {
                        children: [(0, c.jsxs)("div", {
                            className: "mb-16 flex flex-col-reverse md:flex-row",
                            children: [(0, c.jsx)(r, {
                                title: "DogeZone Ecosystem",
                                description: "DogeZone supports users to access various services in the Dogecoin/meme ecosystem. Our mission is to allow communities to bootstrap new, decentralized metaverses.",
                                textButton: "Read more",
                                className: "ml-24 flex-shrink-0 md:w-1/4",
                                onClick: function() {
                                    return window.open("https://docs.dogezone.io/intro")
                                }
                            }), (0, c.jsx)("div", {
                                className: "relative flex-1",
                                children: (0, c.jsx)("img", {
                                    src: x,
                                    alt: "",
                                    className: "h-full w-full object-fill"
                                })
                            })]
                        }), (0, c.jsx)("div", {
                            className: "mb-0 bg-background-home-2 bg-contain bg-no-repeat xl:mb-16",
                            children: (0, c.jsx)("div", {
                                className: "m-auto w-2/3 pt-[15%] pb-[49%]",
                                children: (0, c.jsx)(r, {
                                    title: "Decentralized finance",
                                    description: "DogeZone is an one-stop decentralized platform that holders are able to benefit from staking $DGZ, Farming LPs, lock tokens to earn NFTs.",
                                    textButton: "Read more",
                                    className: "max-w-[450px]",
                                    link: i.Z6.APP_FARMING.path
                                })
                            })
                        }), (0, c.jsxs)("div", {
                            className: "relative flex h-[324px] w-full items-center",
                            children: [(0, c.jsx)("img", {
                                src: g,
                                alt: "",
                                className: "sm:opacity-1 absolute top-1/2 h-[120px] w-[120px] -translate-y-1/2 sm:h-[161px] sm:w-[161px] xl:top-[100px] xl:h-full xl:w-[324px]"
                            }), (0, c.jsx)("div", {
                                className: "flex h-[150px] w-full items-center rounded-md border border-white bg-app-bg-green",
                                children: (0, c.jsxs)("div", {
                                    className: "ml-auto flex w-4/5 flex-col items-start justify-between xl:flex-row xl:items-center",
                                    children: [(0, c.jsx)("p", {
                                        className: "mb-8 ml-4 text-sm xl:mb-0 xl:ml-0 xl:text-xl",
                                        children: "Join staking $DGZ to earn Genesis NFTs and govern the broader DogeZone ecosystem."
                                    }), (0, c.jsxs)("div", {
                                        className: "mx-4 flex items-center gap-4 xl:ml-0",
                                        children: [(0, c.jsx)(n.rU, {
                                            to: i.Z6.APP_STAKING.path,
                                            className: "self-center",
                                            children: (0, c.jsx)("span", {
                                                className: "text-sm font-bold xl:text-xl",
                                                children: "Stake now"
                                            })
                                        }), (0, c.jsx)(n.rU, {
                                            to: i.Z6.APP_STAKING.path,
                                            className: "flex-shrink-0",
                                            children: (0, c.jsx)("img", {
                                                src: A,
                                                alt: ""
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), (0, c.jsxs)("div", {
                            className: "relative mb-16 flex w-full flex-col items-center",
                            children: [(0, c.jsx)(r, {
                                title: "NFT DogeZone",
                                description: "We are building a Metaverse of Doge and NFTs, in which owners of DogeZone Genesis NFTs get rewarded for holding $DGZ",
                                textButton: "Marketplace",
                                className: "ml-24 mb-16 flex-shrink-0 self-end pt-0 xl:pt-24",
                                link: i.Z6.APP_MARKETPLACE.path
                            }), (0, c.jsx)("div", {
                                className: "m-auto w-3/4",
                                children: (0, c.jsx)("img", {
                                    src: d,
                                    alt: "",
                                    className: "h-full w-full object-fill"
                                })
                            })]
                        }), (0, c.jsx)("div", {
                            className: "mb-16 flex justify-start bg-background-home-4 bg-cover bg-center",
                            children: (0, c.jsx)("div", {
                                className: "m-auto flex w-2/3 py-[7%]",
                                children: (0, c.jsx)(r, {
                                    title: "Daily BTC Price Prediction",
                                    description: "Bitcoin Price Prediction Game allows you to practice in predicting short term movements of BTC prices. Buy a ticket to join and win big prizes daily.",
                                    textButton: "Join now",
                                    className: "max-w-[450px]",
                                    link: i.Z6.APP_BET.path
                                })
                            })
                        }), (0, c.jsxs)("div", {
                            className: "mb-16 flex items-center justify-center text-sm font-semibold  xl:mb-0 xl:text-2xl",
                            children: [(0, c.jsx)("p", {
                                children: "Join DogeZone minigame and win VIP Rewards"
                            }), (0, c.jsx)("img", {
                                src: p,
                                alt: ""
                            })]
                        }), (0, c.jsx)("div", {
                            className: "flex justify-center bg-background-home-5 bg-contain bg-no-repeat",
                            children: (0, c.jsx)("div", {
                                className: "mt-[100%]",
                                children: (0, c.jsx)(n.rU, {
                                    to: i.Z6.APP_BET.path,
                                    children: (0, c.jsx)(m.Z, {
                                        variant: "primary",
                                        text: "Play now",
                                        className: "xl:h-[146px] xl:w-[400px] xl:text-3xl"
                                    })
                                })
                            })
                        })]
                    })
                }
        },
        91905: function(e) {
            e.exports = "data:image/png;base64,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"
        },
        61918: function(e, t, s) {
            e.exports = s.p + "static/media/background-home-3.5ace1c09894983018743.png"
        },
        25492: function(e, t, s) {
            e.exports = s.p + "static/media/background-home.7d73f630a4fea424a09f.png"
        },
        32819: function(e) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgBzZHRDYAgDESLEzgCG8gIOiFsoBuJk3SEesYm+mWgxIRLLtzPPdKW6G+JSIATPJJFKLLc2k0QlDZ51CHEIXi8vpCT4ElzhpcLwAi2DQMyUJtc7QgRDpoPeKZS4aP1tcRcdYnWcjSXFcDmsgKCjmA99bdO4oCukbBqLUsAAAAASUVORK5CYII="
        },
        1876: function(e, t, s) {
            e.exports = s.p + "static/media/rocket.6baa1d8254c2a7726f0e.png"
        }
    }
]);
//# sourceMappingURL=172.9167b560.chunk.js.map