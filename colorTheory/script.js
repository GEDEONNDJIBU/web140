const palettes = {
    palette1: {
        name: "Complementary",
        primary: "#8B1E1E",
        secondary: "#1F8C3E",
        accent: "#FFB8B8",
        background: "#4D2424",
        surface: "#1F3726",
        text: "#FFB8B8"
    },

    palette2: {
        name: "Analogous",
        primary: "#2463A8",
        secondary: "#238EA8",
        accent: "#23A898",
        background: "#3823A8",
        surface: "#238EA8",
        text: "#FFFFFF"
    },

    palette3: {
        name: "Triadic",
        primary: "#80A857",
        secondary: "#A86A58",
        accent: "#5868A8",
        background: "#33241F",
        surface: "#4D5347",
        text: "#FFFFFF"
    }
};

function changePalette(paletteName) {
    const palette = palettes[paletteName];
    const root = document.documentElement;

    root.style.setProperty("--primary", palette.primary);
    root.style.setProperty("--secondary", palette.secondary);
    root.style.setProperty("--accent", palette.accent);
    root.style.setProperty("--background", palette.background);
    root.style.setProperty("--surface", palette.surface);
    root.style.setProperty("--text", palette.text);
}
