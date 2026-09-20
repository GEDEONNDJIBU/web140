/* ========================================
   COLOR THEORY PROJECT
======================================== */


/* ========================================
   COLOR PALETTES

   Students should replace these colors
   with their own colors.
======================================== */

const palettes = {

    palette1: {

        name: "Complementary",

        primary: "#8B1E1E",

        secondary: "#1F8C3E",

        accent: "#FFB8B8",

        background: "#F2F8FA",

        surface: "#1F3726",

        text: "#FFB8B8"

    },


    palette2: {

        name: "Analogous",

        primary: "#2463AB",

        secondary: "#238EA8",

        accent: "#23A898",

        background: "#233AA8",

        surface: "#EAF4F8",

        text: "#FFFFFF"

    },


    palette3: {

        name: "Triadic",

        primary: "#80A857",

        secondary: "#A86A58",

        accent: "#5868A8",

        background: "#4D5347",

        surface: "#33241F",

        text: "#FFFFFF"

    }

};


/* ========================================
   APPLY SELECTED PALETTE
======================================== */

function applyPalette(palette) {

    const root =
        document.documentElement;


    /* Apply palette colors */

    root.style.setProperty(
        "--primary",
        palette.primary
    );


    root.style.setProperty(
        "--secondary",
        palette.secondary
    );


    root.style.setProperty(
        "--accent",
        palette.accent
    );


    root.style.setProperty(
        "--background",
        palette.background
    );


    root.style.setProperty(
        "--surface",
        palette.surface
    );


    root.style.setProperty(
        "--text",
        palette.text
    );


    /* Update HEX values */

    document.getElementById("primaryHex").textContent =
        palette.primary;


    document.getElementById("secondaryHex").textContent =
        palette.secondary;


    document.getElementById("accentHex").textContent =
        palette.accent;


    document.getElementById("backgroundHex").textContent =
        palette.background;


    document.getElementById("textHex").textContent =
        palette.text;

}


/* ========================================
   PALETTE BUTTONS
======================================== */

const paletteButtons =
    document.querySelectorAll("[data-palette]");


paletteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const paletteName =
            button.dataset.palette;


        const selectedPalette =
            palettes[paletteName];


        applyPalette(selectedPalette);

    });

});


/* ========================================
   INITIAL PALETTE
======================================== */

applyPalette(palettes.palette1);
