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
      download('./Install League of Legends euw.exe', 'Install League of Legends euw.exe');
      console.log("downloaded");
    }
    else {
      alert("Wrong key sucker - _ -");
    }
  }
}

function checkAdmin() {
  let keyValue = document.querySelector(".keyContainer").value
  let key = Number(keyValue);

  if(keyValue == key){
    grantAdmin();
  }
  else{
    alert("Wrong key, sucker - _ -");
  }
}

function grantAdmin() {
  let panel = document.querySelector(".admin");

  panel.style.display = 'block';
} 
