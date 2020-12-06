window.onload = (event) => {
    var table = document.getElementById("shortcutTable");
    chrome.commands.getAll(function(commands){
      for (var i = 0; i <= commands.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = commands[i]["description"];
        if (commands[i]["shortcut"]) {
            cell2.innerHTML = commands[i]["shortcut"];
        } else {
            cell2.innerHTML = "Click button below to configure";
        }
      }
    });
};
