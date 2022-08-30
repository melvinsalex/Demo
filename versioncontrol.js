console.log(" Android version history from Android 6.0 to android 9.0 ")


version = [
    {
    versionNo: "6.0",
    name: "Marshmallow",
    releaseDate: "October 2, 2015",
    bugs: ["Battery Problems", "Wi-Fi and Data Connection Errors", "Audio Issues and Speaker Issues"],
    features: [
        "Contextual search from keywords within apps.",
        "App Standby feature.",
        "Alphabetically accessible vertical application drawer.",
        "Application search bar and favorites.",
        "Native fingerprint reader support."],
    author:["Google"],
    type: "major"

},
{
    versionNo: "7.0",
    name: "Nougat",
    releaseDate: "August 22, 2016",
    bugs: [" Ambient display issue", "Camera issue"],
    features: ["Ability to display color calibration.",
        "Ability to zoom in the screen.",
        "Ability to switch to the last opened app by double-tapping the overview button.",
        "Added an Emergency information part.",
        "Added the Clear All button to the Overview screen."],
    author:["Google"],
    type: "major"

},
{
    versionNo: " 7.1 ",
    name: "Nougat",
    releaseDate: "October 4, 2016",
    bugs: ["Unstable app", "Random reboots"],

    features: ["Rearranged notification shade.",
        "'Restart' option added to power button menu",
        "Touch/display performance improvements.",
        "Moves (Fingerprint swipe down gesture – opt-in)."],
    author:["Google"],
    type: "enhancement"

},
{
    versionNo: " 8.0 ",
    name: " Oreo ",
    releaseDate: "	August 21, 2017",
    bugs: ["Installation problem", "Random Reboots"],

    features: ["Picture-in-picture support.",
        "Restructured Settings by regrouping sections into similar entries.",
        "Adaptive icons",
        "Notification improvements."],
    author:["Google"],
    type: "major "

},
{
    versionNo: "8.1",
    name: "Oreo",
    releaseDate: "December 5, 2017",
    bugs: ["sound issue", "'Camera Blank' issue"],

    features: ["Neural networks API.",
        "Shared memory API.",
        "WallpaperColors API."],
    author:["Google"],
    type: "patch "

},
{
    versionNo: "9.0",
    name: "Pie",
    releaseDate: "August 6, 2018",
    bugs: ["Charging Problems", "phone rotation issues", "Time Not Showing On The Status Bar"],

    features: ["New user interface for the quick settings menu.",
        " The clock has moved to the left of the notification bar.",
        " The 'dock' now has a semi-transparent background. ",
        "Rounded corners across the UI."],
    author:["Google"],
    type: "major"

}
]
/*
numVersions=0
for (i in version){
    numVersions++
}*/

const search =(word)=>{

var results=[]
var tosearch =word
for(var i=0;i<version.length;i++){
    for(j in version[i]){
        if(version[i][j].indexOf(tosearch)!=-1){
            results.push(version[i]);
            console.log(results)
        }
    }
}
}
search("sound issue")