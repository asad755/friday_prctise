import chalk from "chalk";
// Simulate an asynchronous data fetch using promises
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 1000);
    });
};
// Simulate data processing using promises
const processDataPromise = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
};
const displayDataWithPromises = () => {
    console.log(chalk.blueBright("Fetching data..."));
    fetchDataPromise()
        .then((data) => {
        console.log(chalk.greenBright(`Data fetched: ${data}`));
        console.log(chalk.blueBright("Processing data..."));
        return processDataPromise(data);
    })
        .then((processedData) => {
        console.log(chalk.greenBright(`Data processed: ${processedData}`));
    })
        .catch((error) => {
        console.error(chalk.redBright(`Error: ${error}`));
    });
};
displayDataWithPromises();
