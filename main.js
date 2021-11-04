let keys = [
  "1234"
];

let adminKey = "1234";


function checkKey() {
  let keyValue = document.querySelector(".keyContainer").value;

  for (let i = 0; i < keys.length; i++) {
    let key = Number(keys[i]);
    if (keyValue == key) {
      const download = (path, filename) => {
        // Create a new link
        const anchor = document.createElement('a');
        anchor.href = path;
        anchor.download = filename;

        // Append to the DOM
        document.body.appendChild(anchor);

        anchor.click();

        // Remove element from DOM
        document.body.removeChild(anchor);
      };

      // Example download
      download('./InTheTrap.mp3', 'InTheTrap.mp3');
      console.log("downloaded");
    }
  }
}

function checkAdmin() {
  let keyValue = document.querySelector(".adminBtn").value;
  let key = Number(keyValue);

  if(key == adminKey){
    grantAdmin();
  }
  else{
    alert("Wrong key, sucker - _ -");
    console.log(key, adminKey);
  }
}

function grantAdmin() {
  let panel = document.querySelector(".admin");

  panel.style.display = 'block';
}

function addKeys(){
  let keyValue = document.querySelector(".addKey").value;

  keys[keys.length] = keyValue;
  console.log(`Added key ${keyValue}`);
}
