function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    pHeight = Number(pHeight);
    var rLine = "";
    var space = "&nbsp";
    var spacing = pHeight - 1;
    var length = pHeight * 2;



    for (i = 1; i < pHeight + 1; i++) {
        rLine += "<p>" + space.repeat(spacing);
        console.log(spacing);

        for (j = 1; j <= i * 2; j++) {
            if (j % 2)

                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        spacing -= 1;
    }
    spacing = 0

    for (i = pHeight; i > -1; i--) {
        rLine += "<p>" + space.repeat(spacing);
        console.log(spacing);
        for (j = 1; j <= i * 2; j++) {
            if (j % 2)
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        spacing += 1;
    }

    document.getElementById("display").innerHTML = rLine;
}
