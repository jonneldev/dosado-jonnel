function printRange() {
    const start = parseInt(document.getElementById("startNum").value);
    const end = parseInt(document.getElementById("endNum").value);

    if (isNaN(start) || isNaN(end)) {
        console.log("Please enter valid numbers.");
        return;
    }

    console.log(`Printing numbers from ${start} to ${end}:`);
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}