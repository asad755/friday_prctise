import chalk from 'chalk';
// Simulate an asynchronous data fetch using callbacks
const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
        callback(null, "Fetched data");
    }, 1000);
};
// Simulate data processing using callbacks
const processDataWithCallback = (data, callback) => {
    setTimeout(() => {
        callback(null, `Processed: ${data}`);
    }, 1000);
};
const displayDataWithCallbacks = () => {
    console.log(chalk.blueBright("Fetching data..."));
    fetchDataWithCallback((error, data) => {
        if (error) {
            console.error(chalk.redBright(`Error: ${error}`));
            return;
        }
        console.log(chalk.greenBright(`Data fetched: ${data}`));
        console.log(chalk.blueBright("Processing data..."));
        if (data) {
            processDataWithCallback(data, (error, processedData) => {
                if (error) {
                    console.error(chalk.redBright(`Error: ${error}`));
                    return;
                }
                console.log(chalk.greenBright(`Data processed: ${processedData}`));
            });
        }
    });
};
displayDataWithCallbacks();
