function selectBrowser(browser) {
    switch (browser) {
        case "chrome":
            console.log("Lanch " + browser);
            break;
        case "firefox":
            console.log("Lanch " + browser);
            break;
        case "edge":
            console.log("Lanch " + browser);
            break;
        default:
            console.log("Please pas the valid browser name")    
    }
}

selectBrowser("chrome")