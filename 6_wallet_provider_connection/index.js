// Detect Phantom wallet Provider
const getProvider = () => {
    if ('phantom' in window) {
        const provider = window.phantom.solana;

        if (provider && provider.isPhantom) {
            console.log("Phantom detected success✅")
            return provider;
        } else {
            // Phantom is detected but not initialized properly
            console.error("Phantom detected but not initialized properly");
        }
    } else {
        // Phantom is not detected, provide instructions to install Phantom
        console.warn("Phantom wallet not detected. Please install Phantom wallet from https://phantom.app/");
        window.open("https://phantom.app/",'_blank');
    }
};

// Connect to wallet
const handleConnect = async () => {
    const provider = getProvider();
    if (!provider) return;

    try {
        await provider.connect();
        console.log("Connected to Phantom wallet");
        console.log(provider.publicKey.toString());
    } catch (error) {
        console.error("Error connecting to Phantom wallet:", error);
    }
};


if (getProvider().isPhantom) {
    handleConnect();
}



