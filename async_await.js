import chalk from 'chalk';
// Simulate an asynchronous data fetch
const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 1000);
    });
};
// Simulate data processing
const processData = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
};
const displayData = async () => {
    try {
        console.log(chalk.blueBright("Fetching data..."));
        const data = await fetchData();
        console.log(chalk.greenBright(`Data fetched: ${data}`));
        console.log(chalk.blueBright("Processing data..."));
        const processedData = await processData(data);
        console.log(chalk.greenBright(`Data processed: ${processedData}`));
    }
    catch (error) {
        console.error(chalk.redBright(`Error: ${error}`));
    }
};
displayData();
