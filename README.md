# UI Engine Test

Im Unterordner "uiengine" befindet sich die Doku [zu diesem Tool](https://github.com/dennisreimann/uiengine). 

Zum Testzeitpunkt (Juni 2019) war die Version 2.2.0 aktuell. Ende 2021 sind wir bei Version 3.3.0.

## Installation

Dieses Projekt als ZIP herunterladen oder per git clonen, dann auf der obersten Ebene des Projekts ein einfaches Installationskommando ausführen:

```bash
npm install
```

Ich habe in diesem Testprojekt der UI Engine noch Bootstrap hinzugefügt. Allerdings war der erste Versuch nicht erfolgreich, die CSS-Datei direkt aus den node_modules zu verlinken. 

In einem weiteren Schritt müssen auch noch Gulp oder Grunt und diverse Prozesse integriert werden, damit die Generierung von Sass ermöglicht wird und evtl. auch das Kopieren von Dateien.
