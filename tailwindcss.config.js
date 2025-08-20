module.exports = {
    content: [
        './pages/**/*.{js,ts,jax,tsx}',
        './components/**/*.{js,ts,jax,tsx}',
    ],
};

//This one is for the best performance to avoid from false positives
//need to be specific as possible about the content config