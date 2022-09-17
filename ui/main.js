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
        const top  = y - wh / 2;
        Window.this.move(left, top, 400, 500)
      }

      var url = "https://speed.hetzner.de/100MB.bin";

        function OnDownloadProgress(downloadedBytes, totalBytes) {
            document.getElementById("play-button").innerHTML=totalBytes;
            document.getElementById("loading-fill").style.width = ((downloadedBytes / totalBytes) * 100) + "%";
        }

      document.getElementById("play-button").onclick = function() {
        document.getElementById("play-button").innerHTML = "test";
          fetch(url, {

            downloadProgress: function(downloadedBytes,totalBytes) {OnDownloadProgress(downloadedBytes, totalBytes);}
          }
          ).then((data) => {
      document.getElementById("play-button").innerHTML="done";
    });
      };
