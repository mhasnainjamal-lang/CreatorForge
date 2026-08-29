/* =====================================
   CREATORFORGE V1
   Browser-only JavaScript
===================================== */


/* =====================================
   HELPER
===================================== */

function get(id) {
    return document.getElementById(id);
}


/* =====================================
   COPY FUNCTION
===================================== */

async function copyText(text, button) {

    try {

        await navigator.clipboard.writeText(text);

        const original =
            button.textContent;

        button.textContent =
            "Copied ✓";

        setTimeout(() => {

            button.textContent =
                original;

        }, 1200);

    } catch {

        button.textContent =
            "Copy manually";

    }

}


/* =====================================
   TITLE GENERATOR
===================================== */

get("titleButton").addEventListener(
    "click",
    function () {

        const topic =
            get("titleTopic")
            .value
            .trim();

        const style =
            get("titleStyle")
            .value;

        const results =
            get("titleResults");

        results.innerHTML = "";

        if (!topic) {

            results.innerHTML =
                `<div class="result-box">
                    Please enter a video topic first.
                </div>`;

            return;
        }


        let titles = [];


        if (style === "viral") {

            titles = [

                `${topic} Just Changed Everything`,

                `The Truth About ${topic}`,

                `You NEED to Know This About ${topic}`,

                `Nobody Is Talking About ${topic}`,

                `I Tried ${topic} — Here's What Happened`

            ];

        }


        else if (style === "professional") {

            titles = [

                `${topic}: Everything You Need to Know`,

                `${topic} Explained: Complete Guide`,

                `The Complete Guide to ${topic}`,

                `${topic}: Features, Changes & What to Expect`,

                `Understanding ${topic}`

            ];

        }


        else if (style === "short") {

            titles = [

                `${topic} Explained`,

                `The Truth About ${topic}`,

                `${topic} Changed Everything`,

                `The Future of ${topic}`,

                `${topic}: What You Need to Know`

            ];

        }


        else {

            titles = [

                `How to Get Started With ${topic}`,

                `How ${topic} Actually Works`,

                `How to Use ${topic} Like a Pro`,

                `${topic}: Step-by-Step Guide`,

                `How to Master ${topic}`

            ];

        }


        titles.forEach(
            (title, index) => {

                const item =
                    document.createElement(
                        "div"
                    );

                item.className =
                    "result-item";

                const text =
                    document.createElement(
                        "span"
                    );

                text.textContent =
                    title;

                const button =
                    document.createElement(
                        "button"
                    );

                button.className =
                    "copy-button";

                button.textContent =
                    `Copy ${index + 1}`;

                button.addEventListener(
                    "click",
                    () =>
                        copyText(
                            title,
                            button
                        )
                );

                item.appendChild(text);

                item.appendChild(button);

                results.appendChild(item);

            }
        );

    }
);


/* =====================================
   DESCRIPTION BUILDER
===================================== */

get("descriptionButton").addEventListener(
    "click",
    function () {

        const topic =
            get("descriptionTopic")
            .value
            .trim();

        const keywords =
            get("descriptionKeywords")
            .value
            .trim();

        const results =
            get("descriptionResults");

        results.innerHTML = "";


        if (!topic) {

            results.innerHTML =
                `<div class="result-box">
                    Please enter your video topic.
                </div>`;

            return;
        }


        const keywordText =
            keywords ||
            "YouTube, creator tips, technology";


        const description =

`In this video, we're taking a closer look at ${topic}.

You'll learn the most important information about this topic, including key points, useful details and practical takeaways.

If you find this video helpful, make sure to like the video, subscribe to the channel and turn on notifications.

TIMESTAMPS

00:00 Introduction
00:30 ${topic}
02:00 Important points
04:00 Tips and examples
06:00 Final thoughts

KEYWORDS

${keywordText}

#YouTube
#CreatorTips
#${topic.replace(/\s+/g, "")}`;


        const box =
            document.createElement(
                "div"
            );

        box.className =
            "result-box";

        box.textContent =
            description;


        const button =
            document.createElement(
                "button"
            );

        button.className =
            "copy-button";

        button.style.marginTop =
            "12px";

        button.textContent =
            "Copy Description";


        button.addEventListener(
            "click",
            () =>
                copyText(
                    description,
                    button
                )
        );


        box.appendChild(
            document.createElement("br")
        );

        box.appendChild(button);

        results.appendChild(box);

    }
);


