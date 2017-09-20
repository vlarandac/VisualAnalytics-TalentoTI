# [TALENTO TI](http://www.talentoti.gov.co/635/w3-article-14158.html)

## ¿QUÉ ES EL PROGRAMA TALENTO TI?

Es una iniciativa del Ministerio de Tecnologías de la Información y las Comunicaciones que busca fortalecer la Industria TI en Colombia.
La iniciativa Talento TI del MinTIC es una de las apuestas del Plan Vive Digital para la gente que busca promover la formación de los colombianos en carreras TI para impulsar la competitividad, la investigación, la innovación y la proyección internacional del sector TI del país. Necesitamos formar más y mejores profesionales en áreas TI para potenciar procesos productivos en diferentes sectores de la economía, a través de soluciones e innovaciones de base tecnológica.

El MinTIC, en alianza con el Icetex y el Ministerio de Educación, apoyan a miles de colombianos para estudiar carreras relacionadas con las Tecnologías de la Información a través de créditos condonables. A la fecha, el MinTIC ha beneficiado más de 21.700 personas con programas de formación para fortalecer la formación de Talento en áreas relacionadas con tecnologías de información, de los cuales más de 15.400 son de cursos de educación continuada y 6.364 colombianos que han accedido a la oportunidad de estudiar carreras relacionadas con tecnologías de información en los niveles técnico, tecnólogo y universitario a través de créditos condonables.

Para este año 2017 no han abierto convocatoria, pero siguen entregando creditos a quienes se incribieron el año anterior.

# Descripción de los datos 

## [Convenios Talento TI 2012 2016](https://www.datos.gov.co/Ciencia-Tecnolog-a-e-Innovaci-n/Beneficiarios-de-los-Convenios-Talento-TI-2012-201/y77w-v3k8)

### ¿Qué hay en este Conjunto de Datos?
El datasset elegido esta compuesto por 7.627 Filas 25 Columnas.

Se actualiza mensualmente y la información que se encuentra allí contenida hace relación a los distintos beneficiados que ha tenido el programa desde el año 2012, presentando características asociadas al beneficiario y su lugar de origen, e información relacionada con el tio de programa, nivel, entidad, lugar de ubicación, tipo de crédito asignado y estado actual junto con una observación. 

En el siguiente emlace se encuentra la visualización desarrollada para estos datos. 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Beneficiarios Talento TI</title>
    <style>
        body {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
        }
        label {
          margin-right: 1rem;
        }
        fieldset {
          border: none;
        }
        legend {
          font-weight: bold;
        }
        div.tooltip {
          position: absolute;
          text-align: center;
          width: 100px;
          height: 13px;
          padding: 1px;
          font: 11px sans-serif;
          background: lightgray;
          border: 0px;
          border-radius: 4px;
          pointer-events: none;
        } 
        .axis text {
          font: 10px sans-serif;
        }
      
        .legend text {
          font: 10px sans-serif;
        }
      
        .axis line,
        .axis path {
          fill: none;
          stroke: #000;
          shape-rendering: crispEdges;
        }
      
        .path-line {
          fill: none;
          stroke: yellow;
          stroke-width: 1.5px;
        }
      
        svg {
          background: #f0f0f0;
        }
    </style>
</head>
<body>
    <h1>BENEFICIARIOS TALENTOS TI - 2012-2017</h1>
<img src="./talentoti.jpg" border="0" width="80" height="80">

    <svg width="960" height="500"/>

    <div class="controls"></div>

<script src="//d3js.org/d3.v4.min.js"></script>
<script src="//cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js" charset="utf-8"></script>
<script src="script-compiled-4.js"></script>
<script>
    // change frame height
    d3.select(self.frameElement).style('height', '660px');
</script>

</body>
</html>

## Lo que se espera conseguir con la visualización:

Resumir la distribución de beneficiarios del programa Talentos TI por departamento y programa en cada una de las convocatorias.

Hipotesis: los beneficiarios por departamentos eligen programas de los mismos niveles en las distintas convocatorias. 

## Insights

Por medio de la visualización elegida podemos  determinar que en sus inicios el programa Convenio Talentos TI impulsó a los estudiantes a que se vincularan en programas tecnológicos en su gran mayoría, y en menor proporción programas Universitarios, teniendo la mayor acogida en los departamentos de la zona cafetera en el año 2012 y 2013 primera convocatoria.  Para los años siguientes se vio un incremento y una nivelación hacia los programas de nivel Técnico Laboral y Técnico profesional  y una mayor participación de departamentos de otras zonas del país, con una participación bastante alta en el departamento Nariño para el 2013 y 2014 primera convocatoria.  En la segunda convocatoria del 2014 se ve la inclusión de programas de nivel Maestría y alguna presencia de programas Universitarios.
 
Hacia el año 2015 se puede ver una cobertura muy baja en la asignación de beneficios para todos los niveles, y para los últimos dos años en 2016 y 2017 el mayor incentivo ha sido brindado a estudiantes de carreras universitarias sobre cualquiera de los otros niveles. 
 
Teniendo en cuenta la naturaleza del programa, que está enfocado a carreras del área de TI podemos ver que las tendencias aumentaron cuando se incluyeron programas de fortalecimiento de la industria TI en el país, los departamentos que mayor beneficio han obtenido de las distintas convocatorias son en los que se encuentran las grandes ciudades como el Distrito Capital, y el Valle del Cauca, seguido por ciudades intermedias pero con desarrollo constante tales como las de la zona cafetera, los Santanderes, Boyacá y Nariño.  

De igual manera se puede ver la poca participación del beneficio en estudiantes residentes en la zona costera y en las zonas de los llanos orientales y región pacífica, lo cual podría verse reflejado en el desarrollo más lento en cuanto a tecnología y a oferta de programas de este tipo en esas zonas del país. 

Con respecto a la hipótesis planteada, no puede llegar a concluirse que el nivel de programas elegidos por los beneficiarios por departamento sean los mismos en las distintas convocatorias, ya que no se evidencia en el análisis presentado, adicionalmente la información que se tiene nos presenta claramente que no siempre se benefician programas de los mismo niveles.  Así mismo podemos ver que aunque en la definición del programa no se ha planteado que sea para programas del nivel de matesría existen beneficiarios de ese nivel en algunos periodos.

