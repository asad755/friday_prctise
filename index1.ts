import chalk from 'chalk';

let hack_Nasa = async function(): Promise<void> {
    let delay = (time: number) => new Promise<void>((resolve) => setTimeout(resolve, time));

    await delay(1000);
    console.log(chalk.greenBright("Establishing secure connection to the satellite....Done"));
    await delay(1000);
    console.log(chalk.greenBright("Downloading data from the satellite....Done"));
    await delay(1000);
    console.log(chalk.greenBright("Decrypting data....Done"));
    await delay(1000);
    console.log(chalk.greenBright("Processing data....Done"));
    await delay(1000);
    console.log(chalk.greenBright("Sending data to the server....Done"));
    await delay(1000);
    console.log(chalk.greenBright("Data sent successfully"));
    await delay(1000);
    console.log(chalk.greenBright("Mission complete"));
};

hack_Nasa();