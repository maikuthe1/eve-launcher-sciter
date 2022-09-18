import * as sys from "@sys";
import * as sciter from "@sciter";

function log(str)
{
    return;
  const plaintext = document.$("output");

  plaintext.append(str);
  console.log(str);
}

document.ready = function() {
    // calling native method defined in main.cpp
    const thisWindow = Window.this;
    //document.body.innerText = thisWindow.frame.nativeMessage();

    // get screen dimensions
    const [w, h] = Window.this.screenBox("frame", "dimension");

    // calculate screen center
    let x = w / 2;
    let y = h / 2;

    // get window dimensions with border
    const [wx, wy, ww, wh] = Window.this.box("rectw", "border", "screen", true);

    // calculate window top left corner
    const left = x - ww / 2;
    const top = y - wh / 2;
    Window.this.move(left, top, 400, 500)
}

var url = "https://ever-endless.org/assets/client/Ever%20Endless%20Game%20Launcher.zip";

function OnDownloadProgress(downloadedBytes, totalBytes) {
    log(`progress - ${downloadedBytes} - ${totalBytes} - ${Math.round(100 * downloadedBytes / totalBytes)}%`);
//     document.getElementById("play-button").innerHTML = totalBytes;
     document.getElementById("loading-fill").style.width = Math.round(100 * downloadedBytes / 30996620) + "%";
}

var filename = "";

document.getElementById("play-button").onclick = async function() {
    try{
        const response = await fetch(url, {
            headers: { "user-agent": "maiku-launcher" },
            downloadProgress: function(downloadedBytes, totalBytes) {
                OnDownloadProgress(downloadedBytes, totalBytes);
            }
        });

        const buffer = await response.arrayBuffer();

        let file = await sys.fs.open("launcher.zip", "w+", 0o666);

        await file.write(buffer);

        await file.close();
    } catch (e) {
        log("error: " + e);
    }


    /*.then((result) => {
        if(!result.ok) {
            // DOWNLOAD ERROR https://christosmonogios.com/2022/05/10/Use-the-Fetch-API-to-download-files-with-their-original-filename-and-the-proper-way-to-catch-server-errors/
        }
        document.getElementById("output").innerHTML = result.text();
        document.getElementById("play-button").innerHTML = "done";
        sys.fs.open("test.exe", "wb+").then(function(file){file.write(sciter.decode(result.blob).arrayBuffer()); file.close();});
        return result.blob();
    });*/

    //sciter.decode(fetch(url, {sync:true}).arrayBuffer());
//     sys.fs.open("test.exe", "wb+").then(function(file){file.write(); file.close();});

};
