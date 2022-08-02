const fs = require('fs');

const details = {
    name: "Ram Sharma",
    address : "Bhaktapur",
    college : "Harvard"
}

const jsonData = JSON.stringify(details);

fs.writeFile('details.json', jsonData, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Data written in file");

    fs.readFile('details.json', 'utf-8', (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(JSON.parse(data));
    });
});