/* =====================================
   KEYWORD GENERATOR
===================================== */

get("keywordButton").addEventListener(
    "click",
    function () {

        const topic =
            get("keywordTopic")
            .value
            .trim();

        const results =
            get("keywordResults");

        results.innerHTML = "";


        if (!topic) {

            results.innerHTML =
                `<div class="result-box">
                    Please enter a keyword.
                </div>`;

            return;
        }


        const keywords = [

            topic,

            `${topic} explained`,

            `${topic} tutorial`,

            `${topic} guide`,

            `how ${topic} works`,

            `best ${topic}`,

            `${topic} tips`,

            `${topic} ideas`,

            `${topic} for beginners`,

            `${topic} 2026`,

            `YouTube tips`,

            `creator tips`

        ];


        const box =
            document.createElement(
                "div"
            );

        box.className =
            "result-box";


        const list =
            document.createElement(
                "div"
            );

        list.className =
            "keyword-list";


        keywords.forEach(
            keyword => {

                const span =
                    document.createElement(
                        "span"
                    );

                span.className =
                    "keyword";

                span.textContent =
                    keyword;

                list.appendChild(span);

            }
        );


        const button =
            document.createElement(
                "button"
            );

        button.className =
            "copy-button";

        button.style.marginTop =
            "12px";

        button.textContent =
            "Copy Keywords";


        button.addEventListener(
            "click",
            () =>
                copyText(
                    keywords.join(", "),
                    button
                )
        );


        box.appendChild(
            document.createTextNode(
                "Suggested keywords"
            )
        );

        box.appendChild(
            document.createElement("br")
        );

        box.appendChild(list);

        box.appendChild(button);

        results.appendChild(box);

    }
);


/* =====================================
   TEXT COUNTER
===================================== */

get("counterText").addEventListener(
    "input",
    function () {

        const text =
            this.value;


        get("characters")
            .textContent =
            text.length;


        const wordCount =
            text.trim()
            ? text.trim()
                .split(/\s+/)
                .length
            : 0;


        get("words")
            .textContent =
            wordCount;


        const lineCount =
            text
            ? text.split(/\r?\n/).length
            : 0;


        get("lines")
            .textContent =
            lineCount;

    }
);


/* =====================================
   REVENUE CALCULATOR
===================================== */

get("revenueButton").addEventListener(
    "click",
    function () {

        const views =
            Number(
                get("views").value
            ) || 0;


        const rpm =
            Number(
                get("rpm").value
            ) || 0;


        const revenue =
            (views / 1000) * rpm;


        get("revenueResult")
            .innerHTML =

            `Estimated revenue:
            <strong>
                $${revenue.toFixed(2)}
            </strong>`;

    }
);


/* =====================================
   ENGAGEMENT CALCULATOR
===================================== */

get("engagementButton").addEventListener(
    "click",
    function () {

        const views =
            Number(
                get("engagementViews").value
            ) || 0;


        const likes =
            Number(
                get("likes").value
            ) || 0;


        const comments =
            Number(
                get("comments").value
            ) || 0;


        let rate = 0;


        if (views > 0) {

            rate =
                (
                    (likes + comments)
                    / views
                ) * 100;

        }


        get("engagementResult")
            .innerHTML =

            `Engagement:
            <strong>
                ${rate.toFixed(2)}%
            </strong>`;

    }
);


/* =====================================
   MOBILE MENU
===================================== */

const menuButton =
    get("menuButton");

const navigation =
    get("navigation");


menuButton.addEventListener(
    "click",
    function () {

        navigation.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll(
        "#navigation a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                function () {

                    navigation.classList.remove(
                        "open"
                    );

                }
            );

        }
    );


/* =====================================
   YEAR
===================================== */

get("year")
    .textContent =
    new Date().getFullYear();


/* =====================================
   SCROLL REVEAL
===================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        element => {

            observer.observe(
                element
            );

        }
    );


/* =====================================
   CARD MOUSE EFFECT
===================================== */

document
    .querySelectorAll(
        ".tool-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        (
                            y - centerY
                        ) / 35;

                    const rotateY =
                        (
                            centerX - x
                        ) / 35;


                    card.style.transform =
                        `translateY(-8px)
                         perspective(700px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );