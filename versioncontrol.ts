let version = [
    {
        versionNo: "6.0",
        name: "Marshmallow",
        releaseDate: "October 2, 2015",
        bugs: ["601501", " Battery Problems",      //number typed is Bug Id
            "601502", " Wi-Fi and Data Connection Errors",
            "601503", " Audio Issues and Speaker Issues"],
        features: [
            "Contextual search from keywords within apps.",
            "App Standby",
            "Alphabetically accessible vertical application drawer.",
            "Application search bar and favorites.",
            "Native fingerprint reader support."],
        arrAuthor: ("google"),
        type: "major"

    },
    {
        versionNo: "7.0",
        name: "Nougat",
        releaseDate: "August 22, 2016",
        bugs: ["701601", " Ambient display issue",
            "701602", " Camera issue"],
        features: ["Ability to display color calibration.",
            "Ability to zoom in the screen.",
            "Ability to switch to the last opened app by double-tapping the overview button.",
            "Added an Emergency information part.",
            "Added the Clear All button to the Overview screen."],
        arrAuthor: "google",
        type: "major"

    },
    {
        versionNo: " 7.1 ",
        name: "Nougat",
        releaseDate: "October 4, 2016",
        bugs: ["711601", " Unstable app",
            "711602", " Random reboots"],

        features: ["Rearranged notification shade.",
            "'Restart' option added to power button menu",
            "Touch/display performance improvements.",
            "Moves (Fingerprint swipe down gesture)."],
        arrAuthor: "google",
        type: "enhancement"

    },
    {
        versionNo: " 8.0 ",
        name: " Oreo ",
        releaseDate: "	August 21, 2017",
        bugs: ["801701", " Installation problem",
            "801702", "Random Reboots"],

        features: ["Picture-in-picture support.",
            "Restructured Settings by regrouping sections into similar entries.",
            "Adaptive icons",
            "Notification improvements."],
        arrAuthor: "google",
        type: "major "

    },
    {
        versionNo: "8.1",
        name: "Oreo",
        releaseDate: "December 5, 2017",
        bugs: ["811701", " sound issue",
            "811702 ", "'Camera Blank' issue"],

        features: ["Neural networks API",
            "Shared memory API",
            "WallpaperColors API"],
        arrAuthor: "google",
        type: "patch "

    },
    {
        versionNo: "9.0",
        name: "Pie",
        releaseDate: "August 6, 2018",
        bugs: ["901801", " Charging Problems",
            "901802", " phone rotation issues",
            "901803", " Time Not Showing On The Status Bar"],

        features: ["New user interface for the quick settings menu",
            " The clock has moved to the left of the notification bar",
            " The 'dock' now has a semi-transparent background",
            "Rounded corners across the UI"],
        arrAuthor: "google",
        type: "major"

    }
]


const searchData = (word:any) => {
    const keyword = word;

    const results = version.filter(object => Object.values(object).some(i => i.includes(keyword)));
    return (results);
}


function authorsWorked(version:any, key:any) {
    let arrAuthor:any = [];

    version.forEach((x:any) => {

        if (arrAuthor.some((val:any) => { return val[key] == x[key] })) {

            arrAuthor.forEach((k:any) => {
                if (k[key] === x[key]) {
                    k["occurrence"]++
                }
            })

        } else {
            let a:any = {}
           a[key] = x[key]
            a["occurrence"] = 1
            arrAuthor.push(a);
        }
    })
    for (let j of arrAuthor) {
        console.log("Author worked in most releases are", '\n', j.arrAuthor)
        break
    }
    return arrAuthor
}


let year = 2017
let n:any = searchData(year).length

console.log(`1) How many releases were made in ${year}?`)
console.log(`Number of releases made in year ${year} is ${n}`)
console.log("-----------------------------------------")


let updateType = "major"
n = searchData(updateType)
console.log(`2) How many releases were type ${updateType}?`)
console.log(`Type ${updateType} was released ${n.length} times`)
console.log("-----------------------------------------")

let featureName = "Neural networks API"
n = searchData(featureName).length
console.log(`3) How many versions have the speecific feature name ${featureName}?`)
console.log(`${n} version have the feature ${featureName}`)
console.log("-----------------------------------------")

console.log(`4) Which author has worked in many releases?`)
authorsWorked(version, "arrAuthor")
console.log("-----------------------------------------")


let bug_ID = "601501"
console.log(`5) In which release bug id  ${bug_ID} is present?`)
searchData(bug_ID).forEach(i => {
    console.log(`Bug Id ${bug_ID} is found in version ${i.versionNo}`);
});
console.log("-----------------------------------------")
