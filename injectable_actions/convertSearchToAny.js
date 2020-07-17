var url = new URL(window.location.href);

// Clean the query
var newHashQuery = "";
var regex = /(tag%1F.*?)%1F/gm;
while ((m = regex.exec(url.hash)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    newHashQuery += " " + m[1];
}
regex = /%1F/g;
newHashQuery = "#?an=true&query=any: " + newHashQuery.replace(regex, ":");
url.hash = newHashQuery;
console.log("pre URL = " + window.location.href);
console.log("post URL = " + url.toString());
// Set the new URL
window.location.href = url.toString();
